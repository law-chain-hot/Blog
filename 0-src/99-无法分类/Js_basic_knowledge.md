### 1. function 定义函数可以hoisting, 但是使用 arrow function 就没有
```js
//function()
catName("Chloe");
function catName(name) {
    console.log("我的猫名叫 " + name);
}

// ES6 =>
o("Chloe");
const o = (name) => console.log("我的猫名叫 " + name);
```
第一个可以用, 第二个不能用



### 2. Function A declares variable X and function B. Can function B access variable X?
```js
Yes, because of scope chain
```


### 3. In JavaScript, scopes are created by:
```js
Functions
```



### 4. Which of the following statements about the 'this' keyword is NOT correct?
```js
It is a primitive JavaScript data type that all functions get when they are called.
不是编写时绑定，而是运行时绑定。它依赖于函数调用的上下文条件。
他是个对象 object
```


### 5. 如图
![image](https://user-images.githubusercontent.com/57960778/70401422-23693200-19f5-11ea-9894-10f53311df0f.png)


### 6. 如图
![image](https://user-images.githubusercontent.com/57960778/70401622-1f89df80-19f6-11ea-826d-d5110e152842.png)


### 7. 如图
![image](https://user-images.githubusercontent.com/57960778/70401662-4b0cca00-19f6-11ea-8e89-ef508aa57b10.png)


### 8. What does the ‘new’ operator NOT do?
```js
Returning an execution context
```

### 9. Function is object
```
Because its prototyoe is an object
```


### 10. object A = object B
```js
这是浅拷贝, 需要用 
A = new B()
```


### 11. An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
只执行一次