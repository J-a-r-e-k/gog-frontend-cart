const del = require("del");
const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const cleanCSS = require("gulp-clean-css");
const browserSync = require("browser-sync").create();

sass.compiler = require("node-sass");

const CONFIG = {
    "styles": {
        "src": "src/styles/**/*.scss",
        "dest": "dist/css"
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
        .pipe(sourcemaps.write("./maps"))
        .pipe(cleanCSS())
        .pipe(gulp.dest(CONFIG.styles.dest));
}

function stylesProd() {
    return gulp.src(CONFIG.styles.src)
        .pipe(sass().on("error", sass.logError))
        .pipe(cleanCSS())
        .pipe(gulp.dest(CONFIG.styles.dest));
}

function watch() {
    browserSync.init({
        server: "./"
    });
    gulp.watch(`${CONFIG.watchDir}/*`, stylesDev);
    gulp.watch(`${CONFIG.watchDir}/*`).on("change", browserSync.reload);
}

const dev = stylesDev;
const prod = gulp.series(clean, gulp.parallel(stylesProd));

exports.dev = dev;
exports.prod = prod;
exports.watch = watch;