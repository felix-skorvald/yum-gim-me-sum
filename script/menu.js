import { getMenu } from "./api.js";

const menuWontons = document.querySelector(".wontons");
const menuDips = document.querySelector(".dips");
const menuDrinks = document.querySelector(".drinks");

export function getWontonList(menu) {
    console.log(menu);
    const wontons = menu.filter((item) => item.type === "wonton");
    console.log(wontons);
}

function renderMenu(menu) {
    const wontons = menu.filter((item) => item.type === "wonton");
    const dips = menu.filter((item) => item.type === "dip");
    const drinks = menu.filter((item) => item.type === "drink");

    console.log(menu);
    console.log(wontons);

    //render wontons
    wontons.forEach((wonton) => {
        const wontonContainer = document.createElement("div");
        const wontonTilteContainer = document.createElement("div");
        const wontonTitle = document.createElement("h3");
        const wontonPrice = document.createElement("h3");
        const dotBox = document.createElement("div");
        const wontonIngredients = document.createElement("p");

        dotBox.classList.add("dot-box");
        wontonContainer.classList.add("dish-container");

        wontonTitle.innerText = wonton.name.toUpperCase();
        wontonPrice.innerText = wonton.price + " SEK";
        wontonIngredients.innerText = wonton.ingredients.join(", ");

        menuWontons.append(wontonContainer);
        wontonContainer.append(wontonTilteContainer);
        wontonTilteContainer.append(wontonTitle, dotBox, wontonPrice);
        wontonContainer.append(wontonIngredients);
    });
    //render dips
    const dipContainer = document.createElement("div");
    const dipTitleContainer = document.createElement("div");
    const dipTitle = document.createElement("h3");
    const dipPrice = document.createElement("h3");
    const dotBox2 = document.createElement("div");
    const dipFlavourContainer = document.createElement("div");

    dotBox2.classList.add("dot-box");
    dipContainer.classList.add("dish-container");
    dipFlavourContainer.classList.add("flavour-container");

    dipTitle.innerText = "DIPSÅS";
    dipPrice.innerText = dips[1].price + " SEK";

    dipContainer.append(dipTitleContainer, dipFlavourContainer);
    dipTitleContainer.append(dipTitle, dotBox2, dipPrice);
    menuDips.append(dipContainer);

    dips.forEach((dip) => {
        const dipName = document.createElement("p");
        dipName.innerText = dip.name;
        dipFlavourContainer.append(dipName);
    });

    //render drinks

    const drinkContainer = document.createElement("div");
    const drinkTitleContainer = document.createElement("div");
    const drinkTitle = document.createElement("h3");
    const drinkPrice = document.createElement("h3");
    const dotBox3 = document.createElement("div");
    const drinkFlavourContainer = document.createElement("div");

    dotBox3.classList.add("dot-box");
    drinkContainer.classList.add("dish-container");
    drinkFlavourContainer.classList.add("flavour-container");

    drinkTitle.innerText = "DRICKA";
    drinkPrice.innerText = drinks[1].price + " SEK";

    drinkContainer.append(drinkTitleContainer, drinkFlavourContainer);
    drinkTitleContainer.append(drinkTitle, dotBox3, drinkPrice);
    menuDrinks.append(drinkContainer);

    drinks.forEach((drink) => {
        const drinkName = document.createElement("p");
        drinkName.innerText = drink.name;
        drinkFlavourContainer.append(drinkName);
    });
}

renderMenu(await getMenu());