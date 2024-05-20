import { useRef, useState } from "react";

function App () {
const [pokemon, setPokemon] = useState("");
const inputText = useRef();

function PokemonElement () {
  console.log(pokemon)
  if (pokemon.sprites === undefined) {
    return <p>ここに名前と画像が表示されます</p>;
  } else {
    return (
      <>
        <dt>name</dt>
        <dd>{pokemon.name}</dd>
        <dt>image</dt>
        <dd><img src={pokemon.sprites.front_default} alt="" /></dd>
      </>
    )
  }
}

async function fetchData(id) {
  await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  .then(res => {
    if (res.status === 404) {
      return {name: "404 error"}
    } else 
      return res.json()
  })
  .then(res => setPokemon(res)
  )
}
  return (
    <>
    <h1>pokemon api</h1>
    <input ref={inputText}></input>
    <button onClick={() => fetchData(inputText.current.value)}>send</button>
    <div id="result">
      <PokemonElement></PokemonElement>
    </div>
    </>
  )
}

export default App;