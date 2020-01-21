import React, { useState } from 'react';
import data from './data.json';
import Loader from './loader.js';

console.log(data)

function App(){
    const [loaderList, setLoaderList]=useState([])// puede haber arrancado con data useState(data)
    function handleClick(){
        setLoaderList(data.loaders)
    }
    return(
        <div >
            que linda aplicacion hecha en React.js
            <ul>{
                loaderList.map(item=><Loader data={item} key={item.id} />)
            }
            </ul>
            <button onClick={handleClick}>Mostrar lo aprendido hasta el momento</button>
        </div>
    )
}

export default App