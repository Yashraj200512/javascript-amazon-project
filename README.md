# Amazon E-Commerce Clone 🛒 (Work in Progress)

A frontend simulation of an e-commerce platform inspired by Amazon. This project focuses on **DOM manipulation**, **modular JavaScript**, and **data management** using local storage.

> 🚧 **Note:** This project is currently under development. Some features (like final payment processing and order history) are incomplete.

## 📂 Project Structure

* **`amazon.html`**: The main landing page displaying the product grid.
* **`checkout.html`**: The cart review page where users can manage items and see cost summaries.
* **`Scripts/`**: Contains the logic modules.
    * `amazon.js`: Generates the product grid and handles "Add to Cart" events.
    * `checkout.js`: Renders cart items and handles item deletion.
    * `orders.js`: (Future implementation) Handles past order history.
* **`data/`**: Stores the application state.
    * `products.js`: Contains the list of product objects.
    * `cart.js`: Manages cart array operations and `localStorage` persistence.

## ✨ Implemented Features

### 🛍️ Product Browsing (`amazon.html`)
* **Dynamic Grid:** Products are generated via JavaScript from the `products.js` data file.
* **Add to Cart:**
    * Users can select a quantity (1-10) before adding an item.
    * Visual "Added" feedback appears briefly upon clicking the button.
    * The cart counter in the header updates instantly.

### 🛒 Checkout & Cart (`checkout.html`)
* **Order Review:** Displays all items currently in the cart with their details.
* **Item Management:**
    * **Delete Items:** Users can remove products from the cart directly from the checkout page.
    * **Quantity Display:** Shows the current quantity selected for each item.
* **Cost Calculation:**
    * Calculates the total cost of items in the cart dynamically.

## 📝 To-Do / In Progress

The following features are planned or currently being built:
* [ ] **Dynamic Delivery Options:** Making the radio buttons for delivery dates update the shipping cost and total price in real-time.
* [ ] **Full Payment Summary:** Finalizing the math for Tax (10%) and Shipping handling to update the "Order Total" correctly.
* [ ] **Place Order:** Implementing the functionality to clear the cart and move items to the "Orders" page.
* [ ] **Responsive Tweaks:** Finalizing CSS for smaller mobile screens.

## 🚀 How to Run

1.  Clone the repository.
2.  Open `amazon.html` in your browser (or use VS Code **Live Server** for the best experience with ES6 modules).
3.  Add items to your cart and proceed to `checkout.html` to see the logic in action.

## 🛠️ Technologies
* **HTML5 & CSS3** (Flexbox/Grid)
* **JavaScript (ES6 Modules)**
* **Git & GitHub**
