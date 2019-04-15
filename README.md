# TRAILBLAZER 

_Frontend files for Trailblazar project_

## Geting Started 🚀

All what we need it's to install the NPM dependencies to use Gulp. Open your cmd and use this command:

```
npm install
```

_If you don't have npm installed globally, follow these instructions: https://www.npmjs.com/get-npm_

## Directories 📁
    .
    ├── assets                  # Source files 
          ├── css                 # Sass files. They are split in modules and device resolution (Mobile, tablet and desktop)
          ├── img                 # Images
          ├── js                  # Custom Javascript (This doesn't include third party libraries)
          ├── vendor              # All the third party libraries
              ├── css               # CSS plugins
              ├── js                # JS plugins
              ├── webfonts          # Webfonts --> In this case we are using Fontaweome
    ├── dist                    # Compiled files --> Do not modify this 
    ├── doc1.html               # Basic structure of a documentation page
    ├── docguide.html           # Guide of modules for the documentation
    ├── index.html              # Homepage
    ├── gulpfile.js             # It runs the gulp tasks



## Useful commands 💾

_These are the tasks set in gulpfile.js_

* gulp scripts
* gulp sass
* gulp images
* gulp watch
* gulp vendorJS
* gulp vendorCSS


### gulp scripts 

Compiles the files from:

```
'assets/js/**/*.js', 
'assets/js/*.js'
```

To:

```
dist/js/main.js
```

___


### gulp sass 

This watches the next file:

```
'assets/css/main.scss'
```

And compiles all the sass files into:

```
dist/css/main.css
```

> ***It's very important to save main.scss with any sass change***


___


### gulp images

It copies and optimizes the images from:

```
'assets/img/**/*', 
'assets/img/*'
```

To:

```
dist/images/
```

___


### gulp vendorCSS 

Compiles the files from:

```
'assets/vendor/css/*.css', 
'assets/vendor/css/**/*.css'
```

To:

```
dist/css/vendor.css
```

___


### gulp vendorJS

Compiles the files from:

```
'assets/vendor/js/*.js', 
'assets/vendor/js/**/*.js'
```

To:

```
dist/js/vendor.js
```

___


### gulp fonts

Copies the font files from:

```
'assets/vendor/webfonts/*'
```

To:

```
dist/webfonts/
```

___


### gulp watch

This keeps watching all the files and run the proper task depending on the file change


___


❤️ from [Brontosaurio](https://www.brontosaurio.com.ar)
