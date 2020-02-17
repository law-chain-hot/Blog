# 如何使用div完成拖拽效果
关键是3个mouse事件
1. mouseup
2. mousedown
3. mousemove

### HTML
```html
  <div class="move-container">
    <div class="move" style="position:absolute; width:100px; height:100px; background:gray">
    </div>
  </div>
```

### js
```js
var moveElem = document.querySelector(".move"); //待拖拽元素

var dragging; //是否激活拖拽状态
var tLeft, tTop; //鼠标按下时相对于选中元素的位移

//监听鼠标按下事件
document.addEventListener("mousedown", function(e) {
  if (e.target == moveElem) {
    dragging = true; //激活拖拽状态
    var moveElemRect = moveElem.getBoundingClientRect();
    tLeft = e.clientX - moveElemRect.left; //鼠标按下时和选中元素的坐标偏移:x坐标
    tTop = e.clientY - moveElemRect.top; //鼠标按下时和选中元素的坐标偏移:y坐标
  }
});

//监听鼠标放开事件
document.addEventListener("mouseup", function(e) {
  dragging = false;
});

//监听鼠标移动事件
document.addEventListener("mousemove", function(e) {
  if (dragging) {
    var moveX = e.clientX - tLeft,
      moveY = e.clientY - tTop;

    moveElem.style.left = moveX + "px";
    moveElem.style.top = moveY + "px";
  }
});
```