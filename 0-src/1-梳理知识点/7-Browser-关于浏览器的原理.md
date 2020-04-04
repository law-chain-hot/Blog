# 关于浏览器的原理

## 1. 先说 进程（process）和 线程（thread）
- 进程是 CPU 资源分配的最小单位
- 线程是 CPU 调度资源的最小单位
- 一个进程可包含 1 个 或 多个 线程


## 2. 浏览器的进程
浏览器以 chrome 为例，是多进程的浏览器，可以分为四个进程
1. 浏览器主进程 (Browser Process)：浏览器的主进程（负责协调、主控）
2. 第三方插件进程（Plugin Process）
3. GPU进程 (GPU Process)：最多一个
4. 浏览器渲染进程（Render Process），默认开启 1个 Tab ---> 1个 进程
    - 前端接触的大多数东西，都在 **渲染进程** 里（页面的渲染，JS的执行，事件的循环...）
5. 网络进程（Network Process）

**浏览器主进程、网络进程、GPU 进程**都是所有 Tab 共用的。

**多进程的优势**：任何进程崩掉，不影响整个浏览器使用； 缺点是消耗资源更大

## 3. 谈渲染进程（Render进程）
此进程中，主要的渲染的线程有5个，分别是
1. GUI渲染 线程
2. JS引擎 线程 (V8)
3. 事件触发 线程
4. 定时触发器 线程
5. 异步HTTP请求 线程


Browser, GPU, Render 三大进程之间的关系
<div >
<img src='https://user-images.githubusercontent.com/57960778/78411373-1a6c2400-75d5-11ea-890f-1ae7f9706656.png' width='50%' />
</div>


## 4. 注意的点
 - GUI 渲染线程与 JS 引擎线程是互斥的
 - 通过 WebWorker，可以让 JS 引擎向浏览器申请开一个子线程（不能操作 DOM，原因显而易见）
 - 再说 WebWorker 和 ShareWorker 的区别
   - WebWorker 只属于某个 Render 进程，不共享 （可以理解为 Render 进程 ---> 创建一个新的线程来运行 js 代码）
   - SharedWorker 浏览器所有页面，共享 （由单独的进程管理）
 

- **GPU中，各个复合图层是单独绘制的，所以互不影响**





规定要求setTimeout中低于4ms的时间间隔算为4ms

<div >
    <img src='https://user-images.githubusercontent.com/57960778/78416659-efdb9480-75ef-11ea-95d5-380447655325.png' width='38%' />
</div>



> 此文大部分内容引用自 https://juejin.im/post/5a6547d0f265da3e283a1df7#heading-26