# 零、 这篇文章是什么
这是我阶段性总结，写这篇文章有 2 个目的：
1. **自我回顾**，是我对自己过去转码学习的总结
2. **回馈社区**，因为学习的时候获得了社区提供的很多帮助

如果我的经历和你有相似，同时也帮助到你，那真是太好了。

> - 注意：因为有自我回顾的部分，所以如果下文可能会某些流水账一样的东西，可以跳过，那是因为我单纯想回顾下当时的情景和心态



  
# 一、我的背景介绍
我本科的专业是能源与动力工程，研究生专业是农业与生物工程，现在马上要结束研究生的第三个学期。本科跟着老师参加过我们专业的相关的竞赛，也做过科研，是用 Matlab 做模拟，如果算上本科学的 C 语言，那么他们俩是我本科唯二的与写码有关的东西。

既然我与 CS 联系也不多，那为什么转行 CS ？  

因为我做的方向虽然是工科，但实际工程价值并不是很高。而且我自己对写码一直有一种迷之憧憬，加上当时申请到了研究生这个学校，他的 CS 课不错，我选课也没有专业限制，所以决定转行 CS。

于是研究生第一学期上了一门 CS 课程，数据挖掘。第二学期上了两门，人工智能和数据结构。我也就是在第二学期开始接触的前端。

诶，等等，你不是说你零基础吗，你看你不是学过数据结构嘛？嗯，严格来说，似乎确实是标题党了。

总之，这就是我的背景啦，然后我 19 年下半年开始学习前端，虽然期间还在上课，但是接触了前端后，几乎是半脱产的状态在学习。接下来我会详细叙述我的学习经历，面试经历，和我的一些学习的想法。

OK，先说下我的淘系面试经历吧


# 二、我的淘系面试经历
> 这个章节，我更多的偏记录，所以会有些流水账，我把它折叠了，不想看的小伙伴可以跳过
> 
> 面试淘系之前，有看过很多的面经，但是除了一面的时候被问了很多基础知识，后面就被问得很少了，所以这个面经不具备通用性。



面试的过程是 4 轮技术面 + 1 轮 HR 面，因为当时没有记录，我只能挑还记得的问题说

### 一面
一面和常规一样，考察基础知识，经典的题目有浏览器缓存，闭包一句话解释下，网页优化的技巧等等

### 二面
然后，二面我记得最清楚，完全出乎我意料，被降维打击了。面试官是一位 P8 大佬（难道大佬都不按照套路出牌？）

```
点击下方按钮，展开内容👇
```

<details>
    <summary> <b>点我点我点我</b> 🚀 </summary>

- 给大家还原下当时的场景，如何从一个点，穿透到你的**知识边界**
  - 面试官说，`看你学过数据结构，讲讲你觉得哪个数据结构最有意思吧`
    - 第一个问题我直接懵了，不是该常规的 JS CSS 和 计算机网络 来一套吗。但是也就是懵了 0.5 秒，脑子里开始疯狂思索有哪些数据结构可以拿出来说。我首先想到了`map`，第二个想到 `tree`，本来想说说树，但是电光火石直接我想到我可能会给自己挖坑，因为计算机领域太多地方用到树了，比如 DOM tree，抽象语法树AST，B/B+ 树，k-d树，红黑树。。。想到这里，我突然发现我，对于有些树不是很熟悉，如果问的问题往编译原理和数据库方向走了，那不就GG了，所以为了避免给自己挖坑
  - 我就说，`我觉得图最优意思`
  - 面试官说，`为什么觉得图有意思呢`
  - 我说，`因为它是最复杂的数据结构` （后来想想，这才是给自己挖坑嘛）
  - 面试官说，`那你能具体说说吗`
  - 我说，`我上过一门课人工智能，里面学了一个寻路算法，其中有个算法叫做 A星算法（A*），Blablabla`，幸好上个学期刚上过，还没有忘完
  - 然后面试官说，`那你觉得淘宝有哪些地方可以用到图这个数据结构`（这个时候我已经有点绷不住了）
  - 我想了一会说，`推荐系统吧，因为用户与商品间有联系，商品与商品间也有联系`（我瞎说的，我根本不知道）
  - `那你说说推荐算法`（好了，绷不住了）
  - `我不知道，没有学过，我上的人工智能的课主要还是做了些关于像之前的寻路算法，自然语言处理，人工神经网络的作业`
  - `那你讲讲人工神经网络是如何工作的吧`
  - 然后我blabla。因为作业是调用 PyTorch 这个库做的，所以不会涉及到里面复杂的算法，我就只说了最基础的理解。
  - `嗯好，对了，你刚才说到了自然语言处理，你知道中文不像英文，语义化的分析很复杂，你说说看看你的理解`
  - 然后我隐约记得之前看过篇推文（后来查下是知乎），说谷歌翻译中文准确度猛地提高了，里面就应用了神经网络/深度学习。（到这里我就真的说不下去了，因为我上的课是非常入门的课，并没深入研究）
