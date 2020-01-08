var path = require('path');
var webpack = require('webpack');
var DllPlugin = webpack.DllPlugin;

module.exports = {
	entry: {
        react: ['react', 'react-dom']
	},
	output: {
		filename: '[name].dll.js',
		path: path.resolve(__dirname, 'dll'),
		library: '[name]_dll'
	},
	plugins: [
		new DllPlugin({
			name: '[name]_dll',
			path: path.join(__dirname, 'dll', '[name].manifest.json')
		})
	]
}