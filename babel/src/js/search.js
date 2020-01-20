async function search(id){
    const response =await fetch(`https://pokeapi.co/api/v2/ability/${id}/`, {mode: 'no-cors'})
    const pokemon=await response.json()
    return pokemon
}

export default search;