import menuArr from "../menu.json";
import menuItem from "../templates/menu-item.hbs";

const menuRef = document.querySelector(".js-menu");
const menuMarkup = menuItem(menuArr);

menuRef.insertAdjacentHTML("beforeend", menuMarkup);
