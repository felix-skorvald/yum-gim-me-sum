import { hideAll } from "./hide-all.js";
import { getMenu } from "./api.js";
import { renderMenu } from "./menu.js";
import { renderCart, cart, cartToSend } from "./cart.js";

const cartButtons = document.querySelectorAll(".cart-button");
const menuSection = document.querySelector(".menu");
const cartSection = document.querySelector(".cart");
const cartItems = document.querySelector(".cart-items");

renderMenu(await getMenu());

cartButtons.forEach((button) => {
    button.addEventListener("click", () => {
        cartItems.innerHTML = "";
        renderCart(cart, cartToSend);
        toggleCart();
    });
});

function toggleCart() {
    menuSection.classList.toggle("hidden");
    cartSection.classList.toggle("hidden");
}

function resetToStart() {
    cart.length = 0;
    cartToSend.length = 0;
    hideAll();
    menuSection.classList.toggle("hidden");
}

export { resetToStart };
