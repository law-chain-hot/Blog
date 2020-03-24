# JavaScript继承分类及其作用-总结
![image](https://user-images.githubusercontent.com/57960778/75299127-de85b800-57f9-11ea-8672-910b9fa6d405.png)

## 先上分类

分类见最下面

## 自己的理解（用的最多的几个）

1. **原型链继承**
   - 使用 `SubType.prototype = new SuperType()` 
   - 缺点：多个instance时，一个修改，会影响其他instance修改
  
2. **构造函数继承**
   - 使用如下
   - 缺点：无法继承prototype
```js
function  SubType(){
    //继承自SuperType
    SuperType.call(this);
}
```
3. **组合继承 （原型 + 构造）**
    - 使用：不用多说 上面2个都用
    - 缺点：几乎完美，但是 `SubType` 的 `prototype` 里面有重复的属性，会被 `SubType` 的 `instance` 的属性覆盖掉
    - 结论：浪费了空间？

4. **组合寄生继承**
    - 缺点：完美，修复了合寄生的缺点，但是过程复杂点
    - 如何使用：
      - **第一步**
        - 得到`prototype`: `Object.creat` 一个新的对象，此对象只继承 `SuperType` 的`prototype`
      - **第二步**
        - 使`SubType`得以使用父代的prototype：将 `SubType` 的 `prototype` 指向新的对象。`此时，SubType的prototype没有重复的属性`
      - **第三步**
        - 使`SubType`得到父代`instance`的属性：`SubType` 内部使用构造函数继承，内部使用`SubType.prototype = new SuperType()`，得到父代实例的属性
      - **第四步**
        - 收获成果，直接new个新的实例吧


-  **一句话总结与组合寄生的区别**：`保证一个纯净(不含父元素实例的属性和方法)的subtype的prototype`

---
## 下面是自己画的图 **组合寄生继承**
- **仅供参考。理解这个东西，多亏了BYVoid大神画的原型链的图，所以，可视化是很重要啊**
  
![image](https://user-images.githubusercontent.com/57960778/75299142-e47b9900-57f9-11ea-83dd-d50a10ccc87d.png)



## 分类
<img src="https://user-images.githubusercontent.com/57960778/75299096-cdd54200-57f9-11ea-8b5c-b6ffcbebe639.png" width="50%" />