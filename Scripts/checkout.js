import { products } from "../data/products.js";
const cartArray=JSON.parse(localStorage.getItem('Cart')) || [];


  let orderHTML='';
  let matchingProduct;
function orderDisplay(){
orderHTML='';

cartArray.forEach(cartItem => {

  products.forEach((productItem)=>{
    
    if(productItem.id===cartItem.Id){
    matchingProduct=productItem;
    
    }
  })
  
console.log(cartItem);
  orderHTML+=`<div class="cart-item-container">
            <div class="delivery-date">
              Delivery date: Tuesday, June 21
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingProduct.image}">

              <div class="cart-item-details">
                <div class="product-name">
                 ${matchingProduct.name}
                </div>
                <div class="product-price">
                  $${(matchingProduct.priceCents /100).toFixed(2)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div class="delivery-option">
                  <input type="radio" checked
                    class="delivery-option-input"
                    name="delivery-option-1">
                  <div>
                    <div class="delivery-option-date">
                      Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-1">
                  <div>
                    <div class="delivery-option-date">
                      Wednesday, June 15
                    </div>
                    <div class="delivery-option-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-1">
                  <div>
                    <div class="delivery-option-date">
                      Monday, June 13
                    </div>
                    <div class="delivery-option-price">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>`;

         
    
});
 document.querySelector('.order-summary').innerHTML=orderHTML;
 Delete();
}

 orderDisplay();





  function Delete(){
document.querySelectorAll('.delete-quantity-link').forEach((deleteBtn,index)=>
{
deleteBtn.addEventListener('click',()=>{

cartArray.splice(index,1);
 
 localStorage.setItem('Cart',JSON.stringify(cartArray));
 orderDisplay();
 
})
});

  }

//payment calculation of order
 let totalProducts=0;
 let paymentItems=0;
    cartArray.forEach((product)=>{
    totalProducts+=product.quantity;
    })

cartArray.forEach((product)=>{
paymentItems+=product.productPrice*product.quantity;

});








    
document.querySelector('.return-to-home-link').innerHTML=`${totalProducts} items`;
document.querySelector('.js-items').innerHTML=`Items (${totalProducts}):`;
document.querySelector('.payment-items').innerHTML=`$${(paymentItems/100).toFixed(2)}`;













// <div class="payment-items">$42.75</div>
//           </div>

//           <div class="payment-summary-row">
//             <div>Shipping &amp; handling:</div>
//             <div class="payment-ship">$4.99</div>
//           </div>

//           <div class="payment-summary-row subtotal-row">
//             <div>Total before tax:</div>
//             <div class="payment-before-tax">$47.74</div>
//           </div>

//           <div class="payment-summary-row">
//             <div>Estimated tax (10%):</div>
//             <div class="payment-tax">$4.77</div>
//           </div>

//           <div class="payment-summary-row total-row">
//             <div>Order total:</div>
         //   <div class="payment-total">$52.51</div>