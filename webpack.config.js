const path=require('path')

module.exports={
    entry:path.resolve(__dirname, 'index.js'),
    mode:'development',
    output:{
        //path:path.resolve('output', 'js')//ruta que se puede poner
        //path:path.resolve(__dirname)//ruta que se puede poner
        path:path.resolve(__dirname, 'dist'),//definir otra ruta para guardar
        filename:'bundle.js'
    }
}
//common js

//dist (compilados)es una convencion de desarrollo para poner ahi en esa carpeta todo lo relacionado a webpack