// Somewhere else in your code base set the last visit in localStorage
localStorage.setItem('lastVisit', new Date);

displaytheLastVisit();

function displaytheLastVisit() {
  const visitsDisplay = document.querySelector('.theLastVisit');

  const lastVisit = localStorage.getItem('lastVisit');

  const lastVisitDate = Date.parse(lastVisit);

  const currentDate = new Date();

  const difference = currentDate - lastVisitDate;
  const differenceInDays = Math.floor(difference / (1000 * 60 * 60 * 24));
  
  if (differenceInDays >= 0) {
    visitsDisplay.innerText = "Today"
    return;
  } else {
    visitsDisplay.innerText = differenceInDays;
  }
  
  console.log(differenceInDays)
}