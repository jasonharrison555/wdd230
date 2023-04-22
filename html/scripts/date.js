// Select the HTML element to manipulate
const date = new Date(document.lastModified);
const options = {weekday :'numeric', day: 'numeric', month: 'numeric', year: 'numeric'}
// document.getElementById('lastmod').textContent = new Date().toDateString('en-US', options);

let mod = document.lastModified;
document.getElementById("lastmod").textContent = mod; 