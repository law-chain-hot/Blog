# 新手引导组件（类似于Intro.js和Driver.js)

## 为什么要写这个包


### 2020.02.18
1. 之前接到个任务，写ClassTranscribe的新手引导，那个时候还不会React.js，于是先学习了React.js，然后用React写了个新的个人主页 [Luo's Portfolio](https://law-chain-hot.github.io/portfolio)，感觉还不错。
2. 虽然找了其他人的库，可是他们的库不能够highlight那些position为fix的组件，而很多Nav和search组件都是fix的元素，这让人很头痛，没办法，请教了下大佬同时自己也上网搜了搜，捣鼓出了个雏形。


### 2020.02.19
修复了另外一个bug，现在是真正的在浏览器页面里面的绝对位置了
```js
    this.getAbsoluteLeft = el.getBoundingClientRect().left + document.documentElement.scrollLeft;
    this.getAbsoluteTop = el.getBoundingClientRect().top + document.documentElement.scrollTop;
    this.getAbsoluteRight = el.getBoundingClientRect().right + document.documentElement.scrollRight;
    this.getAbsoluteBottom = el.getBoundingClientRect().bottom + document.documentElement.scrollBottom;
```

晚上，我发布了我的第一个npm包，说着还挺宏大的。

这是 npm 的地址 [[mk-guide]](https://www.npmjs.com/package/mk-guide)，总算是跨出了造轮子的第一步了。

还有些格式的问题需要修改，同时再多开一些接口，这样用户可以自己配置





---

[ ⬅ 返回我的Blog](https://github.com/law-chain-hot/Blog)  