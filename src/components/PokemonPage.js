import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [data, setData] = useState([])
  const [text, setText] = useState('')

  useEffect(() => {
    fetch(`http://localhost:3001/pokemon`)
      .then(r => r.json())
      .then(pokemons => setData(pokemons))
  }, [])

  function onChange(value) {
    setText(value)
  }

  function onSubmit(newObj) {
    setData([...data, newObj])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onSubmit={onSubmit} />
      <br />
      <Search onChange={onChange} text={text} />
      <br />
      <PokemonCollection data={data} searchData={text} />
    </Container>
  );
}

export default PokemonPage;
