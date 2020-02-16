# NPM, Babel, Webpack
> The old version
- The difference
    - devDependency
    - Dependency
        - The first one is for dev period
- .ignore
    - $ touch ignore
    - 直接输入文件名/
- Babel新版本用@babel/env语法 （babel-env以前是这样）
- Webpack -> to integrate other file together



---
# The New Part
## 0.1 How to use Babel
1. install package, and add the module/rule
2. **`creat a config file`**, .babelrc
3. put the **babel-polyfill** into entry



## 0.2 MVC
![image](https://user-images.githubusercontent.com/57960778/69845223-7a247e00-1235-11ea-92fe-38adc44cc5b6.png)

Model-View-Controller



## 0.3 Three different ways to import
You can choose each way you like
```js
import str from './model/Search';
// import { sum as s, multiply as m, ID } from './view/searchView';
import * as search from './view/searchView';

console.log(`Using imported function, ${search.sum(search.ID, 3)}, and multiply ${search.multiply(3,5)}, ${str}`);
```



## 0.4 Axios
From Vue's author
And this is Search method, which should be put into `Model/Search.js` as a class `Search`
```js
import axios from 'axios';

async function getResult(query) {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    try{
        const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${query}`);
        const recipes = res.data.recipes;
        console.log(res);
        console.log(recipes);
    } catch (error){
        alert(error);
    }
```


## 1. 建立Search
### 建立Search Controller
### 建立class Search
包括里面的function `async getResult()`


### Q&A
为什么是`submit`在`addEventListener`?
-不知道。。。
```js
document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault(); //阻止点了button后，页面reload
    controlSearch();
});
```


### 1. 建立Search View
在`view`文件下建立`base.js`, 储存所有DOM到`elements, 使用下面这个命令把elements引入到所有地方
```js
import { elements } from "./base";
```
```js
// **痛苦的Debug**
arrow function ( ) => { } 只有在没有curly brace{}时，才自动返回only 1 line
```

### 1.1 searchInput( )
Get the `input` from the UI, and convert this `input` into Search controller


### 1.2 renderResults( )
1. 接着render每个recipe, 写成单独的`renderRecipe` 
2. `renderResults` -> forEach -> `renderRecipe`
3. 在`renderRecipe`里面用 `markup` 代表HTML内容接着使用 
`elements.searchResList.insertAdjacentHTML('beforeend', markup);`
```js
// 痛苦的Debug
卧槽,记得 querySelector(.class) 选class的时候,一定要用copy,一字之差都
不不行, //亚麻色头发的少女
```

### 1.3 clearPart( )
最后插入2个clear function, 分别清空`input`和`result`


### 1.4 const limitRecipeTitle = (title, limit = 17) => { }
没意思, 把长于17个字母的菜名后面的变为..., 我会在water flow里面忽略它
另外 private 函数就是`非export`的函数


### 1.5 转到view/base.js
建立 `export const renderLoder`, 实现在await的时候加载loader动画, 找到`class = parent`, 然后使用把loader的代码插入HTML中
```js
parent.insertAdjacentHTML('afterbegin', loader); 
```
最后clearLoader, 记得用 **loader.parentNode.removeChild(loader)**, 不然会留下一个空间


### 1.5 renderButton( )
更新 renderResults( ), 让其显示部分结果在一页, by recipes.slice.(srt, end).forEach( )
其中 creatButton( )中有个新元素很重要, **data-togo=${newPage}** 用于 even delegation 时捕捉页码
```js
//creatButton( )
    let markup = `<button class="btn-inline results__btn--${type}" data-togo=${newPage} > `;
    // data-togo!
```
接着在 btn 上加上 event, 使用 event delegation去操作, 最后再clear result, 同时 clear 老的button
```js
elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10); // ????????!!!!!!   dataset, 10
        searchView.clearRes();
        searchView.renderResults(state.search.result, goToPage);
    }
});
```

console.log(btn.dataset);
```js
// DOMStringMap {goto: "3"}
// goto: "3"
// __proto__: DOMStringMap
```

```js
// 痛苦的Debug
上面的data-goto, 我写成了data-togo
```


## 2. 建立 Recipe
### 2.1 Recipe class in `model/Recipe.js`
```js
import axios from 'axios';

export default class Recipe {
    constructor (id){
        this.id = id;
    }

    async getRecipe() {
        try {
            const res = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);
            // get all needed data into `this`
            this.title = res.data.recipe.title;
            this.author = res.data.recipe.publisher;
            this.img = res.data.recipe.image_url;
            this.url = res.data.recipe.source_url;
            this.ingredients = res.data.recipe.ingredients;
        } catch (error) {
            alert('Something wrong with getRecipe()!  :(');
        }
    }
}
```

