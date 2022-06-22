/*
Description
We're going to create a Pokemon Trading Cards show page. To achieve this, you'll use JS to dynamically create all the elements on the page!

Instructions
- Use this template as the starting point => https://codesandbox.io/s/pokemon-trading-cards-template-rd5vq?file=/index.js
- Make sure you check and understand the data that is given to you! 
- Create a card using JS that represents a single pokemon, use the example image as a reference. You will also find an HTML example in the templates folder
- Use the exact CSS classes you see in the example HTML to obtain the same style for each card
- The cards should be nested inside <ul class="cards"></ul>. Otherwise the styles will break.
- Use the official-artwork object key as the images for the cards. The images are all inside of the sprites key, in each pokemon object
- Render all the cards on the page that represents all the pokemons, recreating the same layout, using JS

Tips
- Use functions to your advantage. Break each card into smaller parts, and think how you can turn them into functions.
- Once you've got a card, think of a way to programmatically create all the others
- Make sure you understand well the data structure before starting to create the cards
*/

console.log(data);

function createCardItem(card) {
  //   <li class="card">
  //   <h2 class="card--title">Bulbasaur</h2>
  //   <img
  //     width="256"
  //     class="card--img"
  //     src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
  //   />
  //   <ul class="card--text">
  //     <li>HP: 45</li>
  //     <li>ATTACK: 49</li>
  //     <li>DEFENSE: 49</li>
  //     <li>SPECIAL-ATTACK: 65</li>
  //     <li>SPECIAL-DEFENSE: 65</li>
  //     <li>SPEED: 45</li>
  //   </ul>
  // </li>

  let liEl = document.createElement("li");
  liEl.className = "card";

  let h2El = document.createElement("h2");
  h2El.className = "card--title";
  h2El.textContent = card.name;

  let imgEl = document.createElement("img");
  imgEl.width = 256;
  imgEl.className = "card--img";
  imgEl.src = card["sprites"]["other"]["official-artwork"]["front_default"];

  let ulEl = document.createElement("ul");
  ulEl.className = "card--text";

  for (stat of card.stats) {
    let liStatEl = document.createElement("li");
    liStatEl.textContent = `${stat.stat.name}: ${stat.base_stat}`.toUpperCase();
    ulEl.append(liStatEl);
  }

  liEl.append(h2El, imgEl, ulEl);

  let cardsUl = document.querySelector(".cards");
  cardsUl.append(liEl);
}

for (let card of data) {
  createCardItem(card);
}
