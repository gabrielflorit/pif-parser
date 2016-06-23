import { rollup } from 'rollup'
import buble from 'rollup-plugin-buble'

export default {
	entry: 'src/main.js',
	plugins: [ buble() ],
	format: 'cjs',
	dest: 'build/index.js',
}