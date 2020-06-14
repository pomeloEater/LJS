const gulp = require("gulp");
const babel = require("gulp-babel");

gulp.task("default", async function () {
  // 노드 소스
  gulp.src("ex6/**/*.js").pipe(babel()).pipe(gulp.dest("dist"));
  // 브라우저 소스
  gulp.src("public/es6/**/*.js").pipe(babel()).pipe(gulp.dest("public/dist"));
});
