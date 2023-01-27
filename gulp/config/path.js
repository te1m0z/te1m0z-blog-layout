import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = `./dist`
const srcFolder = `./src`

export const path = {
  build: {
    html: `${buildFolder}/`,
    css: `${buildFolder}/css`,
    files: `${buildFolder}/files`,
    images: `${buildFolder}/images`,
    fonts: `${buildFolder}/fonts`,
  },
  src: {
    html: `${srcFolder}/*.html`,
    scss: `${srcFolder}/scss/index.scss`,
    files: `${srcFolder}/files/**/*.*`,
    images: `${srcFolder}/images/**/*.*`,
    fonts: `${srcFolder}/fonts/**/*.*`,
  },
  watch: {
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/**/*.html`,
    files: `${srcFolder}/files/**/*.*`,
    images: `${srcFolder}/images/**/*.*`,
  },
  clean: buildFolder,
  buildFolder,
  srcFolder,
  rootFolder,
}
