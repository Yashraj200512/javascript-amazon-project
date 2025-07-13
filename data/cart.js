import { products } from "./products.js";


let cartArray = JSON.parse(localStorage.getItem('Cart')) || [];

let quantitySelection;
export function addToCart(button, index) {
  let matchingProduct = false;
//quantityselection gets value from select tag for how much quanitity at a time to be added
  quantitySelection = parseInt(document.querySelector(`.js-select-${products[index].id}`).value);


  cartArray.forEach((objectProduct) => {//checks if the product has already been add,
                                       //  if yes then inc it quantity
    if (objectProduct.productId === button.dataset.productId) {
      objectProduct.quantity += quantitySelection;
      matchingProduct = true;
    }
  })

  if (!matchingProduct) {//if no then add it to cart

    cartArray.push({
      Id: button.dataset.productId,
      quantity: quantitySelection,
      
    })
  }
}

export function countTotalproducts() {
  let totalProducts = 0;
  cartArray.forEach((product) => {
    totalProducts += product.quantity;
  })

  document.querySelector('.cart-quantity').innerHTML = totalProducts;
}

export function saveCart(){
    localStorage.setItem('Cart', JSON.stringify(cartArray));
}