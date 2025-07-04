import { cart, removeFromCart } from "../data/cart.js";
import { formatCurrency } from "../scripts/utils/money.js"



const cartGrid = document.querySelector('.js-order-summary');

console.log(cart)

const loadCart = () => {
    cartGrid.innerHTML = '';

    console.log(cart)

    cart.forEach((product, index) => {

        cartGrid.innerHTML += ` <div class="cart-item-container">
          <div class="delivery-date">
            Delivery date: Tuesday, June 21
          </div>

          <div class="cart-item-details-grid">
            <img class="product-image" src="${product.image}">

            <div class="cart-item-details">
              <div class="product-name">
                ${product.name}
              </div>
              <div class="product-price">
                ${formatCurrency(product.priceCents)}
              </div>
              <div class="product-quantity">
                <span>
                  Quantity: <span class="quantity-label">${product.quantity}</span>
                </span>
                <span class="update-quantity-link link-primary">
                  Update
                </span>
                <span class="delete-quantity-link link-primary js-delete-button">
                  Delete
                </span>
              </div>
            </div>

            <div class="delivery-options">
              <div class="delivery-options-title">
                Choose a delivery option:
              </div>
              <div class="delivery-option">
                <input type="radio" checked class="delivery-option-input" name="delivery-option-1">
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
                <input type="radio" class="delivery-option-input" name="delivery-option-1">
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
                <input type="radio" class="delivery-option-input" name="delivery-option-1">
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

    const deleteButton = document.querySelectorAll('.js-delete-button');
    console.log(deleteButton)

    deleteButton.forEach((button, index) => {
        button.addEventListener('click', () => {
            removeFromCart(index);

        });


    });


}


loadCart();



































// import { cart } from '../data/cart.js';
// import { formatCurrency } from './utils/money.js';

// const ordersContainer = document.querySelector('.js-order-summary');


// const loadCart = () => {
//   ordersContainer.innerHTML = ''
//   cart.forEach((product) => {
//     ordersContainer.innerHTML += `   < div class="cart-item-container" >
//           <div class="delivery-date">
//             Delivery date: Wednesday, June 15
//           </div>

//           <div class="cart-item-details-grid">
//             <img class="product-image" src="${product.image}">

//             <div class="cart-item-details">
//               <div class="product-name">${product.name} </div>
//               <div class="product-price">
//                $ ${formatCurrency(product.price) * product.quantity}
//               </div>
//               <div class="product-quantity">
//                 <span>
//                   Quantity: <span class="quantity-label">${product.quantity}</span>
//                 </span>
//                 <span class="update-quantity-link link-primary">
//                   Update
//                 </span>
//                 <span class="delete-quantity-link link-primary">
//                   Delete
//                 </span>
//               </div>
//             </div>

//             <div class="delivery-options">
//               <div class="delivery-options-title">
//                 Choose a delivery option:
//               </div>

//               <div class="delivery-option">
//                 <input type="radio" class="delivery-option-input" name="delivery-option-2">
//                 <div>
//                   <div class="delivery-option-date">
//                     Tuesday, June 21
//                   </div>
//                   <div class="delivery-option-price">
//                     FREE Shipping
//                   </div>
//                 </div>
//               </div>
//               <div class="delivery-option">
//                 <input type="radio" checked class="delivery-option-input" name="delivery-option-2">
//                 <div>
//                   <div class="delivery-option-date">
//                     Wednesday, June 15
//                   </div>
//                   <div class="delivery-option-price">
//                     $4.99 - Shipping
//                   </div>
//                 </div>
//               </div>
//               <div class="delivery-option">
//                 <input type="radio" class="delivery-option-input" name="delivery-option-2">
//                 <div>
//                   <div class="delivery-option-date">
//                     Monday, June 13
//                   </div>
//                   <div class="delivery-option-price">
//                     $9.99 - Shipping
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>`;
//   });

// }


// loadCart();




