const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = (env, argv) => {
	const isProduction = argv.mode === 'production';

	return {
		mode: isProduction ? 'production' : 'development',
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		resolve: {
			extensions: ['.tsx', '.ts', '.js'],
			fallback: {
				url: require.resolve('url/'),
				path: require.resolve('path-browserify'),
				crypto: require.resolve('crypto-browserify'),
				stream: require.resolve('stream-browserify'),
				buffer: require.resolve('buffer/'),
				util: require.resolve('util/'),
				assert: require.resolve('assert/'),
				http: require.resolve('stream-http'),
				https: require.resolve('https-browserify'),
				os: require.resolve('os-browserify/browser'),
				fs: false,
			},
		},
		module: {
			rules: [
				{
					test: /\.css$/i,
					use: ['style-loader', 'css-loader'],
				},
				{
					test: /\.svg$/,
					use: [
						{
							loader: '@svgr/webpack',
							options: {
								icon: true,
							},
						},
						{
							loader: 'file-loader',
							options: {
								name: '[name].[ext]?ver=[hash]',
								outputPath: 'images',
							},
						},
					],
				},
				{
					test: /\.(png|jpg|gif|jpeg)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].[ext]?ver=[hash]',
								outputPath: 'images',
							},
						},
					],
				},
				{
					test: /\.(ts|js)x?$/,
					exclude: /node_modules/,
					use: [
						{
							loader: 'babel-loader',
						},
					],
				},
			],
		},
		output: {
			path: path.resolve(__dirname, 'dist'),
			chunkFilename: '[name].js?ver=[hash]',
			filename: '[name].js?ver=[hash]',
			publicPath: '/',
		},
		devtool: isProduction ? 'source-map' : 'inline-source-map',
		devServer: {
			port: 3000,
			open: true,
			hot: true,
			historyApiFallback: true,
		},
		optimization: {
			minimize: isProduction,
		},
		plugins: [
			new CleanWebpackPlugin(),
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, 'public', 'index.html'),
			}),
			new Dotenv({
				allowEmptyValues: true,
				systemvars: true,
			}),
			new webpack.ProvidePlugin({
				Buffer: ['buffer', 'Buffer'],
			}),
			new webpack.DefinePlugin({
				'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
			}),
		],
	};
};
