const currentTemp = document.querySelector('#current-temp');
const currentHum = document.querySelector('#current-hum');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('img');

const url= 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=89a5dfd4094babce2245c6d363403b06'

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

 

  function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    currentHum.innerHTML = `<strong>${weatherData.main.humidity.toFixed(0)}</strong>`;
    
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
  }