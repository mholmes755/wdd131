// Get Current Date

const currentDate = new Date();

const dateOption = {month: 'short', year: 'numeric'};
const currentYear = currentDate.toLocaleDateString('en-US', dateOption);
const copyrightYear = '&copy' + currentYear; 

document.getElementById('copyrightYear').innerHTML = copyrightYear;




// Last Modified Date
const lastModif = document.lastModified;
const lastModifText = 'Last Modified: ' + lastModif;
document.getElementById('lastModified').textContent = lastModifText;


// Temple Info

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Adelaide, Australia",
        location: "Marden, South Australia",
        dedicated: "2000, June, 15",
        area: 10700,
        imageUrl:
        "https://www.churchofjesuschrist.org/imgs/ac55d0df60be2627d4e67f5aab5eece766f672c0/full/800%2C/0/default"
    },
    {
      templeName: "Manhattan, New York",
      location: "New York, New York, United States",
      dedicated: "2004, June, 14",
      area: 20630,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/manhattan-new-york-temple/manhattan-new-york-temple-33761.jpg"
    },
    {
        templeName: "Raleigh, North Carolina",
        location: "Apex, North Carolina, United States",
        dedicated: "1999, December, 18",
        area: 12864,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/raleigh-north-carolina-temple/raleigh-north-carolina-temple-6727.jpg"
    }
  ];


  // Generate Temple Cards
  function buildTemples(temples){
    const container = document.getElementById('templeCards');
    const html = temples.map(
        (temple) => `
        <div class = "temple-card">
            <div class="temple-info">
                <h2 class="temple-name">${temple.templeName}</h2>
                <p class="temple-location"><strong>Location:</strong> ${temple.location}</p>
                <p class="dedication-date"><strong>Dedicated: </strong>${temple.dedicated}</p>
                <p class="temple-area"><strong>Area:</strong> ${temple.area} Sq. Ft.</p>
            </div>
            <img src= "${temple.imageUrl}" alt="${temple.templeName}" class="temple-image" loading="lazy">

        </div>
        `
    ).join('');

    container.innerHTML = html;

  };

  buildTemples(temples);



// Responsive Hamburger Menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('#navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


// Change display based on selected Nav item
function filteredTemples(criteria){
    let filteredTemples;

    if (criteria ==="old"){
        filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1950);

    }
    else if (criteria ==="new"){
        filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() >= 1950);

    }
    else if(criteria ==="large"){
        filteredTemples = temples.filter(temple => temple.area > 15000);
    
    }
     else if (criteria ==="small"){
        filteredTemples = temples.filter(temple => temple.area <= 15000);

    }
    else {
        filteredTemples = temples;
    }
    buildTemples(filteredTemples);
}



function updateHeader(criteria){
  const header = document.getElementById("main-header");

  let headerText;

  switch(criteria){
    case "old":
      headerText = "Temples dedicated before 1950";
      break;

    case "new":
      headerText = "Temples dedicated after 1950";
      break;

    case "large":
      headerText = "Temples with an area over 15,000 Sq. Ft.";
      break;

    case "small":
      headerText = "Temples with an area less than 15,000 Sq Ft.";
      break;
    
    default:
      headerText = "Home"
  }
  header.textContent = headerText;
}


// Add event listeners for nav for the above code segments above^^ 

document.getElementById("home").addEventListener('click', () =>{
  filteredTemples(""),
  updateHeader("")});

document.getElementById("old").addEventListener('click', () =>{
  filteredTemples("old"),
  updateHeader("old")});

document.getElementById("new").addEventListener('click', () =>{
  filteredTemples("new"),
  updateHeader("new")});

document.getElementById("large").addEventListener('click', () =>{
  filteredTemples("large"),
  updateHeader("large")});

document.getElementById("small").addEventListener('click', () =>{
  filteredTemples("small"),
  updateHeader("small")});

