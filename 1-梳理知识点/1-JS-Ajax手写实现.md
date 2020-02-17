# Ajax手写实现
```
0：未初始化 -- 尚未调用.open()方法；
1：启动 -- 已经调用.open()方法，但尚未调用.send()方法；
2：发送 -- 已经调用.send()方法，但尚未接收到响应；
3：接收 -- 已经接收到部分响应数据；
4：完成 -- 已经接收到全部响应数据，而且已经可以在客户端使用了；
```

## 代码
```js
function ajax(url){
    // check IE
    let xmlhttp
    if (window.XMLHttRequest){
        xmlhttp = new XMLHttpRequest;
    } else {
        xmlhttp = new ActiveXObject('Mirosoft.HTTP')
    }

    // check status
    xmlhttp.onreadystatuschange = () => {
        if(xmlhttp.readystatus == 4 && xmlhttp.status == 200){
            // do it
        }
    }

    xmlhttp.open('GET', url, true) // get方法， URL，和 asycn调用为ture
    xmlhttp.send()

}
```