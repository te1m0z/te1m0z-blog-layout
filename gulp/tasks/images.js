export const images = () => {
    return app.gulp.src(app.path.src.images)
        .pipe(app.plugins.imagemin())
        .pipe(app.gulp.dest(app.path.build.images))
}