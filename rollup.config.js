import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import buble from 'rollup-plugin-buble';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';
import postcss from 'rollup-plugin-postcss';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import vue from 'rollup-plugin-vue2';
// import css from 'rollup-plugin-css-only';

export default {
	entry: './src/main.js',
	format: 'cjs',
	plugins: [
		vue(),
		// css(),
		postcss(),
		resolve({
			jsnext: true,
			main: true,
			browser: true
		}),
		commonjs(),
		json(),
		replace({
			exclude: 'node_modules/**',
			ENV: JSON.stringify(process.env.NODE_ENV || 'development')
		}),
		// babel({
		// 	exclude: ['src/style/**']
		// }),
		buble(),
		(process.env.NODE_ENV === 'production' && uglify()),
	    serve({
	    	contentBase: 'build',
	    	  // Set to true to return index.html instead of 404
			historyApiFallback: false,

			// Options used in setting up server
			host: 'localhost',
			port: 10001
	    }),
    	livereload({
    		watch: 'build'
    	})
	],
	sourceMap: 'inline',
	dest: './build/js/bundle.js'
}