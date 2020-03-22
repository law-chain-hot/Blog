# 如何手动实现React中的render和hooks

>看了YouTube上一个演讲` Deconstructing React || Tejas Kumar  -- by Coding Tech`  
>大概在30分钟左右实现了一个简单的React (Poor mans's React)，记录和学习如下

主要通过 TSX (Typescript + JSX) 实现了React的render()和useState()，重点概念如下

---
## 对于Render()  
- Virtual DOM 是一个Object，通过recursively使用render，用js原生构建成真正的DOM tree
- createElement接受的参数为 `createElement: (tag, props, ...children) => { } `


## 对于useState()  
- 拥有一个全局变量state @arr- arr中的每个元素依次为 useState() 的调用顺序，这也是为什么hooks使用时一定不能用在判断或者循环中。（因为要保证hooks之间调用顺序一致）
- 另外，每一个module在js中都是一个闭包closure