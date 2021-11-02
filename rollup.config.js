import { terser } from "rollup-plugin-terser"

export default {
  input: 'lib/webcu2plugin.js',
  output: [{
    name: 'Gulu',
    file: 'dist/webcu2plugin.js',
    format: 'umd',
    plugins: [terser()]
  }]
}