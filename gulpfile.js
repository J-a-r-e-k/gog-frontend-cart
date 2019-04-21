const del = require("del");
const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const cleanCSS = require("gulp-clean-css");
const browserSync = require("browser-sync").create();
const webp = require("gulp-webp");
const webpack = require('webpack-stream');
const named = require("vinyl-named");

sass.compiler = require("node-sass");

const CONFIG = {
    "styles": {
        "src": "src/styles/**/*.scss",
        "dest": "dist/css"
    },
    "scripts": {
        "src": "src/scripts/app.js",
        "dest": "dist/js"
    },
    "images": {
        "src": "src/images/**/*",
        "dest": "dist/images"
    },
    "watchDir": "src/**"
};

function clean() {
    return del(CONFIG.styles.dest);
}

function stylesDev() {
    return gulp.src(CONFIG.styles.src)
        .pipe(sourcemaps.init())
        .pipe(sass().on("error", sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(CONFIG.styles.dest));
}

function stylesProd() {
    return gulp.src(CONFIG.styles.src)
        .pipe(sass().on("error", sass.logError))
        .pipe(cleanCSS())
        .pipe(gulp.dest(CONFIG.styles.dest));
}

function scriptsDev() {
    return gulp.src(CONFIG.scripts.src)
        .pipe(sourcemaps.init())
        .pipe(named())
        .pipe(webpack({
            "mode": "development",
            "devtool": "source-map"
        }).on("error", (err) => console.error(err)))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(CONFIG.scripts.dest));
}

function scriptsProd() {
    return gulp.src(CONFIG.scripts.src)
        .pipe(named())
        .pipe(webpack({
            "mode": "production"
        }).on("error", (err) => console.error(err)))
        .pipe(gulp.dest(CONFIG.scripts.dest));
}

function watch() {
    browserSync.init({
        server: "./"
    });
    gulp.watch(`${CONFIG.watchDir}/*.scss`, stylesDev);
    gulp.watch(`${CONFIG.watchDir}/*.js`, scriptsDev);
    gulp.watch(`${CONFIG.watchDir}/*`).on("change", browserSync.reload);
}

function imagesWebp() {
    return gulp.src(`${CONFIG.images.src}.jpg`)
        .pipe(webp())
        .pipe(gulp.dest(CONFIG.images.dest));
}

function imagesCopy() {
    return gulp.src(CONFIG.images.src)
        .pipe(gulp.dest(CONFIG.images.dest));
}

const dev = gulp.series(clean, gulp.parallel(imagesCopy, imagesWebp, stylesDev, scriptsDev));
const prod = gulp.series(clean, gulp.parallel(imagesCopy, imagesWebp, stylesProd, scriptsProd));

exports.dev = dev;
exports.prod = prod;
exports.watch = watch;