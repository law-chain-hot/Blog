# XSS和CSRF 攻击，分类，防范

## XSS

### XSS分类（安全界分类）
- 反射型XSS：提交的数据，单次影响，非持久型
- 存储型XSS：提交的数据，存入数据库，别人再次访问这个页面，就会触发
    - 例子：发表`留言`或者`帖子`，将里面的信息改为XSS代码
    - 如何寻找：发表或者注册时，往每个输入input窗口输入html代码，提交成功后，如果某行不是按照字符串输入，就可能存在xss漏洞
    - 总结：`见框就插`

### XSS能做什么
- 窃取网页浏览中的cookie值
- 网页劫持，跳转
- 网站钓鱼，盗取密码等
- 客户端攻击
- 传播跨站蠕虫：这是啥？


### 防范方法
- 标签过滤：<script> <a> <img> 等
- 编码：<> 符号输入时转换编码
- 限制长度：一般XSS成功，需要较长字符串
- 不准输入<>，/，等特殊字符
- HttpOnly 防止劫取 Cookie: 严格来说，HttpOnly 并非阻止 XSS 攻击，而是能阻止 XSS 攻击后的 Cookie 劫持攻击
- 输入，输入，都检查


```
XSS：分为存储、反射、dom型。是一种代码注入，浏览器没有智商，你输入一个<script>标签或者<a>标签只要浏览器访问到了
    可以是贴吧留言甚至是url中的构造，浏览器上他无法辨别这是html标签还是单纯的文字语义，他都是当代码进行执行了。自己构造一段浏览器的恶意代码，那就是为所欲为，危害很大！

CSRF：更多如同楼上大神所说，他是过分信任用户的一种行为，一般执行起来非常严格。
      通俗的举个例子：访问：www.weibo.com/hehe/deletepage=30&userid=10284 好了hehe用户的id=30号的文章就被删除掉了，你没有插入任何恶意代码，你只是调用了网站本身的js代码接口，好了你就完成了一次未经授权的删帖操作
csrf：网站过分信任用户，放任来自所谓通过访问控制机制的代表合法用户的请求执行网站的某个特定功能。

作者：Laily
链接：https://www.zhihu.com/question/34445731/answer/86231165
来源：知乎
```


>XSS更偏向于方法论，CSRF更偏向于一种形式，只要是伪造用户发起的请求，都可成为CSRF攻击。

```
>那么下面我介绍一下最最简单的CSRF攻击（没有用到XSS的哦）：

>一个论坛，经过我的多次抓包分析（着重分析请求返回头，请求返回体）了解到这个论坛的删帖操作是触发 csdnblog.com/bbs/delete_article.php?id=“X" 那么，我只需要在论坛中发一帖，包含一链接：www.csdnblog.com/bbs/delete_article.php?id=“X" ，
>只要有用户点击了这个链接，那么ID为X的这一篇文章就被删掉了，而且是用户完全不知情的情况（敲黑板状：此处我可没有写XSS脚本哦，我纯粹是发一个url地址出来而已，既然删除操作可以伪造，那么只要我细细分析，其他操作（发帖，改名字，发私信，只要是这个论坛具有的功能）我都可以伪造咯！

>来自 https://segmentfault.com/a/1190000007059639
```

### 优秀的参考链接
https://owasp.org/www-community/xss-filter-evasion-cheatsheet#  
https://www.bilibili.com/video/av90570085?from=search&seid=227626074659211776  
https://zhuanlan.zhihu.com/p/26177815  
https://www.zhihu.com/question/34445731  



## CSRF

### 防范方法
- 验证码
- Referer Check
- token 验证

### 优秀的参考链接
https://github.com/dwqs/blog/issues/68 浅说 XSS 和 CSRF #68
https://segmentfault.com/a/1190000013010835  Token 认证的来龙去脉 - 边城客栈 - SegmentFault 思否

---
[ ⬅ 返回我的Blog](https://github.com/law-chain-hot/Blog)  
