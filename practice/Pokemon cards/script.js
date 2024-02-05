const container = document.createElement("div");
// const card = document.createElement("div");
// const name = document.createElement("div");

const url = "https://pokeapi.co/api/v2/pokemon?limit=1001";

container.classList.add("container");

async function getPokemonDetails(url) {
  const response = await fetch(url);
  const data = await response.json();
  // console.log(data.results)
  return data.results;
}

function createCard(pokemon) {

  const card = document.createElement("div");
  const p = document.createElement("p");

  card.classList.add("card");
  p.classList.add("pokemon-name");

  p.textContent = pokemon.name;

  card.appendChild(p)
  container.appendChild(card);
}
getPokemonDetails(url).then((response) => {
  response.map(createCard)
});
document.body.appendChild(container);
// const pokemonArray=getPokemonDetails(url);
// // console.log(pokemonArray);
// // pokemonArray.map(createCard)
// console.log(typeof pokemonArray)
// console.log(pokemonArray);