一个标准的从 API 获得 Recipe 信息的方法 `axios`  
然后把所有数据从拿到 res 拿到 --> 交给 --> Recipe 这个 class

```js
// 痛苦的Debug
调用 `class Recipe` 到时候, 一定要用
const test = new Recipe(6523) 
```


### 2.2 Recipe Controller in `index.js`
还是挺复杂的, 只呈现最后结果

### 2.3 parseIngredients( ) in `model/Recipe.js`
挺复杂的, 但是不是很想写了, 就是 `ingredients string` 转化为 `objcect`

### 2.4 renderRecip( ) in `view/recipeView.js`
使用 `markup` 然后把其插入到 HTML 里面, 接着使用 `insertAdjacentHTML(location, markup)`  
小插曲: render 原料的时候, 在 `markup` 里面再写一个 loop 把原料挨个render
```js
    <div class="recipe__ingredients">
        <ul class="recipe__ingredient-list">
            //请看这行!
            ${recipe.ingredients.map(el => createIngredient(el)).join(' ')}

        </ul>
    </div>
```

### 2.5 fractional `view/recipeView.js`
小数decimal --> 分数fraction

### 2.6 highlightSelected( ) `view/searchView.js`
把当前选中的recipe高亮

### 2.7 updateServings( ) `model/Recipe.js`
然后在 `index.js` 里面加入 addEventListener, 使用target.matches( ), 去定位button, 最后在 `view/searchView.js` 里面更新 render
```js
// 痛苦的Debug
obj里面的元素, 比如 obj.xx 如果没有xx
将返回undefine, 这样真的很难debug啊
```



## 3. 建立 List
### 3.1 创建 `List` class in `mode/List.js`
里面包含了4个method( )  
其中 item 被存在一个数组里面
```js
constructor() {
    this.items = [];
}
```

### 3.2 创建 `listView` in `view/listView.js`
老一套 renderItem( )

```js
export const renderItem = item => {
    const markup = `在index.html里面找具体的代码`;
    elements.shopping.insertAdjacentHTML('beforeend', markup);
};
export const deleteItem = id => {
    const item = document.querySelector(`[data-itemid="${id}"]`);
    if (item) item.parentElement.removeChild(item);
};
```

### 3.3 在 `index.js` 里面创立 `listController`
```js
new List( );
item = 
renderItem(item);
```

```js
// Handle delete and update list item events
elements.shopping.addEventListener('click', el => {
    // Get the id of item
    const id = el.target.closest('.shopping__item').dataset.itemid;  //确保每次点击能得到 ID

    // Handle the Delete button
    if (el.target.matches('.shopping__delete, .shopping__delete *')){
        // Delete from state
        state.list.deleteItem(id);

        // Delete from UI
        listView.deleteItem(id);
    } 
    // Handle the update
    else if (el.target.matches('.shopping__count-value')){
        const val = parseFloat(el.target.value, 10);
        state.list.updateCount(id, val);
    }
});



这段代码, 很有意思
1. 选择到ID, 然后这个ID通过uniqID加的, 加到了class里面, 像这样
   <li class="shopping__item" data-itemid=${item.id}>
   
2. 用 match 可以精确定位到 delete btn
    - 执行 state 里面的删除
    - 执行 UI 里面的删除

3. el.target.value 可以直接得到输入的 string
    <input type="number" value="${item.count}" step="${item.count}" 
    class="shopping__count-value">
```


## 4. Like.js + likeView.js
就那样


## 5. localStorage
```js
// 痛苦的debug
在 class 里面的 function 调其他内部 function, 需要用到 this.
```

```js
    // Presist
    persistDate() {
        localStorage.setItem('likes', JSON.stringify(this.likes));
    }

    readStorage() {
        const storage = JSON.parse(localStorage.getItem('likes')); // if not, return null
        
        // Restore likes from localStorage
        if (storge) this.likes = storage;
    }
```



---
---
# [Water Flow]
### 1. Search.js + searchView.js
>**[模块M]** 首先建立 **`model/Search.js`** 里面的class `Search` 

>**[模块C]** 建立 **`Search Controller`**，async 函数，5个步骤

1. get query from view `实现得到Input, 在view里面实现`
2. new search obj and add to state `不是很懂为什么要new一个state`
3. prepare UI for results `实现loader, clear等, 在view里面实现`
4. search for recipes `实现返回菜单`
5. render the result on UI `实现recipe部署, 在view里面实现`

>**[模块V]** 建立 **`searchView.js`** 

