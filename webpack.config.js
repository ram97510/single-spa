const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');

module.exports = {
	entry: {
		'root-application': 'src/root-application/root-application.js',
		'common-dependencies': [
			'core-js/client/shim.min.js',
			'@angular/common',
			'@angular/compiler',
			'@angular/core',
			'@angular/platform-browser-dynamic',
			'@angular/router',
			'reflect-metadata',
			'react',
			'react-dom',
			'react-router-dom'
		],
	},
	output: {
		publicPath: '/dist/',
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: [path.resolve(__dirname, 'node_modules')],
				loader: 'babel-loader',
			},
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			
			{
                test:/\.(png|jpg)$/,
                use:['file-loader']
            },
		],
	},
	node: {
		fs: 'empty'
	},
      
	resolve: {
		extensions: [".ts", ".tsx", ".js",".jsx",".esm.js"],
		modules: [
			__dirname,
			'node_modules',
		],
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common-dependencies',
		}),
		new ContextReplacementPlugin(
			/(.+)?angular(\\|\/)core(.+)?/,
			path.resolve(__dirname, '../src')
			)
	],
	devtool: 'source-map',
	externals: [
	],
	devServer: {
		
		host:'0.0.0.0',
		port:9100,
		historyApiFallback: true,

		
		proxy: [

				{
				context: ['/lab'],
				target: 'http://localhost:8899/api/jupyter',
				ws: true,
				secure: false,
				changeOrigin: true
			},

			{
				context: ['/static'],
				target: 'http://localhost:8899/api/jupyter',
				// ws: true,
				// secure: false,
				changeOrigin: true
			},

			{
				context: ['/api/jupyter'],
				target: 'http://localhost:8899',
				// ws: true,
				// secure: false,
				changeOrigin: true
			},

			// {
			// 	context: ['/lab'],
			// 	target: 'http://localhost:8899',
			// 	changeOrigin: true,
				
			// },


			// {
			// 	context: ['/static'],
			// 	target: 'http://localhost:8899',
			// 	changeOrigin: true,
			// },

			// {
			// 	context: ['/api'],
			// 	target: 'http://localhost:8899',
			// 	changeOrigin: true,
			// },
			// {
			// 	context: ['/nbdime'],
			// 	target: 'http://localhost:8899',
			// 	changeOrigin: true,
			// },


			// {
			// 	context: ['/git/**'],
			// 	target: 'http://localhost:8899',
			// 	changeOrigin: true,
			// },


			// {
			// 	context: ['/elyra'],
			// 	target: 'http://localhost:8899',
			// 	changeOrigin: true,
			// },
			
			// {
			// 	context: ['/lsp'],
			// 	target: 'http://localhost:8899',
			// 	changeOrigin: true,
			// },

			// {
			// 	context: ['/kernelspecs'],
			// 	target: 'http://localhost:8899',
			// 	changeOrigin: true,
			// },

			// --------------------------------

			{
				context: ['/nxtmeta'],
				target: 'http://172.16.0.18:3000',
				// pathRewrite: { '^/nxtmeta': '' },
				// secure: false,
				changeOrigin: true,
		    },

			{
				context: ['/app/fonts','/api', '/app/assets','/app','/browse/app'],
				target: 'http://172.16.0.18:3000',
				// secure: false,
				changeOrigin: true,
		    },

			{
				context: ['/dashboard/app'],
				target: 'http://172.16.0.18:3000',
				pathRewrite: { '^/dashboard': '' },
				changeOrigin: true,
		    },
			
		

		 	//----GEN AI
			// {
			// 	context: ['/static','/chatflows'],
			// 	target: 'http://localhost:3000',
			// 	changeOrigin: true,
			// },
			// {
			// 	context: ['/assets'],
			// 	target: 'http://localhost:3000',
			// 	changeOrigin: true,
		  	// },

			{
				context: ['/static','/chatflows',],
				target: 'http://localhost:3001',
				changeOrigin: true,
			},
			{
				context: ['/assets'],
				target: 'http://localhost:3001',
				changeOrigin: true,
		  	},
			

			//-----AI ML 
		    // {
			// 	context: ['/3', '/flow', '/99'],
			// 	target: 'http://localhost:54321',
			// 	changeOrigin: true,
		    // },
		    // {
			// 	context: ['/fonts', '/img'],
			// 	target: 'http://localhost:54321/flow',
			// 	changeOrigin: true,
		    // },

			//-----AI ML 
		    {
				context: ['/3', '/flow', '/99'],
				target: 'http://172.16.0.18:54321',
				changeOrigin: true,
		    },
		    {
				context: ['/fontss', '/img'],
				target: 'http://172.16.0.18:54321/flow',
				changeOrigin: true,
		    },
			


			//-----WORK BENCH
			// {
			// 	context: ['/jup'],
			// 	target: 'http://localhost:3500',
			// 	changeOrigin: true,
			// },

			// {
			// 	context: ['/workcc'],
			// 	target: 'http://localhost:3500',
			// 	pathRewrite: { '^/workcc': '' },
			// 	changeOrigin: true,
			// },

			// {
			// 	context: ['/javascript'],
			// 	target: 'http://localhost:3500',
			// 	// pathRewrite: { '^/workcc': '' },
			// 	changeOrigin: true,
			// },
			// // {
			// 	context: ['/api/jupyter'],
			// 	target: 'http://localhost:3500',
			// 	secure: false,
			// 	changeOrigin: true,
			// 	pathRewrite: (path, req) => {
			// 		if (path.startsWith('/api/jupyter/api/settings') || path.startsWith('/api/jupyter/api/translations') || path.startsWith('/api/jupyter/api/workspaces')) {
			// 			return path.replace(/^\/api\/jupyter/, '/api/jupyter/lab');  // ✅ `/lab` required for settings & translations
			// 		}
			// 		if (path.startsWith('/api/jupyter/@jupyterlab')) {
			// 			return path.replace(/^\/api\/jupyter/, '/api/jupyter/lab/api/themes');  // ✅ Fix theme paths
			// 		}
			// 		return path.replace(/^\/api\/jupyter/, '/api/jupyter');  // ✅ No `/lab` for other endpoints
			// 	}
			// },

			//---- chat report 
			// {
			// 	context: ['/chatai'],
			// 	target: 'http://localhost:8501',
			// 	changeOrigin: true,
			// },


			
			// nxt cd
			{
				context: ['/pipelines'],
				target: 'http://172.16.0.18:8153/go',
				changeOrigin: true,
		    },
			{
				context: ['/go/**'],
				target: 'http://172.16.0.18:8153',
				changeOrigin: true,
		    },

			// feast
			{
				context: ['/projects-list.json'],
				target: 'http://172.16.0.18:10000',
				changeOrigin: true,
		    },
			{
				context: ['/static'],
				target: 'http://172.16.0.18:10000',
				changeOrigin: true,
		    },
			
			{
				context: ['/my_feature_repo'],
				target: 'http://172.16.0.18:10000/p',
				changeOrigin: true,
		    },


			//--nifi


			// {
			// 	context: ['/nxtdataintegration'],
			// 	target: 'http://172.16.0.18:8383/nifi/',
			// 	pathRewrite: { '^/nxtdataintegration': '' },
			// 	// secure: false,
			// 	changeOrigin: true,
		    // },
			// {
			// 	context: ['/assets','/images','/css','/js','/views'],
			// 	target: 'http://172.16.0.18:8383/nifi',
			// 	changeOrigin: true,
		    // },

			// {
			// 	context: ['/fonts'],
			// 	target: 'http://172.16.0.18:8383/nifi',
			// 	changeOrigin: true,
		    // },

			// {
			// 	context: ['/nifi-api'],
			// 	target: 'http://172.16.0.18:8383',
			// 	changeOrigin: true,
		    // },

			// {
			// 	context: ['/summary','/counters','/bulletin-board','/provenance','/history','/templates'],
			// 	target: 'http://172.16.0.18:8383/nifi',
			// 	secure: false,
			// 	changeOrigin: true,
		    // },
			
		],
	  }
	}