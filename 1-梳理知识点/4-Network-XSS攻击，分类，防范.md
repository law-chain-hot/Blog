# XSS攻击，分类，防范

## XSS分类（安全界分类）
- 反射型XSS：提交的数据，单次影响，非持久型
- 存储型XSS：提交的数据，存入数据库，别人再次访问这个页面，就会触发
    - 例子：发表`留言`或者`帖子`，将里面的信息改为XSS代码
    - 如何寻找：发表或者注册时，往每个输入input窗口输入html代码，提交成功后，如果某行不是按照字符串输入，就可能存在xss漏洞
    - 总结：`见框就插`

## XSS能做什么
- 窃取网页浏览中的cookie值
- 网页劫持，跳转
- 网站钓鱼，盗取密码等
- 客户端攻击
- 传播跨站蠕虫：这是啥？


## 防范方法
- 标签过滤：<script> <a> <img> 等
- 编码：<> 符号输入时转换编码
- 限制长度：一般XSS成功，需要较长字符串
- 不准输入<>，/，等特殊字符


## 优秀的参考链接
https://owasp.org/www-community/xss-filter-evasion-cheatsheet#
https://www.bilibili.com/video/av90570085?from=search&seid=227626074659211776
https://zhuanlan.zhihu.com/p/26177815