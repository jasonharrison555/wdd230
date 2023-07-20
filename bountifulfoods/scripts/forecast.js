fetch('https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&exclude=hourly,minutely&units=imperial&appid=89a5dfd4094babce2245c6d363403b06')
.then(response => response.json())
.then(data => {
    for (i=0; i<3;i++){
        document.getElementById("day" + (i+1) + "temp").innerHTML = "temp" + Number(data.list[i].main.temp).toFixed(1)
    }
});