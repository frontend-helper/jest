import { useEffect, useState } from "react";
import { getPokemonList } from "../api/pokemon";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    getPokemonList()
      .then((data) => {
        setError(false);
        setPokemons(data.results);
      })
      .catch((e) => setError(true));
  }, []);

  const goToDetails = (url) => {
    console.log("URL: ", url);
  };

  return error ? (
    <p>Unable to fetch data.</p>
  ) : (
    <ul className="list">
      {pokemons.map((pokemon) => (
        <li key={pokemon.name}>
          {pokemon.name}
          <span onClick={() => goToDetails(pokemon.url)}>&gt;</span>
        </li>
      ))}
    </ul>
  );
};
export default PokemonList;
