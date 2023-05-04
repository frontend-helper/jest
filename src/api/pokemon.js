const getPokemonList = () => {
  return fetch("https://pokeapi.co/api/v2/pokemon/").then((response) => {
    if (response.status === 200) return response.json();
    else throw new Error("Invalid response");
  });
};

export { getPokemonList };
