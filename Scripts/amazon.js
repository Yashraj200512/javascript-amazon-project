import { products } from "../data/products.js";
import { addToCart,countTotalproducts,saveCart } from "../data/cart.js";


let productsHTML = '';
products.forEach((product) => {
  productsHTML += ` <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            ${(product.priceCents / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select class="js-select-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart Add-Msg-${product.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary" 
           data-product-name="${product.name}"  data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>`;

});


document.querySelector('.products-grid').innerHTML = productsHTML;

//main cart button event loop
document.querySelectorAll('.button-primary').forEach((button, index) => {
  button.addEventListener('click', () => {

    addToCart(button,index);
    displayAddedMessage(index);
    document.querySelector('.cart-quantity').innerHTML = countTotalproducts();
  
    saveCart();
    
  });
});


//displays add-msg when clicked addToCart button
let timeoutId;
function displayAddedMessage(index) {
  document.querySelector(`.Add-Msg-${products[index].id}`).classList.add('added-to-cart-visible')
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    document.querySelector(`.Add-Msg-${products[index].id}`).classList.remove('added-to-cart-visible')
  }, 2000);
}






