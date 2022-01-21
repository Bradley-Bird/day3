import { getPokedex, getStarWarsPeople } from './fetch.js';

// import functions
// console.log('app.js is running ')
// grab DOM elements
const template = document.querySelector('#template');
const list = document.querySelector('#list');
const selectEl = document.querySelector('#api');
// const audio = document.querySelector('#audio')
// console.log('elements', template, list,);

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state
async function getPokemon() {
    const pokemons = await getPokedex();
    for (let pokemon of pokemons) {
        const clone = template.content.cloneNode(true);
        const pokemonName = clone.querySelector('#pokemon');
        const pokemonImg = clone.querySelector('#image');
        const sDefense = clone.querySelector('#defense');
        pokemonName.textContent = pokemon.pokemon;
        pokemonImg.src = pokemon.url_image;
        sDefense.textContent = pokemon.defense;
        // audio.src = '/assets/pokemon.wav';
        // audio.play();

        // console.log(pokemonName, pokemonImg, sDefense,);
        list.append(clone);
    }
}
//i am writing this to try and push something not empty to git hub.
async function getStarWars() {
    const characters = await getStarWarsPeople();
    for (let character of characters) {
        // console.log(character)
        const clone = template.content.cloneNode(true);
        // console.log(clone, 'clone');
        const name = clone.querySelector('#pokemon');
        const hair = clone.querySelector('#hair_color');
        name.textContent = character.name;
        hair.textContent = character.hair_color;
        // console.log(name, hair);

        list.append(clone);
    }
}
selectEl.addEventListener('change', async (event) => {
    const selected = event.target.value;
    // console.log(selected)
    if (selected === 'pokemon') {
        await getPokemon();
    } else if (selected === 'star-wars') {
        await getStarWars();
    }
});

// window.addEventListener('load', async () => {
//     await getPokemon();
// })
