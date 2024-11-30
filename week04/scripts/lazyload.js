
// Current Year
const currentDate = new Date();


    // weeday: 'long', month: 'short', day: 'numeric'
const dateOption = {month: 'short', year: 'numeric'};
const currentYear = currentDate.toLocaleDateString('en-US', dateOption);
const copyrightYear = '&copy ' + currentYear;

document.getElementById('copyrightYear').innerHTML = copyrightYear;



// Last Modified Date
const lastModif = document.lastModified;
const lastModifText = 'Last Modified: ' + lastModif;
document.getElementById('lastModif').textContent = lastModifText;
