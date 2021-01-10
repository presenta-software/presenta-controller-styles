import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'

import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'

const terser = require('rollup-plugin-terser').terser

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/presenta-controller-styles.min.js',
    format: 'umd',
    name: 'PresentaControllerStyles',
    sourcemap: false
  },
  watch: {
    exclude: 'dist/*',
    include: 'src/**'
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled'
    }),
    terser(),
    commonjs(),
    postcss({
      modules: false,
      autoModules: false,
      plugins: [
        autoprefixer({ grid: true }),
        cssnano({ preset: 'default' })
      ]
    })
  ]
}
