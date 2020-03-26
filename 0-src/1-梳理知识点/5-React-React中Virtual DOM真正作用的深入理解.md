# React中 Virtual DOM 真正作用的深入理解

哈哈，说是深入理解，其实是相对于之前我对于DOM的理解更加深入了，但是这也很不错了

言归正传，什么是 Virtual DOM，答：`用js中的obj模拟出来的DOM，数据结构为tree`

之前对于它的理解就是用了Diff算法，效率提高，然而并不是这么这么简单

先放上尤雨溪大大的原话  
> 在我看来 Virtual DOM 真正的价值从来都不是性能，而是它的
> 1) 为函数式的 UI 编程方式打开了大门；   `(最近在看 Functional Light JavaScript》这本书，对于函数式的UI编程深有同感)`
> 2) 可以渲染到 DOM 以外的 backend，比如 ReactNative

## 分3部分来说
看了知乎上的问题，题主发现用React操作DOM比原生JS更慢，于是提出疑问。我跟着他的疑问读完了知乎的答案，大概了解他们在说什么了，下面是整理

### 1. **Virtual DOM 的快具体指什么，为什么**  
    -   React操作dom： js -> vdom -> dom
    -   JS操作dom： js -> dom
    -   那么可以看到第一次生成dom，因为React要生成Virtual DOM，所以速度比原生更慢。
    -   但是之后的每次更新，会通过Virtual DOM之后，再用**最小的代价**来更新 DOM，提高效率
    -   **结论**
        -   第一次渲染比raw更慢，之后的更新DOM时比raw更快
        -   这是测试的React，raw，angular 渲染速度的demo地址，非常形象，https://huangxuan.me/React-benchmark/src/

### 2. **具体实现**
   -  优化了diff算法，只要节点的标签或者组件类型不同，认定整个组件改变，放弃调原DOM节点，插入新节点 
      -  ---> 一次遍历即可，时间复杂度降为 ***O(n)***
   -  对于动态生成的节点，加入 key ，通过对于`同一层的 key `是否变化，来判断组件是否被更新 
      -  ---> 注意，尽量不要用index作为key，key要保证在`同一层是唯一且不变的`


### 3. **Virtual DOM 真正的价值**
   -  UI = f (data) ---> 结合尤神的话，那就是给函数式的UI编程提供可能 
   -  使得框架跨平台 ---> Virtual DOM 可以被其他任何端渲染，不同之处在于如何 render，比如浏览器端是调用js的API操作dom，其他端同样用原生的API进行生成