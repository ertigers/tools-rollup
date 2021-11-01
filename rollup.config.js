import { terser } from "rollup-plugin-terser"

export default {
  input: 'lib/index.js',
  output: [{
    name: 'Gulu',
    file: 'dist/webcu2plugin.js',
    format: 'umd',
    plugins: [terser()]
  }]
}