# Http与Https区别+自我总结

## **Http 简单总结**

简单，低耗，危险，无ca，默认端口80，明文，直接运行在HTTP协议运行在TCP之上

但是Https，运行在SSL/TLS之上，SSL/TLS运行在TCP之上


## **Https 简单总结**


对于Https的一句话总结`用非对称加密的密钥（公钥），来保证最后生成的对称加密的密钥(会话密钥 session key)的安全性`


![image](https://user-images.githubusercontent.com/57960778/75637566-df00c300-5bec-11ea-8af0-a5f74e962b48.png)


因为`Client random`，`Server random`，`Premaster secret`  
这三个重要的随机数，前2个都是明文形式，最后一个`Premaster secret`的安全由服务端的公钥保证

双方获得`会话密钥`后，变为正常的http通信，不过内容由`会话密钥`加密

### 过程
1. Client Hello
   - 协议版本，如TLS 1.0 
   - 支持的加密方法
   - 客户端生成的随机数（Client random）`注意，此时为明文`
2. Server Hello （与上面对应）
   - 确认版本号
   - 确认加密方法
   - 服务器生成的随机数(Server random) `注意，此时依旧为明文`
   - `+` 服务器证书 (里面包含`公钥`)
3. Client response
   - 确认证书没问题
   - 生成PreMaster Secret，并使用`公钥`加密 `注意，此时为加密传输`
4. Server
   - 使用`私钥`解密，得到`PreMaster Secret`
   - 根据3个随机数，生成『会话密钥(session secret)』`Client 同理`


### 为什么不全用非对称加密
因为 CPU 计算资源消耗非常大，没学过密码学，具体不清楚，据说`一次完全 TLS 握手，密钥交换时的非对称解密计算量占整个握手过程的 90% 以上`


### 参考链接:  
https://honglu.me/2016/01/13/HTTPS%E8%AF%A6%E8%A7%A3/

---
[ ⬅ 返回我的Blog](https://github.com/law-chain-hot/Blog)  
