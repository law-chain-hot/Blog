## 1. BootStrap Grid System
This is the key of BootStrap, the row will be automatially divided into 12 areas
```js
//通过 container -> row -> col
    <div class="container">
        <div class="row">
            <div class="col-4 col-sm-2 offset-1">
                <h5>Links</h5>
                <ul class="list-unstyled">
                    <li><a href="#">Home</a></li>
                    <li><a href="./aboutus.html">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="./contactus.html">Contact</a></li>
                </ul>
            </div>
        </div>
    </div>
```


## 2. Navigation
It is easy to build the navigation for the webpage.
```html
<!-- fixed-top: keep the top bar in the top of screen  -->
    <nav class="navbar navbar-dark navbar-expand-sm fixed-top">
        <div class="container">
            <!-- for extra small navigation -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- for brand of website -->
            <a class="navbar-brand mr-auto" href="#"><img src="img/logo.png" height="30" width="41"></a>

            <!-- for navigation -->
            <div class="collapse navbar-collapse" id="Navbar">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active"><a class="nav-link" href="#"><span class="fa fa-home fa-lg"></span>
                            Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="./aboutus.html"><span
                                class="fa fa-info fa-lg"></span> About</a></li>
                    <li class="nav-item"><a class="nav-link" href="#"><span class="fa fa-list fa-lg"></span> Menu</a>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="./contactus.html"><span
                                class="fa fa-address-card fa-lg"></span> Contact</a></li>
                </ul>
                <span class="navbar-text">
                    <a data-toggle="modal" data-target="#loginModal">
                        <span class="fa fa-sign-in"></span> Login</a>
                </span>
            </div>
        </div>
    </nav>
```


## 3. Less && Sass
**What should be in the script**  
`less: lessc styles.less styles.css`
`sass: node-sass -o css/ css/`

**How to use or install them**  
`npm install -g less`  
`npm install --save-dev node-sass `

```js
// Briefly 
// Sass(scss) is for node-sass
// less is for less
```

```css
/* ---------------------------------------------------- */
/* Less */
@background-dark: dark;

.zero (@parameter1: 0px, @para2: 0px) {
    margin:0px auto;
	padding: @pad-up-dn @pad-left-right;
}

.row-content {
    .zero-margin(50px,0px);     /* How to use variable .zero */
    border-bottom: 1px ridge;
    min-height:400px;
}


/* ---------------------------------------------------- */
/* Sass */
$background-dark: dark;

@mixin zero-margin($pad-up-dn, $pad-left-right) {
    margin: 0px auto;
    padding: $pad-up-dn $pad-left-right;
}

.row-content {
    @include zero-margin(50px, 0px);  /* How to use variable zero-margin */
    border-bottom: 1px ridge;         /* @include is essential*/
    min-height: 400px;
}
```






## 4. Grunt and Gulp
While both tools can perform many of the same tasks, the major differences when comparing **Grunt** vs **Gulp** are how they accomplish them. ... Another difference is that:
- Grunt uses data configuration files that are similar to JSON
- Gulp employs JavaScript, which tends to be easier to write.
```js
//Gulp Streams
gulp.src().pipe().pipe(gulp.dest())
```

```js
"use strict";

var gulp = require("gulp"),
    sass = require("gulp-sass"),
    browserSync = require("browser-sync"),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    uglify = require('gulp-uglify'),
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev'),
    cleanCss = require('gulp-clean-css'),
    flatmap = require('gulp-flatmap'),
    htmlmin = require('gulp-htmlmin');

gulp.task("sass", function () {
    return gulp
        .src("./css/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("./css"));
});

gulp.task("sass:watch", function () {
    gulp.watch('./css/*.scss', ['sass']); //['sass'] means: call task(sass), which is above
})

gulp.task('browser-sync', function () {
    var files = [
        './*.html',
        './css/*.css',
        './img/*.{png,jpg,gif}',
        './js/*.js'
    ];

    browserSync.init(files, {
        server: {
            baseDir: "./"
        }
    });
});

// Clean
gulp.task('clean', function () {
    return del(['dist']);
});

gulp.task('copyfonts', function () {
    gulp.src('./node_modules/font-awesome/fonts/**/*.{ttf,woff,eof,svg}*')
        .pipe(gulp.dest('./dist/fonts'));
});

// Images
gulp.task('imagemin', function () {
    return gulp
        .src('img/*.{png,jpg,gif}')
        .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
        .pipe(gulp.dest('dist/img'));
});

gulp.task('usemin', function () {
    return gulp.src('./*.html')
        .pipe(flatmap(function (stream, file) {
            return stream
                .pipe(usemin({
                    css: [rev()],
                    html: [function () { return htmlmin({ collapseWhitespace: true }) }],
                    js: [uglify(), rev()],
                    inlinejs: [uglify()],
                    inlinecss: [cleanCss(), 'concat']
                }))
        }))
        .pipe(gulp.dest('dist/'));
});



// API

gulp.task('build', ['clean'], function () {
    gulp.start('copyfonts', 'imagemin', 'usemin');
});


// Default task
gulp.task('default', ['browser-sync'], function () {
    gulp.start('sass:watch');
});
```