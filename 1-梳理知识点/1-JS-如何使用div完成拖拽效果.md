# 如何使用div完成拖拽效果
关键是3个mouse事件
1. mousedown： 激活dragging
2. mouseup： 关闭dragging
3. mousemove： 计算位置

Codepen.io[效果地址](https://codepen.io/law-chain-hot/pen/NWqNXPP?editors=1010)

### 注意
有小细节需要特别注意
- `addEventListener`最好加载`document`上面，不然鼠标移动太快会掉帧，即无法捕捉moveEle这个事件，但是用`document`的话，mousedown这个事件一直存在
- 我在这页代码用的`moveEle.addEventListener`，codepen上面用的documnet
- 其他的需要记得的API
  - `getBoundingClientRect()`
  - `e.clientX`
  - `moveEle.style.left = moveX + 'px'`


## 代码

### HTML
```html
  <div class="move-container">
    <div class="move" style="position:absolute; width:100px; height:100px; background:gold">
    </div>
  </div>
```

### JS
```js
    let moveEle = document.querySelector("#move");
    let dragging = false;
    let relaDistanceX = 0;
    let relaDistanceY = 0;

    // 1. MouseDown
    moveEle.addEventListener("mousedown", e => {
        if (e.target == moveEle) {
            //active dragging
            dragging = true;
            var moveEleDis = moveEle.getBoundingClientRect();
            relaDistanceX = e.clientX - moveEleDis.left;
            relaDistanceY = e.clientY - moveEleDis.top;
        }
    });

    // 2. MouseUp
    moveEle.addEventListener("mouseup", e => {
        dragging = false;
    });

    // 3. MouseMove
    moveEle.addEventListener("mousemove", e => {
        if (dragging) {
            //deploy the distance
            moveEle.style.left = e.clientX - relaDistanceX + 'px';
            moveEle.style.top = e.clientY - relaDistanceY + 'px';
        }
    });
```



[ ⬅ 返回我的Blog](https://github.com/law-chain-hot/Blog)  
