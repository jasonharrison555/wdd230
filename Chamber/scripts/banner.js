
let bannerGreeting = document.querySelector("#bannerGreeting");
let  time = new Date();
let day = time.getDay();
let message = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m."

   if (day == 1 || day == 2) {
    bannerGreeting.innerHTML = `<h1>${message}</h1>`
   } else {
    bannerGreeting.innerHTML = `<h1>${""}</h1>`
   
   }
   