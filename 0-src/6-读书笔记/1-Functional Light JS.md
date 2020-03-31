# Functional Light JS (轻量函数式编程) --- Kyle Simpson
> 不是技术笔记即使都是在讲技术，但是我会摘抄和自己翻译（胡编）一些经典句子下来， 因为我更想把自己带入这些技术大牛的思维里去，去理解和学习它，让我们开始吧  

> 原文的GitHub地址：github.com/getify/Functional-Light-JS
<h2 align="center">1. 我的思考部分 </h2>

>2020.03.25 - 第一章暂时未读完时的看法 
整个代码的运行过程建立在我们相信某些底层逻辑之上，比如我用 `高级语言` 写好了 for 循环，那么我相信我的代码会被 `可靠的编译器` 翻译成 `可靠的汇编语言` ，接着再被`可靠的汇编器编译器` 翻译为 `01机器码`，最终被转换为`电信号`，同时我们相信这个过程中`硅基材料`的物理性质能够被正常发挥

这整个信任链条是稳定的，可相信的  
```
`高级语言` --> `汇编语言` --> `机器码` --> `电信号` --> `硅基材料` 
```
甚至高级语言的左边还可以加，加上给普通用户使用的 `APP`，那就是  
```
`APP` --> `高级语言` --> `汇编语言` --> `机器码` --> `电信号` --> `硅基材料`
```

而他们的进化，是从`硅`反推回`高级语言`，进化为人（程序员）能够理解的广义上的编程语言

那么在我看来，函数式编程也是一次进化，我js代码不再写for循环，取而代之的是forEach，map等，因为我们信任的东西从一条一条的`命令`变成了一个一个`函数`，也就是所谓的 `指令式编程` -> `声明式编程`
<br>


<h2 align="center">2. 我的笔记部分 </h2>

>1.  Code that you cannot trust is code that you do not understand. The reverse is true also: code that you don't understand is code you can't trust  
```js
你不能明白的代码，不可信！
//(原文好绕，一句话就是这个)
//(其实就在说: Functional programming is f**king pretty great. That is EASY to understand. Use it bro!)
```
<br>


>2. It's widely estimated that developers spend 70% of code maintenance time on reading to understand it. That is eye-opening. 70%. No wonder the global average for a programmer's lines of code written per day is about 10. We spend up to 7 hours of our day just reading the code to figure out where those 10 lines should go!  
```js
天啊，真的是开眼了，程序员70%的时间都花在了阅读和理解别人代码（或者自己的），怪不得程序员平均每天写的代码量只有10行
```
<br>


>3. For example, once you learn what map(..) does, you'll be able to almost instantly spot and understand it when you see it in any program. But every time you see a for loop, you're going to have to read the whole loop to understand it. The syntax of the for loop may be familiar, but the substance of what it's doing is not; that has to be read, every time.
```js
举例说明了经典的例子，for() -> map()，这个用法的转变能带来什么

//our focus is freed up to think about the higher levels of program logic; 
```
<br>


>4. FP (at least, without all the terminology weighing it down) is one of the most effective tools for crafting readable code. That is why it's so important.
```js
不错，很高的评价了
```
<br>


>5.  This count has a special term: arity. Arity is the number of parameters in a function declaration. The arity of foo(x, y, z) is 3.
```js
function foo(x,y,z) {
    // ..
}

foo.length;             // 3
```
<br>


>6. Be careful: never access arguments positionally, like arguments[1]. Stick to `arguments.length` only, and only if you must.
```
叫我们不要再使用 arguments，就算要使用，用用  「arguments.length」  就好了
```
<br>


>7. Destructuring is a way to declare a pattern for the kind of structure (object, array, etc.) that you expect to see, and how decomposition (assignment) of its individual parts should be processed.
```js
//  ====== Declarative Code ======
// 分别把 1, 2, 3赋值给了 x, y, args     by Destructuring
function foo( [x,y,...args] = [] ) {
    // ..
}

foo( [1,2,3] );
```

另外，如果我们使用 命令式编程 (Imperative programming)，结果如下
```js
// ====== Imerative Code ====== 
function foo(params) {
    var x = params[0];
    var y = params[1];
    var args = params.slice( 2 );

    // ..
}
```

Wherever possible, and to whatever degrees our language and our libraries/frameworks will let us, we should be striving for declarative, self-explanatory code.

```
嚯嚯，有力的宣言
```
<br>

>8. Functions that treat other functions as values are higher-order functions by definition
<br>


>9. It may just be the most important foundational practice in all of FP
```
其中 it 指闭包 closure
```
<br>


>10.  If you've ever had to debug a JS program from nothing but a stack trace of an exception, you probably have felt the pain of seeing (anonymous function) appear line after line. This listing doesn't give a developer any clue whatsoever as to the path the exception came from. It's not doing the developer any favors.**
```
不要使用 anonymous function，不利于 debug (stack trace)

Named functions are always more preferable to anonymous functions
```
<br>

>11.   Note: Though I do not prefer to use => in practice in my production code, they are useful in quick code explorations. Moreover, we will use arrow functions in many places throughout the rest of this book -- especially when we present typical FP utilities -- where conciseness is preferred to optimize for the limited physical space in code snippets. Make your own determinations whether this approach will make your own production-ready code more or less readable.
```
使用 arrow function 还是 named function，视需要而定

简介  or  可读性
conciseness   or    readability
```
<br>