module.exports = () => ({
	devtool: 'eval-source-map',
	// devServer: {
	// 	open: true,
	// },
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
						},
					},
				],
			},
		],
	},
});
