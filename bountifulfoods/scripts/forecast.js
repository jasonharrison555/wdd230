fetch('https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&exclude=hourly,minutely&units=imperial&appid=89a5dfd4094babce2245c6d363403b06')
.then(fill => fill.json())
.then(data => {
    for (i=0; i<3;i++){
        document.getElementById("day" + (i+1) + "temp").innerHTML = "temp" + Number(data.list[i].main.temp).toFixed(1)
    }
});

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
  }