# 写更简洁的代码 by 函数式编程
>本文代码引用自 https://dev.to/r0r71z/javascript-write-cleaner-code-with-functional-programming-279a  
>不得不说，Dev.to 是个我暂时发现的美术风格我很喜欢的前端社区

本文是 3 步走

## 1. 原版
```js
var fetch = require('node-fetch'); // if using NodeJS

function articles () {
  var arr = [];
  return fetch('https://dev.to/api/articles').then(function(a) {
    if (a) {
      return a.json().then(function(b) {
        if (b) {
          b.forEach((c) => {
            if (c.tag_list.indexOf('javascript') !== -1 && c.tag_list.indexOf('node') !== -1) {
              arr.push(c);
            }
          });
          return arr;
        }
      });
    }
  });
}

articles().then(function(d) {
  console.log(d);
});
```
这是修改之前的代码，我承认我并没能在第一次读懂这个代码在干嘛 -。-


## 2. 改版
```js
const arr = [];

function pushFilteredArticlesToAuxArray (c) {
  if (
    c.tag_list.indexOf('javascript') !== -1
    && c.tag_list.indexOf('node') !== -1
  ) {
    arr.push(c);
  }
}

function filterAndReturnValues (b) {
  if (b) {
    b.forEach(pushFilteredArticlesToAuxArray);
    return arr;
  }
}

function fetchJSDevArticles () {
  return fetch('https://dev.to/api/articles').then(function(a) {
    if (a) {
      return a.json().then(filterAndReturnValues);
    }
  });
}

fetchJSDevArticles().then(function(d) {
  console.log(d);
});
```
我承认，优雅了很多，有了规范的函数命名，并且拆解的每个步骤，就是所谓的 make code more composable, more readable

但是下面这个版本才是最终形态


## 3. 最终版
```js
const fetch = require('node-fetch');

const tagsToFilter = ['javascript', 'node'];
const devArticlesApiURL = 'https://dev.to/api/articles';

const isIncludedIn = (arr) => tag => arr.includes(tag);
const byTags = (tags) => (article) => tags.every(isIncludedIn(article.tag_list));
const filterAndReturnValues = (articles) => articles.filter(byTags(tagsToFilter));

const fetchJSDevArticles = () =>
  fetch(devArticlesApiURL)
    .then(response => response.json())
    .then(filterAndReturnValues)
    .catch(console.log);

fetchJSDevArticles().then(console.log);
```
天，这真的是很优雅了

怎么样来理解呢，举个例子，我们看 `byTags()` 这个函数，变化为 `ES5` 就是
```js
const byTags = function (tags) {
    return function (article) {
        return tags.every(isIncludedIn(article.tag_list);
    }
}
```
目的是：传入一个 tags 变量，被新返回的函数 `function(article)` 使用。而这个新返回的函数的 parameter，是从 `filter` 函数的参数的第一个参数（对不起，就是这样的绕） `articles.filter(byTags(tagsToFilter));` ，所以就是 articles 中的每个 article

以上