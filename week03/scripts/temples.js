
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




// Dynamic Main Header
const navLinks = document.querySelectorAll('nav ul li a');
const mainHeader = document.getElementById('main-header');

// Function to update header based on nav link
function updateHeader(event) {
    // event.preventDefault();


    const linkId = event.target.id;

    switch (linkId) {
        case 'home':
            mainHeader.innerHTML = '<h1>Home</h1>'
            break;

        case 'old':
            mainHeader.innerHTML = '<h1>Old</h1>'
            break;

        case 'new':
            mainHeader.innerHTML = '<h1>New</h1>'
            break;        

        case 'large':
            mainHeader.innerHTML = '<h1>Large</h1>'
            break;

        case 'small':
            mainHeader.innerHTML = '<h1>Small</h1>'
            break;
        
        default:
            mainHeader.innerHTML = '<h1>Home</h1>'
            break;
    }
}

// Add Event Listeners to Navigation Links 
navLinks.forEach(link=> {
    link.addEventListener('click', updateHeader);
});




// Responsive Hamburger Menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('#navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
