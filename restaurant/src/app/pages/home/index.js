import "./style.css";
import { infoItem } from "../../components/info_item/index";

export const home = document.createElement("article");
const title = document.createElement("h2");
const sideTitle = document.createElement("p");
const info = document.createElement("div");
const address = infoItem(
  `<i class="fa-solid fa-location-dot"></i>`,
  "9871 Aero Dr, San Diego, CA 92123, United States"
);
const hours = infoItem(
  `<i class="fa-solid fa-clock"></i>`,
  "<span>Mon-Thurs:</span> 8am - 8pm <br><span>Fri-Sun:</span> 8am - 11pm"
);

home.className = "page home-page";
info.className = "home-info";

title.innerText = "Come on down for some delicious cuisine!";
sideTitle.innerText = "Tasty and affordable!";

info.append(address, hours);
home.append(title, sideTitle, info);
