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
      let portrait = document.createElement('img');
      let member = document.createElement('p');  

      h2.textContent = `${buisness.name}`;
      companyAddress.textContent = ` ${buisness.address}`;
      companyNumber.textContent = ` ${buisness.phonenumber}`;
      companyWeb.textContent = ` ${buisness.website}`;
      member.textContent = `${buisness.membership}`;
 
      portrait.setAttribute('src', buisness.icon);
      portrait.setAttribute('alt', `${buisness.name}`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '140');
      portrait.setAttribute('height', '240');
  
  
      card.appendChild(h2);
      card.appendChild(portrait);
      card.appendChild(companyAddress);
      card.appendChild(companyNumber);
      card.appendChild(companyWeb);
      cards.appendChild(card);
    }); 
  } 
  
  getData();