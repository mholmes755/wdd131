// GET COPYRIGHTYEAR

currentDate = new Date();

const option = {year : 'numeric'};
const currentYear = currentDate.toLocaleDateString('en-US', option);
const copyrightYear = 'Holmes Hardware &copy' + currentYear;

document.getElementById('copyrightYear').innerHTML = copyrightYear;


// PRODUCTS ARRAY

const products = [
    {
      id: "00001",
      productName: "Cornhole Board",
      productPrice: "",
      productDescription: "This is a cornhole board",
      productionDate: "2022-05-15",
      amountPurchased: "3",
      imageUrl:"images/cornhole.webp"

    },
    {
        id: "00002",
        productName: "End Table",
        productPrice: "",
        productDescription: "This is an end table",
        productionDate: "2020-12-12",
        amountPurchased: "4",
        imageUrl:"images/endTable.webp"
  
    },
    {
        id: "00003",
        productName: "Jewelry Box",
        productPrice: "",
        productDescription: "This is a Jewelry Box",
        productionDate: "2021-03-17",
        amountPurchased: "5",
        imageUrl:"images/jewelryBox.webp"
  
      },
      {
          id: "00004",
          productName: "Coming Soon!",
          productPrice: "",
          productDescription: "This is BLANK",
          productionDate: "2024-01-25",
          amountPurchased: "10",
          imageUrl:"images/holmesHardware.jpg"
    
        },
        {
            id: "00005",
            productName: "Coming Soon!",
            productPrice: "",
            productDescription: "This is BLANK",
            productionDate: "2024-06-24",
            amountPurchased: "6",
            imageUrl:"images/holmesHardware.jpg"
      
          },
          {
              id: "00006",
              productName: "Coming Soon!",
              productPrice: "",
              productDescription: "This is BLANK",
              productionDate: "2024-09-27",
              amountPurchased: "7",
              imageUrl:"images/holmesHardware.jpg"
        
            }
  ];


  // GENERATE PRODUCT CARDS ON PRODUCT PAGE
  function buildProducts(products){
    let container = document.getElementById('productCards');
    let html = products.map(
        (product) => `
        <div class = "productCard">
            <div class"name">
                <h2 class="productName">${product.productName}</h2>
            </div>
            <img src= "${product.imageUrl}" alt="${product.productName}" class="product-image" loading="lazy" width="250px">
            <div id= "productInfo">
                <p><strong>Price: $ ${product.productPrice || 'N/A'}</strong></p>
                <p><strong>Description: </strong>${product.productDescription}</p>
            </div>

        </div>
        `
    ).join('');

    container.innerHTML = html;

  }



  
  buildProducts(products);


  // DISPLAY PRODUCTS ON PRODUCTS PAGE BASED ON FILTER

function filteredProducts(criteria){
    let filteredProducts;

    if (criteria==="all"){
        filteredProducts = products;
    }
    else if (criteria ==="newest"){
        filteredProducts = products.filter(product => new Date(product.productionDate).getFullYear() >= currentYear);
    }
    else if(criteria ==="popular"){
        filteredProducts = products.filter(product => product.amountPurchased > 5);
    }
    else if (criteria === "other") {
       filteredProducts = products.filter(product =>{
        const productYear = new Date(product.productionDate).getFullYear();
        return productYear < currentYear && product.amountPurchased <= 5;
       });
        }
    else {
        filteredProducts = products;
    }

    buildProducts(filteredProducts);
}


// ADD EVENT LISTENER ON PRODUTCS PAGE

document.getElementById('sortBy').addEventListener('change', (event) => {
    const selectedValue = event.target.value;
    filteredProducts(selectedValue);
});



// JavaScript code to populate a select dropdown menu

document.addEventListener('DOMContentLoaded', () => {
    // Define the dropdown menu and use the existing products array
    const dropdown = document.getElementById('productSelect'); // Use the correct ID from your HTML

    // Populate the dropdown menu with products
    products.forEach(product => {
        const optElement = document.createElement('option');
        optElement.value = product.id;
        optElement.textContent = product.productName;
        dropdown.appendChild(optElement);
    });
});



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
      alert("please fill out all required fields before submitting.");
    }
  });
  