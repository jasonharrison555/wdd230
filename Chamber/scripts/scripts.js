// select the DOM elements to manipulate (we will output to these)
const datefield = document.querySelector("time");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
// "full" or long, medium, short options ... try them

datefield.textContent = fulldate;

