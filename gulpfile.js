import gulp from 'gulp'
import { path } from './gulp/config/path.js'
import { plugins } from './gulp/config/plugins.js'

global.app = {
  path,
  gulp,
  plugins,
}

import { copy } from './gulp/tasks/copy.js'
import { reset } from './gulp/tasks/reset.js'
import { html } from './gulp/tasks/html.js'
import { server } from './gulp/tasks/server.js'
import { scss } from './gulp/tasks/scss.js'
import { images } from './gulp/tasks/images.js'

function watcher() {
  //gulp.watch(path.watch.files, copy)
  gulp.watch(path.watch.html, html, images)
  gulp.watch(path.watch.scss, scss)
  gulp.watch(path.watch.images, images, html)
}

const mainTasks = gulp.parallel(copy, html, scss, images)

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server))

gulp.task('default', dev)
