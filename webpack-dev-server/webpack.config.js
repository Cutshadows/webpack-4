const path=require('path')
const MiniCSSExtractPlugin=require('mini-css-extract-plugin')
const HtmlWebpackPlugin=require('html-webpack-plugin')
const webpack=require('webpack')

module.exports={
    entry:{
       home: path.resolve(__dirname, 'src/js/index.js'),
       //price: path.resolve(__dirname, 'src/js/price.js'),
      // contact: path.resolve(__dirname, 'src/js/contact.js')
    },
    mode:'development',
    devServer:{
        hot:true,
        open:true,
        port:9000
    },
    output:{
        //path:path.resolve('output', 'js')//ruta que se puede poner
        //path:path.resolve(__dirname)//ruta que se puede poner
        path:path.resolve(__dirname, './dist'),//definir otra ruta para guardar
        filename:'js/[name].js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[/* {
                    loader: MiniCSSExtractPlugin.loader
                }, */
                    'style-loader', //ya no sirve por que tenemos el loader de la clase MiniCSSExtractPlugin
                    'css-loader'
                ]
            }
            //puedo poner objetos o solo text
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        /* new MiniCSSExtractPlugin({
            filename:'./css/[name].css'
        }), */
        new HtmlWebpackPlugin({
            title:'webpack-dev-server'
        })
    ]
}
//common js

//dist (compilados)es una convencion de desarrollo para poner ahi en esa carpeta todo lo relacionado a webpack