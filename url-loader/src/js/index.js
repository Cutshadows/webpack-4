import '../css/index.css'
import logo from '../img/requiere-version-android.png'
import video from '../video/DWC_28_01.mp4'


document.body.innerHTML="<p> <img src="+logo+" /></p><p> <video src="+video+" width='360' controls poster="+logo+"></video> </p>";


/* import search from '../js/search.js'
import render from './render'

const id= prompt("quien es ese pokemon")

search(id).then((data)=>{
    render(data)
}).catch(()=>{
    console.log('no hubo pokemon')
}) */