

const url = 'https://delaneyb22.github.io/wdd230/chamber/data.json';
async function getBuisnessData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);  // note that we reference the prophet array of the data object given the structure of the json file
  displayBuisness(data.buisnesses);
  }
  
 getBuisnessData();

const displayBuisness = (buisnesses) => {
  const cards = document.querySelector('div.cards'); // select the output container element

  buisnesses.forEach((buisness) => {
    // Create elements to add to the div.cards element
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let p = document.createElement('p');

 
    h2.textContent = `${buisness.name} `;
    p.textContent=`address: `+`${buisness.address} ` + `${buisness.phonenumber}`;

    // Build the image portrait by setting all the relevant attribute
    portrait.setAttribute('src', buisness.image);
    portrait.setAttribute('alt', `Portait of ${buisness.name}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    // Append the section(card) with the created elements
    card.appendChild(h2);
    card.appendChild(portrait);

    cards.appendChild(card);
    card.appendChild(p);
  } )// end of forEach loop
} // end of function expression


const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

function toggleMenu(){
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
