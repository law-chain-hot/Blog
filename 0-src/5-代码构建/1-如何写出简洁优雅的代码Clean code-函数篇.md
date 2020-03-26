# 如何写出简洁优雅的代码Clean code-函数篇

> 最近在学习函数式编程，学习的同时意识到自己的之前有不好的代码习惯，于是本着早就错早改正的心态学习了如何写出(稍微更)优雅的代码，内容源自YouTube的freeCodeCamp频道，https://www.youtube.com/watch?v=RR_dQ4sBSBM


## 汇总
1. Function arguments(2 or fewer ideally)
2. Function should do one thing
3. Function name should say what they do
4. Remove duplicate code
5. Don't use flag as function parameters
6. Avoid side effect
7. Don't write to global function
8. Favor functional programming over imperative programming
9.  Encapsulate conditionals


## 1. Function arguments(2 or fewer ideally)
函数的参数尽量是2个，或者更少 (那就是1个了或者0个了)

**Bad**  
可以看到参数多达4个
```js
// ###### Bad ######
function creatMenu(title, body, bottonText, cancelLabel){
    // ...
}
```



**Good**  
拆分到一个object里面去，再在通过内部变量进行赋值，当你要多次调用`creatMenu`这个函数时，你会感谢自己当时是下面这个写法
```js
// ###### Good ######
const menuConfig = {
    title: 'Foo',
    body: 'Bar',
    bottonText: 'Baz',
    cancelLabel: true,
}

function creatMenu(menuConfig){
    const {title, body, bottonText, cancelLabel} = menuConfig
    // ...
}
```



## 2. Function should do one thing
一个function里面只做一件事




## 3. Function name should say what they do
```js
// ###### Bad ######
function addToDate(data, month){
    // ...
}
const data = new Date()
addTodate(data, 1) // nobody understand what it is 



// ###### Good ######
function addMonthToDate(month, data){  // 调换了month和data的顺序，因为name是 add month -> data
    // ...
}
const data = new Date()
addMonthToDate(1, data) // which is much more clear

```




## 4. Remove duplicate code
不要写重复的代码





## 5. Don't use flag as function parameters
不要加入带判断的参数进入函数，如果带判断，就分成2个函数  
同时修改函数名，让其含义更加明确
```js
// ###### Bad ######
// 只有一个函数，通过flag判断执行语句
function creatFile(name, flag){
    if (flag){
        fs.create(`./flag/${name}`)
    } else {
        fs.create(name)
    }
}


// ###### Good ######
// 两个函数，根据情况调用
function creatFile(name){
    fs.create(name)
}

function creatFlagFile(name){
    fs.create(`./flag/${name}`)
}
```




## 6. Avoid side effect
避免副作用
```js
let name = "qianhao luo"

function splitToFirstAndLastName() {
    name = name.split('')   // Bad
    return name.split('')   // Good
}

// 返回一个新的值，而不是覆盖原变量
```




## 7. Don't write to global function
尽量不要往原obj加prototype的方法，而是用class extends生成一个新的obj



## 8. Favor functional programming over imperative programming
使用 map 和 reduce 代替 for，更符合函数式编程的思想，优点很多

```js
const programmerOutPut = [
    {
        name: "John James",
        linesOfCode: 500,
    }, {
        name: "Suzie Q",
        linesOfCode: 1500, 
    }, {
        name: "Jimmy Gosling",
        linesOfCode: 2500, 
    }
]

/** 
 * 目标是对linesOfCode求和 
 */

// ====== Bad ======
// for循环
let totalOutPut = 0
for (let i = 0; i < programmerOutPut.length; i++){
    totalOutPut += programmerOutPut[i].linesOfCode
}


// ====== Good ======
// 使用了map和reduce替代，更符合函数式编程的思想
const INITIAL_VALUE = 0
const totalOutPut = programmerOutPut
    .map(programmer => programmer.linesOfCod)
    .reduece((acc, linesOfCode) => acc + linesOfCode, INIITAL_VALUE)
```



## 9. Encapsulate conditionals
把判断条件封装入一个function
```js
// ===== Bad ======
if (flag.state = 'get' && isEmpty(listNode)) {
    //...
}


// ===== Good ======
function shouldShowFlag (flag, listNode) {
    return flag.state = 'get' && isEmpty(listNode)
}

if (shouldShowFlag(flagInstance, listNodeInstance)) {
    //...
}
```