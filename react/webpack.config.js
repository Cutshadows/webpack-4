const path=require('path')
const MiniCSSExtractPlugin=require('mini-css-extract-plugin')
const HtmlWebpackPlugin=require('html-webpack-plugin')
const webpack=require('webpack')

module.exports={
    entry:{
       home: path.resolve(__dirname, 'src/js/index.js')
    },
    mode:'development',
    devServer:{
        hot:true,
        open:true,
        port:9000
    },
    output:{
        path:path.resolve(__dirname, './dist'),//definir otra ruta para guardar
        filename:'js/[name].js'
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env', "@babel/preset-react"]
                    }
                }, //ya no sirve por que tenemos el loader de la clase MiniCSSExtractPlugin
                exclude:/node_modules/ //excluye el directorio de node_modules
            }
            //puedo poner objetos o solo text
        ],
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader', //ya no sirve por que tenemos el loader de la clase MiniCSSExtractPlugin
                    'css-loader'
                ]
            }
            //puedo poner objetos o solo text
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            //title:'webpack-dev-server',
            template:path.resolve(__dirname, 'index.html'),
            filename:'index.html',
            inject:'body'

        })
    ]
}
//common js

//dist (compilados)es una convencion de desarrollo para poner ahi en esa carpeta todo lo relacionado a webpack