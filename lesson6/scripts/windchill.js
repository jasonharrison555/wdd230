let temp = 70;
let  speed = 13;

let windChill = (35.74 + (0.6215 * temp)) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp *Math.pow(speed, 0.16));

if (temp <= 50 && speed >= 3) {
    windChill = Math.round(35.74 + (0.6215 * temp)) - Math.round(35.75 * Math.pow(speed, 0.16)) + Math.round(0.4275 * temp * Math.pow(speed, 0.16));
} else {
   windChill = "N/A";
}


document.getElementById("wChill").innerHTML = windChill;
document.getElementById("speed").innerHTML = speed;