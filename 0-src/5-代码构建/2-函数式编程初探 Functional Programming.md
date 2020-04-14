# 函数式编程初探 Functional Programming

这里主要先抛出几个函数式编程的概念

首先，偏函数的概念 Partial Function
>Partial application is a technique for reducing the arity (that is, the expected number of arguments to a function) by creating a new function where some of the arguments are preset.  
>翻译：偏函数，返回一个新的函数的同时预设一些参数在这个新函数上，从而达到减少args的目的

第二个，柯里化的概念 Currying
>Currying is a special form of partial application where the arity is reduced to 1, with a chain of successive chained function calls, each which takes one argument. Once all arguments have been specified by these function calls, the original function is executed with all the collected arguments. You can also undo a currying.  
>理解：柯里化，是一种特殊的偏函数的形式，即 automatically 调用 partial 函数，当传入参数数量满足要求时执行。其中，严格的柯里化（strict currying）每次只能传入 1 个参数

第三个，常用的工具 utility
>Other important utilities like unary(..), identity(..), and constant(..) are part of the base toolbox for FP.  
>理解：一些常用 utility 需要知道他们的作用

第四个，无点 no points
>Point-free is a style of writing code that eliminates unnecessary verbosity of mapping parameters ("points") to arguments, with the goal of making code easier to read/understand.  
>理解：无点，是一种代码风格（style of code），特征是减少不必要的参数直接传递，目的是提高代码可读性 readability