- 上面这只是其中一部分对话，类似的还问了
  - 浏览器和Node的事件循环有差别，为什么要这么设计；
  - 如果你来设计，如何设计 js 的事件循环；
  - 关于你对 Flutter 发展的看法；
  - 不同框架性能比较过吗；
  - React Native是如何实现的；
- 我当时就觉得为什么我这么菜啊，几乎一个问题都回答不出来，这些一连串的问题，直接把我问懵了，感受到了降维打击。当然啦，我还是努力地回答了所有的问题。
</details>

### 三面，四面，HR面
接下来几面问的基础知识不是很多，有深刻印象的就下面 2 个，至于为什么印象深，嘿嘿，我是不会说出来的
  * ES6 中的 let 有块级作用域，那 ES5 是如何实现块级作用域的呢
  * 如何 chrome 如何检测内存泄漏，怎么定位到哪一行
  * 最后 HR 面就是单纯聊天，不要皮，问你想不想来杭州，不要瞎说，说非常想来，上有天堂下有苏杭

### 总结一下
- 当时觉得二面压迫感挺强的。面对一个在前端领域深耕了10年的高级专家，之前的面经一点用也没有，我甚至有怀疑自己白学了前端，
    * 但回头看看，哪个学校里的教授不是在专业领域耕耘了一二十年的，为什么压迫感没有那么强呢
    * 想了想有 2 个原因
      * 一个是并没有被教授以求职的方式面试过，如果他拿出真正想考你，你也直接被问懵B
      * 二来还是心理因素，不应该觉得前端很神秘，也不能觉得前端很容易，保持敬畏谦虚，也不害怕就好

# 三、我是如何学习前端的
> 这节我按时间线，回顾记录了下我的学习路线，供小伙伴参考

