// Current date and copyright year
const currentDate = new Date();
const options = { year: 'numeric' };
const currentYear = currentDate.toLocaleDateString('en-US', options);
document.getElementById('copyrightYear').textContent = currentYear;

// Last Modified
const lastModif = document.lastModified;
const lastModifText = 'Last Modified: ' + lastModif;
document.getElementById('lastModified').textContent = lastModifText;

// Product Array
const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Generate Products for Dropdown
function generateProducts(products) {
  const selectElement = document.getElementById('productSelect');
  const optionsHTML = products.map(product => 
    `<option value="${product.id}">${product.name}</option>`
  ).join('');
  selectElement.innerHTML += optionsHTML;
}


// Call functions to render content
generateProducts(products);



// Local Storage Functions

// Get current count form Local Storage
function getReviewCount (){
  let count = localStorage.getItem('reviewCount');
  return count ? parseInt(count) : 0;
}

// Update count in Local Storage
function incrementReviewCount() {
  let currentCount = getReviewCount();
  currentCount++;
  localStorage.setItem('reviewCount', currentCount);
}

// Event Listener for Submit Button
document.querySelector('form').addEventListener('submit', function(event){
  const form = event.target;
  if (form.checkValidity()){
    incrementReviewCount();
  } else{
    alert("please fill out all required fields before submitting.")
  }
});
