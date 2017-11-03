# Getting started

I was tired of installing underscore_s and modifying it heck out of it, so I created a quick boilerplate theme with things set up the way I like it. If you dig it, fork away and customize it to your heart's content.

***I am using gulp to do the following:***
- Compile Sass
- Minify & gZip CSS
- Transpile ES6
- Lint JS files
- Uglify & gZip JS

The theme itself isn't doing anything fancy. No styles are added actually. It just has all the files that I need and use regularly.


## Install
After installing WordPress, using terminal, navigate to your themes directory.

Clone this git repo by using the following command:

```
$ git clone https://github.com/coreybrown89/wp-theme-boilerplate-gulp.git
```

This will download the latest version of wp-theme-boilerplate-gulp.

*You can also download this repo by clicking on the download link above the source files. Unzip this folder and add it to your themes directory in WordPress.*

In the terminal run:
```
$ npm install
```
or if you're hip:
```
$ yarn
```

## Setup

***functions.php***

Now that you are all set up, with dependencies installed, open up `functions.php`. Once there, you will want to find and replace all instances of `custom_theme`.

***style.css***

Next up, go to `style.css` in the root of the theme. In the comments at the top, rename the `Theme Name`, `Author` and `Author URI` with your theme information.

***screenshot.png***

To add a custom screenshot to your theme, replace the file screenshot.png with an image of your own. You must keep the filename the same for WordPress to recognize the image. Also, keep the image size `880x660` pixels.


## CSS, SASS, JS & Fonts

All of the css, sass, js and fonts are located in the `/resources` folder in the root of the theme. Import all sass files to `app.scss`. All scss and js files will get compressed, compiled and gziped and added to the `/public` folder.

```
$ gulp
```

When editing your theme, use the `gulp` command to start watching your files. Each time you save a `js` file or `scss` file gulp will compile & minify sass and lint and uglify javascript.


## Images

Add any `jpg`, `png`, `svg` or `gif` file to `/resouces/images`. When you add a new file to `/images` you will need to tell gulp to process the images by running the following:

```
$ gulp images
```

This will optimize and compress all assets inside of `/resources/images`. The compressed images will be located at `/public/images`. This does not watch your files. You will need to run this each time you are adding images.

***When running gulp***

- All .scss files inside of the `/scss` will be compiled and minified to css and added to the /css folder on save.

- The app.js file will be linted and compressed on save. Check the terminal for errors. A warning sound will play if your js does not pass.

- Image compression settins can be changed inside of `gulpfile.js`.


Have fun and happy coding!