1. searchInput( ) `实现Input输入`
2. renderResults( ) -> forEach -> 通过renderRecipe( ) `实现recipe的部署`
3. clearPart( ) `清空面板为下一次search`
4. limitRecipeTitle ( ) `实现长字符多余的部分变为...`
5. renderLoder( ) `实现loader动画效果(包括出现和clear)`
6. renderButton( ) `实现分页效果pagination, 接着再把其insert到html`
7. creatButton( ) `实现return markup`

>**[模块C]** 建立 **`Event Delegation`** for `page button`

- 翻页时鼠标点击的 Event, 匹配到 target 然后用 closest 找到整个 btn, 从 btn 里面得到page-goto的信息


### 2.Recipe.js + recipeView.js
>**[模块M]** 首先建立 **`model/Recipe.js`** 里面的class `Recip` 

>**[模块C]** 建立 **`Recipe Controller`**，async 函数，5个步骤, 我猜的

- 事实证明不是5个步骤,还有许多

>**[模块M]** 建立 **`parseIngredients`**, 就是把string形式的ingredient转换为一个obj包括  3个 元素  { count, unit, ingredients  }

>**[模块V]** 建立 **`recipeView.js`**, render our recipes 

- highlightSelected( )
- updateServing( )


### 3. List.js + listView.js
就那样


### 4. Like.js + likeView.js
就那样

### 5. localStorage
使 likes 在 reload 之后依旧存在







---
---
# [Knowledge Point]
1. `string.replace()`  把 id 里面的 # 全部换为 '空白' 
```js
// 1. get the id from 'hashchange', from URL
const id = window.location.hash.replace('#', '');
```

2. `addEventListener(event, function)` 学习到2个新事件
```js
['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));
// 1. hashchange 表示URL的hash值改变时, 捕捉到window的location里面
// 2. load 表示reload页面的时候fire

/**
 * 顺便总结下其他事件
 * - click
 * - submit
 * - keypress 表示可以用于按回车Enter时fire
 * - change 表示下拉栏改变时变化
 * - load 当然是reload的时候
 * - 
 * /
```

3. `e.target.closest('.class')` 找到 target 最近的 class
```js
elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if (btn) { 
        const goToPage = parseInt(btn.dataset.goto, 10); //dataset, 10
        searchView.clearRes();
        searchView.renderResults(state.search.result, goToPage);
    }
}

/**
* 顺便总结其他 targe 方法

closest()     
    Element.closest()方法用来获取：匹配特定选择器且离当前元素最近的祖先
    元素（也可以是当前元素本身）。如果匹配不到，则返回 null。
    - 想要激活一整个item的时候用, 比如翻页键
    - 任意点击里面的元素, 都会target到最上层, 并定位到goto 等ID
    - 想得到parent的ID的时候

matches() 
    - 直接找到定位某个元素, 返回true or false

 */
```

4. `str.toLowerCase( )` 把 string 变为小写
5. `Array.findIndex( )` 返回一个 call back function 返回true的index
```js
 const unitIndex = arrIng.findIndex(el2 => units.includes(el2));
```

6. `Array.includes( )` 返回True False, 是否包含  
`同上`

7. `Arrary.join('  ')` arrary 转换为 string, 中间填充' 空格 ' 
```js
    let count;
    if (arrCount.length === 1) {
        count = eval(arrIng[0].replace('-', '+'));
    } else {
        count = eval(arrIng.slice(0, unitIndex).join('+'));
    }
```

8. `eval()` 函数会将传入的字符串当做 JavaScript 代码进行执行。  
`同上`

9. `fraction` 这个包的使用, 把 小数 decimal ---> 分数 fraction
```js
    import { Fraction } from "fractional";

    const [int, dec] = count.toString().split('.').map(el => parseInt(el, 10));
    const fr = new Fraction(count);
    return `${fr.numerator}/${fr.denominator}`;
```

10. `array.splice( )` && `arrary.slice( )`
```js
//可以用作delete item
Array.splice(start, num)   返回被拿出来的值, 并改变原Array, num代表从start开始往后第几个

//可以用作, 不知道
Array.slice(start, end)    返回拿出来的数组, 不改变原Array, [start, end)
```

11. `uniqid` 这个包可以提供 **Unique ID** .


12. `localStorage`, 在 reload 之后依旧保存数据
```js
    // Presist
    persistDate() {
        localStorage.setItem('likes', JSON.stringify(this.likes));
    }

    readStorage() {
        const storage = JSON.parse(localStorage.getItem('likes')); // if not, return null
        
        // Restore likes from localStorage
        if (storge) this.likes = storage;
    }
```


13. 操控一个class的css属性
```js
elements.likesMenu.style.visibility = numLikes > 0 ? 'visible' : 'hidden';
```