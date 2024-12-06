import { hideAll } from "./hide-all.js";
import { getMenu } from "./api.js";
import { getWontonList } from "./menu.js";

const cartButtons = document.querySelectorAll(".cart-button");
const menuSection = document.querySelector(".menu");
const cartSection = document.querySelector(".cart");
// getWontonList(await getMenu());

cartButtons.forEach((button) => {
    button.addEventListener("click", toggleCart);
});

function toggleCart() {
    menuSection.classList.toggle("hidden");
    cartSection.classList.toggle("hidden");
}
