## 关于 Node 的事件循环 版本v10 之前与 版本v11 之后

理解浏览器的事件循环不难，但是 Node 的事件循环涉及到版本问题，会稍微复杂一点

此外 `setImmediate()` 是在 `check` 阶段执行

**v10 及其以前，事件循环为清空**
1. 清空`当前阶段任务`（比如 timer 就是 setTimeout等）
2. 清空`process.nextTick()`
3. 清空`当前阶段产生的所有微任务`
<br>


**v11 及其以前，事件循环改为与`浏览器`一样**
1. 完成一个 `当前阶段 宏任务`
2. 清空`process.nextTick()`
3. 清空`当前阶段产生的所有微任务` 
4. 继续完成下一个 `当前阶段 宏任务`

![image](https://user-images.githubusercontent.com/57960778/78074745-daa10480-7368-11ea-98c3-312c25a8c7d5.png)


## 分别在 Node v8 v11 v12 版本测试如下代码：
```js
setTimeout(() => {
    let p = new Promise((resolve) => {
        console.log('p1');
        resolve('promise1')
    }).then((data) => console.log(data))


    process.nextTick(function () {
        console.log('nextTick1');
    })

}, 0)


setTimeout(() => {
    let p = new Promise((resolve) => {
        console.log('p2');
        resolve('promise2')
    }).then((data) => console.log(data))


    process.nextTick(function () {
        console.log('nextTick2');
    })
}, 0)
```

结果如下图

![image](https://user-images.githubusercontent.com/57960778/78074101-b133a900-7367-11ea-879f-87176c6ecbaa.png)