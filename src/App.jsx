import { useRef, useState } from "react";

function App () {
const [pokemon, setPokemon] = useState("");
const inputText = useRef();

function PokemonElement () {
  if (pokemon === "") {
    return <p>pokemon name displayed here</p>;
  } else {
    return (
      <>
        <dt>name</dt>
        <dd>{pokemon.name}</dd>
        <dt>height</dt>
        <dd>{pokemon.height} m</dd>
        <dt>weight</dt>
        <dd>{pokemon.weight} kg</dd>
      </>
    )
  }
}

async function fetchData(id) {
  return await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
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