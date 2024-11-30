
// use the date object
const currentDate = new Date();


// weekday: 'long', month: 'short', day: 'numeric',
const options = {year: 'numeric'};
const currentYear = currentDate.toLocaleDateString('en-US', options);
const copyrightYear = '&copy' + currentYear;

document.getElementById('copyrightYear').textContent = copyrightYear;



// Last Modified
const lastModif = document.lastModified;
const lastModifText = 'Last Modified: ' + lastModif;
document.getElementById('lastModified').textContent = lastModifText;
