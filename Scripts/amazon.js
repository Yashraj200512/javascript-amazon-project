import { products } from "../data/products.js";
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
           data-product-name="${product.name}"  data-product-id="${product.id}" data->
            Add to Cart
          </button>
        </div>`;




});


document.querySelector('.products-grid').innerHTML = productsHTML;

let cartArray = JSON.parse(localStorage.getItem('Cart')) || [];
let quantitySelection;
document.querySelectorAll('.button-primary').forEach((button, index) => {
  button.addEventListener('click', () => {
    addedMessage(index);
    quantitySelection = 0;
    quantitySelection = parseInt(document.querySelector(`.js-select-${products[index].id}`).value);


    let matchingProduct = false;

    cartArray.forEach((objectProduct) => {
      if (objectProduct.productId === button.dataset.productId) {
        objectProduct.quantity += quantitySelection;
        matchingProduct = true;
      }
    })

    if (!matchingProduct) {
      cartArray.push({
        productName: button.dataset.productName,
        quantity: quantitySelection,
        productId: button.dataset.productId,
        productImage: products[index].image,
        productPrice: products[index].priceCents
      })
    }
    let totalProducts = 0;
    cartArray.forEach((product) => {
      totalProducts += product.quantity;
    })


    console.log(cartArray);
    document.querySelector('.cart-quantity').innerHTML = totalProducts;
    localStorage.setItem('Cart', JSON.stringify(cartArray));
  });
});



let timeoutId;
function addedMessage(index) {
  document.querySelector(`.Add-Msg-${products[index].id}`).classList.add('added-to-cart-visible')
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    document.querySelector(`.Add-Msg-${products[index].id}`).classList.remove('added-to-cart-visible')
  }, 2000);
}
