
const pokemon = [];

const divTag = document.createElement('div');
divTag.id = "root"
document.body.appendChild(divTag);

const ulTag = document.createElement('ul');
divTag.appendChild(ulTag);

/*pokemon.push('<ul>');
pokemonList.forEach((pokemonName)=>{
  
  pokemon.push(`
  <li>${pokemonName}</li>`);
})
pokemon.push('</ul');
divTag.innerHTML = pokemon.join('');
//li태그 추가*/ 



const response = await fetch("https://pokeapi.co/api/v2/pokemon-species/");
const result = await response.json();
console.log(result.results.length);

let pokemonList = result.results;

let pokemonLength = result.results.length;

for(let i = 0; i <pokemonLength; i++){
  console.log(pokemonList[i].name);
  pokemon.push(pokemonList[i].name); 
  
  const liTag = document.createElement('li');
  ulTag.appendChild(liTag);
  const liTagText = document.createTextNode(pokemonList[i].name);
  liTag.appendChild(liTagText);
  
  
}

console.log (pokemon);
//포켓몬 API 데이터