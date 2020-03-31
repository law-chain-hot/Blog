# 关于node的事件循环v10之前与v11之后

理解浏览器的事件循环不难，但是 Node 的事件循环涉及到版本问题，会稍微复杂一点

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



分别在 Node v11 和 Node v12 版本测试如下代码：
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