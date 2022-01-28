import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({data, searchData}) {

  const filtered = [...data].filter(pokemon => pokemon.name.includes(searchData.toLowerCase()))

  return (
    <Card.Group itemsPerRow={6}>
      {filtered.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} />)}
    </Card.Group>
  );
}

export default PokemonCollection;
