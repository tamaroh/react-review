import { useRef, useState } from "react";

function App () {
const [pokemon, setPokemon] = useState("");
const inputText = useRef();

function PokemonElement () {
  if (pokemon === "") {
    return <p>pokemon name displayed here</p>;
  } else {
    console.log(pokemon);
    return (
      <>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.sprites.front_default} alt="pokemon sprite" />
      </>
    )
  }
}

async function fetchData(idOrName) {
  const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}`)
  await result.json()
  .then(res => setPokemon(res));
  
}

  return (
    <>
    <h1>pokemon api</h1>
    <input ref={inputText}></input>
    <button onClick={() => (fetchData(inputText.current.value))}>ポケモンゲットだぜ！</button>
    <div id="result">
      <PokemonElement></PokemonElement>
    </div>
    </>
  )
}

export default App;