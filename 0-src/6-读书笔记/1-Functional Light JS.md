# Functional Light JS (轻量函数式编程) --- Kyle Simpson
> 不是技术笔记即使都是在讲技术，但是我会摘抄和自己翻译（胡编）一些经典句子下来， 因为我更想把自己带入这些技术大牛的思维里去，去理解和学习它，让我们开始吧  

> 原文的GitHub地址：github.com/getify/Functional-Light-JS
## 我的，某些想说的话
### 第一章暂时未读完时的看法
整个代码的运行过程建立在我们相信某些底层逻辑之上，比如我用 `高级语言` 写好了 for 循环，那么我相信我的代码会被 `可靠的编译器` 翻译成 `可靠的汇编语言` ，接着再被`可靠的汇编器编译器` 翻译为 `01机器码`，最终被转换为`电信号`，同时我们相信这个过程中`硅基材料`的物理性质能够被正常发挥

`高级语言` -> `汇编语言` -> `机器码` -> `电信号` + `硅基材料` ， 这整个链条是稳定的，可相信的  
（甚至高级语言的左边还可以加，加上给普通用户使用的 `APP`，那就是`高级语言` -> `汇编语言` -> ...）

而他们的进化，是从`硅`反推回`高级语言`，进化为人（程序员）能够理解的广义上的编程语言

那么在我看来，函数式编程也是一次进化，因为我们信任的东西从一条一条的`命令`变成了一个一个`函数`，也就是所谓的 `指令式编程` -> `声明式编程`


## 笔记部分
1.  Code that you cannot trust is code that you do not understand. The reverse is true also: code that you don't understand is code you can't trust  
```js
你不能明白的代码，不可信！
//(原文好绕，一句话就是这个)
//(其实就在说: Functional programming is f**king pretty great. That is EASY to understand. Use it bro!)
```


2. It's widely estimated that developers spend 70% of code maintenance time on reading to understand it. That is eye-opening. 70%. No wonder the global average for a programmer's lines of code written per day is about 10. We spend up to 7 hours of our day just reading the code to figure out where those 10 lines should go!  
```js
天啊，真的是开眼了，程序员70%的时间都花在了阅读和理解别人代码（或者自己的），怪不得程序员平均每天写的代码量只有10行
```