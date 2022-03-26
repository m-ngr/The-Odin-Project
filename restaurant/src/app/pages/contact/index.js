import "./style.css";
import { infoItem } from "../../components/info_item/index";

export const contact = document.createElement("article");
const container = document.createElement("section");
const map = document.createElement("div");

contact.className = "page contact-page";
container.className = "page-container";
map.className = "g-map";

const address = infoItem(
  `<i class="fa-solid fa-location-dot"></i>`,
  "9871 Aero Dr, San Diego, CA 92123, United States"
);
const hours = infoItem(
  `<i class="fa-solid fa-clock"></i>`,
  "<span>Mon-Thurs:</span> 8am - 8pm <br><span>Fri-Sun:</span> 8am - 11pm"
);

const phone = infoItem(`<i class="fa-solid fa-phone"></i>`, "(222)-888 5555");

const mail = infoItem(
  `<i class="fa-solid fa-envelope"></i>`,
  "cuisine@restaurant.com"
);

map.innerHTML = `<div class="gmap_canvas"><iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=McDonald's%209871%20Aero%20Dr,%20San%20Diego,%20CA%2092123&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><br></div>`;

container.append(hours, phone, mail, address, map);
contact.append(container);
