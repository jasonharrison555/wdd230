const url = 'scripts/data.json';

async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets); 
    displayCompany(data.companies)
  }
  

  const displayCompany = (cardData) => {
    const cards = document.querySelector('#companyCards'); 
  
    cardData.forEach((buisness) => {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let companyAddress = document.createElement('p');
      let companyNumber = document.createElement('P');
      let companyWeb = document.createElement('p');
      let portrait = document.createElement('img');
  

      h2.textContent = `${buisness.name}`;
      companyAddress.textContent = ` ${buisness.address}`;
      companyNumber.textContent = ` ${buisness.phonenumber}`;
      companyWeb.textContent = ` ${buisness.website}`;
 
      portrait.setAttribute('src', buisness.icon);
      portrait.setAttribute('alt', `${buisness.name}`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
  
      
      card.appendChild(portrait);
      card.appendChild(h2);
      card.appendChild(companyAddress);
      card.appendChild(companyNumber);
      card.appendChild(companyWeb);
      cards.appendChild(card);
    }); 
  } 
  
  getData();

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#companyCards");

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