# React 中的 diff 算法


>此文档内容参考了 三元神 的掘金小册 《React Hooks 与 Immutable 数据流实战》  
>因为他已经总结得很好了，所以本着不做太多重复的工作的原则，我直接使用了他的图（说实话，画得很好）

## 一图胜千言啊
![image](https://user-images.githubusercontent.com/57960778/79013288-0624ab80-7b2e-11ea-88de-e15b5c1dc8bc.png)

## shouldComponentUpdate 相关
除了 diff 算法，我们可以谈谈具体的 compare 是如何比较的

### **shouldComponentUpdate**
- 描述：是用于优化以避免不必要的更新
- 方法：对比 props 和 state `浅对比`

### **React.PureComponent**
- 描述：简化 shouldComponentUpdate，直接使用 PureComponent ，就可以默认使用 shouldComponentUpdate
- 方法：用此替代 `React.PureComponent`  --> `React.Component`

### **React.memo**
- 描述：用于 functional component ，唯一的区别是只比较 `props`
- 方法：`export default React.memo (Component);`
```js
function Component () {
    //xxx
} 

export default React.memo (Component);
```


## fbjs 源码
什么是 fbjs ，这有 2 段说明

>A collection of utility libraries used by other Facebook JS projects.
>To make it easier for Facebook to share and consume our own JavaScript.
>
>译：Facebook 使用的 JS 的工具集

`shoullowEqual` 代码阅读说明：
1. 第一个 `function is()` 目的是相当于 `===`，基础类型直接比较结果，同时兼容判断 +0 和 -0 ，以及 NaN 和 NaN
2. 第二个 `function shallowEqual()` 分了几步
   1. 判断 `function is()`
   2. 判断是否是 object 或者 null
   3. 比较两个 obj 的 key 的 length
   4. 对比每个他们是否拥有对方的 key ，以及 key 的 value 是否相同，也使用了 `function is()` 


下面是 Facebook 的 `shoullowEqual` 的源代码，[GitHub 链接](https://github.com/facebook/fbjs/tree/c69904a511b900266935168223063dd8772dfc40)
```js
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule shallowEqual
 * @typechecks
 * @flow
 */

/*eslint-disable no-self-compare */

'use strict';

const hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x: mixed, y: mixed): boolean {
  // SameValue algorithm
  if (x === y) { // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA: mixed, objB: mixed): boolean {
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null ||
      typeof objB !== 'object' || objB === null) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (let i = 0; i < keysA.length; i++) {
    if (
      !hasOwnProperty.call(objB, keysA[i]) ||
      !is(objA[keysA[i]], objB[keysA[i]])
    ) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;
```