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

function fetchData() {
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