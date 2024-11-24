
// use the date object
const currentDate = new Date();


// weekday: 'long', month: 'short', day: 'numeric',
const options = {year: 'numeric'};
const currentYear = currentDate.toLocaleDateString('en-US', options);
const copyrightYear = '&copy' + currentYear;

document.getElementById('copyrightYear').textContent = currentYear;



// Last Modified
const lastModif = document.lastModified;
const lastModifText = 'Last Modified: ' + lastModif;
document.getElementById('lastModified').textContent = lastModifText;



// Wind chill factor
const temp = 11;
const windSpeed = 4.95;
function calculateWindChill (temp, windSpeed){
    if (temp <= 10 && windspeed >4.8){
        // T_wc = 13.12 + 0.6215 × T_a - 11.37 × v^0.16 + 0.3965 × T_a × v^0.16
        // T_wc = wind chill temp in C
        // T_a = temp in C
        // v = wind speed in km/h
        let chill = 13.12 + .6215 * temp - 11.37 * windSpeed**.16 + .3965 * temp * windSpeed**.16;
        return chill.toFixed(2); // returns value to 2 decimal places
} else {
    return document.getElementById('windChill').innerHTML = `<strong>N/A</strong>`;
}
}

document.getElementById('temp').innerHTML = `<strong>Temperature: ${temp}\u00B0C</strong>`;
document.getElementById('windSpeed').innerHTML = `<strong>Wind Speed: ${windSpeed}km/h</strong>`;

document.getElementById('windChill').innerHTML = `<strong>Wind Chill: ${calculateWindChill(temp,windSpeed)}\u00B0C</strong>`; // "\u00B0C mamkes the degree symbol"