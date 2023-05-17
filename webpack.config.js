const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = 
{
    mode:'development',
    entry:
    {
        bundle: path.resolve(__dirname,'src/main.js')
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: '[name].[contenthash].js',
        clean:true
    },
    devServer:{
        static:{
            directory: path.resolve(__dirname,'dist')
        },
        port:3000,
        hot:true,
        open:true,
        
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use:[
                    'style-loader',
                    'css-loader',
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template: 'src/template.html'
        })
    ]
}