## 前端学习时间线梳理
我最早开始学习是从买了 Udemy 的一个网课开始的 [The Complete JavaScript Course 2020: Build Real Projects!](https://www.udemy.com/course/the-complete-javascript-course/) （当时还不是2020，还是2019，我之前以为是2019年出的呢，哪知道它每年都改个名字！），跟着这个网课学习了JS基础，最后做了一个 [搜索菜谱](https://law-chain-hot.github.io/recipe-project/) 的页面。我对于前端的兴趣也是在这个过程中被点燃了。过程中我也边写边做笔记，现在看来有点形式大于收益了，写得像 [流水账](https://github.com/law-chain-hot/md-all-notes/issues/4) 一样，当然当时我也乐在其中。

但是紧接着，我就犯了一个错误，我在 Coursera 上买了一个前端课程。

也许你会说，什么？Coursera 不是都是大学教授上课吗，他们也教前端？对，真的有，但是我错就错在这里。

之前也上过 Coursera 上的数据结构课程，我对它的印象很不错，但是前端是非常贴近业界的行业，而大学教授讲的课程，显然比不上一线从业人员的课程，除非老师深入到了某些细分的可以深入研究的领域，比如人机交互。但是，这个老师讲的是基础Web开发，于是跟他学习了 Bootstrap，再接着上 React，而 React 的课程上到一半，我是真的听不懂了，不知道他在讲什么，我就停止了。于是因为这个，我大概歇了10多天没有学习前端。

而后我发现，YouTube 上很多免费的视频质量其实非常高，比如这些频道 [Coding Tech](https://www.youtube.com/channel/UCtxCXg-UvSnTKPOzLH4wJaQ) 和 [freeCodeCamp.org](https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ)，应该也有中文翻译，大家可以酌情学习。

再说回来，自从不上那个老师的课之后，我就轻松多了，开始换了个方式学习 React。先是把 [React官方文档](https://zh-hans.reactjs.org/tutorial/tutorial.html) 里面的 小游戏 跟着教程走了一遍，然后自己用 React 写了个人主页部署到了GitHub。创造点东西对于我来说，是非常重要的保持学习热情的手段。

再往后，就没跟着某个教程学习了，这段时间就是哪里不会学哪里，遇到问题，搜索，解决问题，记下来，再遇到问题，开启循环。大概是这么一个学习路线。

同时，也去阅读了一些博客，专栏文章，别人的学习经验，建立了自己的知识体系。后来，各个企业春招开始了，我开始通过面经，完善了自己的知识体系（确实很有效，这跟高中做模考复习，而不是通读课本复习是一个道理）

因为不喜欢用电脑读书，所以整个过程中，有任何问题，我都是直接用搜索引擎学习。

## 总结下我学习的路线
```
网课入门 --> 写了第一个项目 --> 点燃热情 --> 
继续上课 --> 阅读博客、专栏 --> 建立体系 --> 
面向面经编程 --> 完善知识体系
```

我现在自己的不足之处还是很多，比如和科班的同学相比，我没有学过编译原理，计算机结构，操作系统。这些东西我都放在了我日后的学习计划里。


# 四、自己的经验（干货阶段）
>我结合我自身的情况，推荐一些影响我的文章和人
>也可以理解为，如果让我现在给入门时的自己一些建议，我会给我自己这些建议，大家可以参考

## 1. Coursera 前端课程千万不要看 
哈哈，抖个机灵，（逃

## 2. 一定要阅读高质量的文章
阅读最优质的的文章，才能学到优质的内容，知识本身无高低，但是经过整理消化后的让你容易吸收，这就是好的文章带来的附加值。

**掘金上面就有很多优质的文章**

1. [从输入URL到页面加载的过程？如何由一道题完善自己的前端知识体系！](https://juejin.im/post/5aa5cb846fb9a028e25d2fb1)，作者是钉钉的前端大佬，写得非常详细，涵盖了大部分知识点，梳理整个体系，我首推这篇文章。如笔者所说，特别对于新手，不建议一次就看完，而是经常去回顾，总有新收获（一年逛两次海澜之家，每次都有新收获？）

2. [(1.6w字)浏览器灵魂之问，请问你能接得住几个？](https://juejin.im/post/5df5bcea6fb9a016091def69)，作者是神三元大佬，经常混迹掘金的同学应该不会陌生，写的文章深入浅出，是我辈学习的榜样，经常看标题就会忍不住点进去。这篇文章和上一篇结合着看，效果奇好。

3. [我如何零基础转行成为一个自信的前端](https://juejin.im/post/5c75d34851882564965edb23)，我要重磅推一下这篇文章，作者应该现在是在蚂蚁金服，他非常详细地介绍了他从一个零基础的文科生转行到前端的过程，并且推荐了非常多的行业大牛以及函数式编程的学习方法。虽然我也在跟着学，但我感觉把他推荐的东西学完，至少得脱产学习大半年，而这篇文章真正带给我的是一种思维模式和视野，让我知道了我可以用一种更大的视野去了解前端，这对于一个新人来说，是非常难得的。

这里列的并不全，还有很多类似的文章。这样的文章的好处是，你可以系统性梳理知识点，作者和你几乎处于同一时期，他们筛选过的知识，是你的当下最需要的。

最后是我觉得读文章要适可而止，可以暂时不要深究，像 Chrome 这种庞然大物，光 V8引擎 就够喝一壶了，并且很多机制随时都在变，不能把每个版本的变化都背下来吧，我认为新手一开始有个大概的了解就好。

## 3. 那如何分辨高质量的文章
有两个方法，找一手资料，或者高质量转述资料
1. 找一手资料
2. 找大牛写的文章

读一手资料，英语是最大的问题，我英语其实属于非常不好的。

能有多不好？嗯，我没见过托福比我还低的同学（我也永远不会说分数的）。

但是我也在强迫自己阅读英文材料，只要能达到4，6级的水平，读技术文章问题不会很大。不会的词和句子就用翻译软件。

而我觉得最难的地方在于开始阅读，因为我潜意识知道，我读中文一定比英文快，我眼睛对中文敏感，一次扫视，能瞬间抓住页面的关键词。

正是因为这样，当我正在兴致勃勃写代码时，需要查询资料，我会下意识使用中文，而不是英文，因为我不想打断写码的思路去研究英语。

所以，最好的方式是找一个固定的时间，开始一点点尝试阅读技术文章，当你自信到阅读英文材料效率不会比读中文慢太多时，那就走上正轨了


## 4. 高质量文章的好处
好的文章能让你快速理解消化其内容，举两个例子，
1. `闭包`：以一系列高质量的博文为例
2. `原型链`：以 [BYVoid](https://github.com/BYVoid) 大佬画的示意图为例

### 例子1：闭包的理解
<!-- ```
点击下方按钮，展开内容👇
``` -->
<!-- <details>
    <summary> <b>点我点我点我</b> 🚀 </summary> -->

<!-- --- -->
**闭包的定义**
>Like most modern programming languages, JavaScript uses lexical scoping. This means that functions are executed using the variable scope that was in effect when they were defined, not the variable scope that is in effect when they are invoked. In order to implement lexical scoping, the internal state of a JavaScript function object must in- clude not only the code of the function but also a reference to the current scope chain. (Before reading the rest of this section, you may want to review the material on variable scope and the scope chain in §3.10 and §3.10.3.) This combination of a function object and a scope (a set of variable bindings) in which the function’s variables are resolved is called a closure in the computer science literature. (This is an old term that refers to the fact that the function’s variables have bindings in the scope chain and that therefore the function is “closed over” its variables.)
>
>Technically, all JavaScript functions are closures: they are objects, and they have a scope chain associated with them. Most functions are invoked using the same scope chain that was in effect when the function was defined, and it doesn’t really matter that there is a closure involved. Closures become interesting when they are invoked under a different scope chain than the one that was in effect when they were defined. This happens most commonly when a nested function object is returned from the function within which it was defined. There are a number of powerful programming techniques that involve this kind of nested function closures, and their use has become relatively common in JavaScript programming. Closures may seem confusing when you first en- counter them, but it is important that you understand them well enough to use them comfortably.
>
>*JavaScript, The Definitive Guide*

中文翻译可以看 rccoder 的博客 [JavaScript之闭包相关](https://github.com/rccoder/blog/issues/3)

带着这段定义，转跳到冴羽的博客 [冴羽写博客的地方](https://github.com/mqyqingfeng/Blog)，看完它的深入系列 2-8

最后再看懂下面 5 个例子的区别，那么 `闭包` 这个概念算是掌握了


```js
// ====== 例子1 ======
for (var i = 0; i < 10; i++) {
  setTimeout (function () {
    console.log (i); 
  }, 1000);
}
// 10 10 10 ....


// ====== 例子2 ======
for (var i = 0; i < 10; i++) {
  (function (e) {
    setTimeout (function () {
      console.log (e);
    }, 1000);
  })(i);
}
// 1 2 3 4 5 6 7....


// ====== 例子3 ======
for (var i = 0; i < 10; i++) {
    setTimeout (function (i) {
        console.log (i); 
    }, 1000);
}
// undefined undefined undefined ... 


// ====== 例子4 ======
var x = 'global'
function test1() {
    console.log(x)
}
function test2() {
    x = 'local'
    test1()
}
test2()
// local


// ====== 例子5 ======
var x = 'global'
function test1() {
    console.log(x)
}
function test2() {
    var x = 'local'
    test1()
}
test2()
// global
```


最后，具体应用的话，可以参考 程墨Morgan 大佬的知乎专栏，[React useEffect的陷阱](https://zhuanlan.zhihu.com/p/84697185)，理解了闭包，就理解了这篇文章






### 例子2：原型链的理解
BYVoid 的原博文地址[JavaScript对象与原型](https://www.byvoid.com/zhs/blog/javascript-object-prototype)，他用了非常简单的例子 + 一张图让我很快就明白了什么是原型链，而我之前看到文章，洋洋洒洒几百字，我也没看懂。下图来自原博文

![](https://user-gold-cdn.xitu.io/2020/4/25/171aeb3f1d78374b?w=1224&h=1234&f=png&s=205007)

如果有兴趣，也可以看下阮一峰老师写的关于JavaScript的起源 [Javascript诞生记](https://www.ruanyifeng.com/blog/2011/06/birth_of_javascript.html)，了解下为什么 JS 会有原型链，同时也支持函数为一等公民，阮老师原话 
>Javascript语言实际上是两种语言风格的混合产物----（简化的）函数式编程+（简化的）面向对象编程`  
>
> *Javascript诞生记*


## 5. 推荐的一些博客

我说一些我自己的平时看的博客吧（感觉很多大牛主阵地在知乎了，大家可以去知乎找到他们）
1. [冴羽的博客 - GitHub](https://github.com/mqyqingfeng/Blog)，冴羽大佬的博客，他的深入js系列，我从中受益颇多
2. [阮一峰的网络日志](http://www.ruanyifeng.com/blog/)，阮一峰大大的博客，刚才才提到，这个不用说，知识深度广度都有
3. [当然我在扯淡](https://www.yinwang.org/)，王垠大神的博客，博客名字不是我瞎写的，就叫这个。他写的东西不是应用层的，更偏向于理论层，所以我自己多数适合也看不懂。另外知乎上对他褒贬不一，但暂时还轮不到我，我的话膜就完事了。
4. [酷壳 - coolshell](https://coolshell.cn/)，陈皓，网名左耳朵耗子，是一位有 20 年软件开发相关工作经验的大佬（能 20 年一直持续做技术，这样的人太少了，最新的一篇博文是2020年4月4号的，大家感受一下）
5. [玉伯的博客 - GitHub](https://github.com/lifesinger/blog/issues)，玉伯大神的博客，8年前就下了前端的归宿与价值，有时看一看前辈们从前对于行业的感悟，是一件非常奇妙的事情
6. [张云龙的博客 - GitHub](https://github.com/fouber/blog)，也是一位大佬，不过像玉伯一样，早已不更新
7. ......
   
还有太多太多了，他们只是这个大社区的一部分，无数开源项目促成了整个生态的繁荣，这种开源的分享精神是 计算机 领域吸引我的重要的一个点。





# 五、 我自己的疑问和自己的思考
>最后一个部分，也是一个我自己的总结，以及这段时间我想明白的一些事情

1. 为什么转专业
    上文提到了，喜欢这边的开源氛围。举个不恰当的例子，很多领域大家在知识的分享上建起高墙，一辈子守着祖传代码吃饭，非本门派的弟子武功是不能外传的，普通人很难获取到信息，就像阶级固化严重的社会，没有背景的人机会是很小的；而在计算机领域则不同，任何一个普通人，都可以获取到绝大部分信息，那这才是一个有流动性的社会，我作为普通人，当然支持后者

2. 学习压力很大如何应对
    我第一学期上数据挖掘，上课前连 Python 都不会用，第一个作业问了学长，他写了一个晚上4，5个小时作业，我写了大概 5 天，而且每天都在写。这个差距真的很大。

    戒指里没藏老头，肚子里没有尾兽，没有童年误食恶魔果实，也没有一个名为金的猎人老爹，无任何 buff 的新手就被扔到了大龙面前 solo，而且周围队友不是等级比我高就是有红蓝 buff 在手，这样的研究生开局没有 peer perssure 才怪。不过还好，后来我找准了自己的位置。

    我现在怎么看 peer pressure？

    任何层次都有，我们的压力是学霸，学神；学神的压力的是大牛；行业的大牛的压力来自行业领导者，比如 Java 之父高司令，C++之父 Bjarne Stroustrup，22 岁发布 Linux 内核的源代码的 Linus（强如他们，如果，他们把自己对标历史上的伟人，比如费曼，爱因斯坦，牛顿，那他们得一辈子活在压力之下）。所以简单就好了

3. 为什么要写博文
    我之前虽然也一直在坚持写博客，但是现在回看，很多都是垃圾博文，即无分享价值，也没有提炼关键信息供深度思考，唯一的好处是让记忆更深刻 + 打字速度变快。那么我之后的计划是尽量写高质量的博文，至少要满足下面中的其中一个
    1. 有分享价值
    2. 有回看价值
    3. 最后要注意可读性，重要的不是表达，而是表达的内容，如果让人读不下去，怎么传递内容



![](https://user-gold-cdn.xitu.io/2020/4/25/171aeb5ae9c81e0c?w=2560&h=1080&f=jpeg&s=115863)

# 六、结尾
最后引用韩寒说的一句话结尾吧，虽然原话表达的意思可能不是这个，但是我觉得用来描述开源精神是无比合适的。

**只是他们替我撞过了每一堵我可能要撞的高墙，摔落了每一道我可能要落进的沟壑，然后告诉我，这条路没错，继续前行吧**
>他们先行，我替他们收拾着因为跑太快从口袋里跌落的扑克牌，我始终跑在他们划破的气流里，不过我也不曾觉得风阻会减小一些，**只是他们替我撞过了每一堵我可能要撞的高墙，摔落了每一道我可能要落进的沟壑，然后告诉我，这条路没错，继续前行吧**，但你已经用掉了一次帮助的机会，再见了朋友。
>——韩寒 《1998 我想和这个世界谈谈》




# 后记
* 我本来希望不写废话，有些废话是让我的表达更严谨了，但是这既没有增加有趣程度吸引观众，也没增强我的专业性。可。。。可是，太难了，还是写到了6000多字
* 我觉得半佛老师写的文章就是 简洁 + 硬核 + 有趣（sao），值得我学习。
* 完

