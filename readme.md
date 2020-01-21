# Introducción a Webpack

Webpack es un **empaquetador** para Javascript y sus amigos. Convierte módulos con dependencias en archivos estáticos que los navegadores entienden.

Nos permite empaquetar, optimizar los diferentes módulos Javascript y sus dependencia en nuestro proyecto. **Es usado en proyectos basados en Javascript como: React, Vue, Angular entre otros**.

User Experience
Se logra con una aplicación que:

* Funcione
* Sea rápida
* Cumpla sus necesidades
* Se actualice
* Responda a sus interacciones
* Producto de calidad
* Developer Experience
* Escribir aplicaciones de manera eficiente.
* Tener un código limpio.
* Aplicar tecnología para resolver sus problemas.
* Tener un conjunto de reglas y convenciones.
* Entorno de desarrollo optimizado en productividad.



> * `npm install webpack --save-dev --save-exact`  dependencias de desarrollo
> * `npm install webpack --save --save-exact` guarda en las dependencias con las version exacta
> * `npm install webpack-cli` desde una version superior necesita a webpack-cliente

### **npx** llama las dependencias solo del proyecto.
> ejem: npx webpack -v

> `npx webpack --entry ./index.js --output ./bundle.js`  require configuracion es un archivo que se le entrega al cliente final es el producto que se entrega para clientes

>`npx webpack --entry ./index.js --output ./bundle.js  --mode development` configura el ambiente en desarrollo o production


cuando se crea el **webpack.config.js**  se puede modificar el entorno del proyecto y puede ser tomado del webpack en la configuracion de package.json

## cuando se crea la configuracion ahi se puede hacer  `npm run build`


/*** no hay convension para poner solo build o build:external  */


## MULTIPLES ENTRYPOINTS
> `webpack.config.js
entry:{
       home: path.resolve(__dirname, 'src/js/index.js'),
       price: path.resolve(__dirname, 'src/js/price.js'),
       contact: path.resolve(__dirname, 'src/js/contact.js')
    },`
> `package.json
    "build:multi": "webpack --config ./multi-entry-point/webpack.config.js"`  

> configurar el package json y las entradas ademas de configurar de mejor manera las rutas y donde entrega el **bundle** generandose por cada vista un **bundle** personalizado

## MANEJO DE ASSETS CON LOADERS
> para la comprension de css se usa una libreria npm que es css-loader
`npm install css-loader --save-dev --save-exact`

y se configura en el webpack.config.js de la forma que quiere que se interprete y se injecte dentro del js

el componente npm que se encarga de injectar el css se llama style-loader

al hacer un llamado o integracion con webpack.config.js se adihere al index.js y asi se puede importar eh injectar dentro de js

## DENTRO DEL WEBPACK.CONFIG.JS
> `module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            }
            //puedo poner objetos o solo text
        ]
    }`


## introduccion de plugin

minificar css 
dos manejadores de plugin con npm es: 
`npm install mini-css-extract-plugin --save-dev --save-exact` minifador de css
`npm install html-webpack-plugin --save-dev --save-exact`  plugin para manejar

* primero lo importamos ``const MiniCSSExtractPlugin=require('mini-css-extract-plugin') `` ** asi se declara **segun documentacion**

luego se instancia


poner **`--watch -w`**
para observar los cambios en tiempo real

* instalar un npm para que observe cambios y sin hacer f5 los actualize incluyendo las dependencias

`npm install -D --save-exact webpack-dev-server ` plugin parecido al nodemon

# para integracion de webpack y hot reloaded

const webpack=require('webpack')

 > `devServer:{
        hot:true,
        open:true,
        port:9000
    },
new webpack.HotModuleReplacementPlugin(),`

# Integracion de Babel para transpilar el codigo javascript para que soporte cualquier navegador.

> `rules:[
            {
                test:/\.js$/,
                use:'babel-loader', //ya no sirve por que tenemos el loader de la clase MiniCSSExtractPlugin
                exclude:/node_modules/ //excluye el directorio de node_modules
            }
            //puedo poner objetos o solo text
        ],`

## integrar babel se require crear un archivo que se llame **`.babelrc`**

dentro de ese archivo se configura

> `{
  "presets": [
      "preset-env"  *solo soporta lenguaje javascript moderno 
  ]  
}`


## Para hacer uso de la configuracion de babel se debe instalar el siguiente **npm** 

> `npm install --save-dev --save-exact @babel/core babel-loader @babel/preset-env`

### @babel/plugin-transform-runtime
> `npm install --save-dev --save-exact @babel/plugin-transform-runtime`

### core de @babel/runtime

> `npm install --save --save-exact @babel/runtime`

### instalar @babel/preset-react
> `npm install --save-dev --save-exact @babel/preset-react`

# instalar dependencias del core de react
> `npm install --save --save-exact react react-dom `

>## trae un error en la version 7.16
## componentes se escriben en Mayusculas


## url Loader para el manejo de archivos
>`npm install --save-dev --save-exact url-loader`
### se configura en el webpack.config.js agregando a los modulos 


>`module:{
        rules:[
            {
            test:/\.jpg|png|woff|gif|eot|ttf|svg|mp4|webm$/, //regex para el formato que acepta la carga 
            use:{
                loader:'url-loader',
                options:{
                    limit:90000,  //va a aceptar tamaño de archivos hasta 9000 de tamaño
                }
            },
        }
    ]
 }`

## como **url-loader** no es el unico complemento que se dedica a manejo de archivos se le debe instalar **file-loader** para la manipulacion 
> `npm install --save-dev --save-exact file-loader`


# Quede en el video 15



## React.js es una libreria de javascript para construir interfaces de usuarios










