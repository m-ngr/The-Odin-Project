import "./style.css";
import { menuItem } from "../../components/menu_item/index";

import image1 from "./images/1.png";
import image2 from "./images/2.png";
import image3 from "./images/3.png";
import image4 from "./images/4.png";
import image5 from "./images/5.png";
import image6 from "./images/6.png";
import image7 from "./images/7.png";
import image8 from "./images/8.png";

export const menu = document.createElement("article");
const container = document.createElement("section");
menu.className = "page menu-page";
container.className = "page-container menu-container";

menu.append(container);
container.append(
  menuItem(
    "Hamburger",
    2.49,
    "Buns, patty, tomato, onions, lettuce, and our secret family recipe.",
    image1
  ),
  menuItem(
    "Cheeseburger",
    2.99,
    "Similar to our hamburger, but with cheese.",
    image2
  ),
  menuItem(
    "Double Cheeseburger",
    3.49,
    "Similar to our cheeseburger, but with an extra patty.",
    image3
  ),
  menuItem("Steak", 11.99, "A juicy steak made just how you like it.", image4),
  menuItem(
    "BBQ Ribs",
    8.99,
    "Barbecue ribs with your choice of a add-ons.",
    image5
  ),
  menuItem(
    "Grilled Cheese Sandwich",
    4.99,
    "A toasted and grilled cheese sandwich, dipped in our special sauce.",
    image6
  ),
  menuItem(
    "Caesar Salad",
    7.99,
    "Your typical caesar salad that comes with your choice of dressings.",
    image7
  ),
  menuItem(
    "French Fries",
    1.99,
    "Sometimes you don't want to eat your burger alone, why not add some french fries?",
    image8
  )
);
