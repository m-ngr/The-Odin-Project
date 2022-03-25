import "./style.css";
import defaultImage from "./image.png";

export function menuItem(name, price, description, imageSrc) {
  const item = document.createElement("article");
  const imageElement = document.createElement("img");

  const titleElement = document.createElement("h2");
  const nameElement = document.createElement("span");
  const priceElement = document.createElement("span");

  const descriptionElement = document.createElement("p");

  item.className = "menu-item";
  priceElement.className = "menu-item-price";

  imageElement.src = imageSrc || defaultImage;
  nameElement.innerText = name;
  priceElement.innerText = `$${price}`;
  descriptionElement.innerText = description;

  titleElement.append(nameElement, priceElement);
  item.append(imageElement, titleElement, descriptionElement);

  return item;
}
