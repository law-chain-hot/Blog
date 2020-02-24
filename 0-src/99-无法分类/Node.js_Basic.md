# 知识点

### 1. const fs = require('fs');

```js
const fs = require('fs'); //此为 file system, 文件系统
const http = require('http'); // 用于 onst server = http.createServer
const url = require('url'); //
```

### 2. const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
```js
const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
```

### 3. 翻译JSON
```js
const laptopData = JSON.parse(json);
const xx = JSON.stringify(toJSON);
```

### 4. 检测是否有图片
```js
// IMAGES
else if ((/\.(jpg|jpeg|png|gif)$/i).test(pathName)) {
    fs.readFile(`${__dirname}/data/img${pathName}`, (err, data) => {
        res.writeHead(200, { 'Content-type': 'image/jpg'});
        res.end(data);
    });
}
```

### 5. 如何使用server
```js
// 1. 创建server
const server = http.createServer((req, res) => {}

// 2. 监听server
server.listen(1332, '127.0.0.1', () => {
    console.log('Listening for requests now');
});
```


# 最后, 直接上代码吧

```js
/**
 * index.js
 * 2019.12.10 Urbana
*/
const fs = require('fs');
const http = require('http');
const url = require('url');

const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
const laptopData = JSON.parse(json);



const server = http.createServer((req, res) => {
    
    const pathName = url.parse(req.url, true).pathname;
    const id = url.parse(req.url, true).query.id;

    // PRODUCTS OVERVIEW
    if (pathName === '/products' || pathName === '/') {
        res.writeHead(200, { 'Content-type': 'text/html'});
        // res.end(`This is a PRODUCTS page :) !`);
        fs.readFile(`${__dirname}/templates/template-overview.html`, 'utf-8', (err, data) => {
            
            fs.readFile(`${__dirname}/templates/template-card.html`, 'utf-8', (err, cards) => {
                
                let output = laptopData.map(el => renderTemplate(cards, el)).join(' ');
                output = data.replace(/{%CARDS%}/g, output);

                res.end(output);
            })
        });
    }

    // LAPTOP DETAIL
    else if (pathName === '/laptop' && id < laptopData.length){
        res.writeHead(200, { 'Content-type': 'text/html'});
        // res.end(`This is a LAPTOP page :)! And the ID is ${id}!`);

        fs.readFile(`${__dirname}/templates/template-laptop.html`, 'utf-8', (err, data) => {
            let output = renderTemplate(data, laptopData[id]);
            res.end(output);
        });
    }

    // IMAGES
    else if ((/\.(jpg|jpeg|png|gif)$/i).test(pathName)) {
        fs.readFile(`${__dirname}/data/img${pathName}`, (err, data) => {
            res.writeHead(200, { 'Content-type': 'image/jpg'});
            res.end(data);
        });
    }

    // URL NOT FOUND
    else {
        res.writeHead(404, { 'Content-type': 'text/html'});
        res.end('Error! The URL was not found in this page :(');
    }
});



server.listen(1332, '127.0.0.1', () => {
    console.log('Listening for requests now');
});



const renderTemplate = (originHTML, laptop) => {
    let output = originHTML.replace(/{%PRODUCTNAME%}/g, laptop.productName); //regular expression
    output = output.replace(/{%IMAGE%}/g, laptop.image);
    output = output.replace(/{%PRICE%}/g, laptop.price);
    output = output.replace(/{%SCREEN%}/g, laptop.screen);
    output = output.replace(/{%CPU%}/g, laptop.cpu);
    output = output.replace(/{%STORAGE%}/g, laptop.storage);
    output = output.replace(/{%RAM%}/g, laptop.ram);
    output = output.replace(/{%DESCRIPTION%}/g, laptop.description);
    output = output.replace(/{%ID%}/g, laptop.id);
    console.log(laptop);
    
    return output;
};
```