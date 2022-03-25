import "./style.css";
import { infoItem } from "../../components/info_item/index";

export const contact = document.createElement("article");
const info = document.createElement("div");
const map = document.createElement("div");

contact.className = "page contact-page";
info.className = "info-list";
map.className = "g-map";

const address = infoItem(
  `<i class="fa-solid fa-location-dot"></i>`,
  "1024 Oakwood Ave San Diego, CA 22434"
);
const hours = infoItem(
  `<i class="fa-solid fa-clock"></i>`,
  "<span>Mon-Thurs:</span> 8am-8pm <br><span>Fri-Sun:</span> 8am-11pm"
);

const phone = infoItem(`<i class="fa-solid fa-phone"></i>`, "(222)-888 5555");

map.innerHTML = `<div class="gmap_canvas"><iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=McDonald's%209871%20Aero%20Dr,%20San%20Diego,%20CA%2092123&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><br></div>`;

info.append(address, hours, phone, map);
contact.append(info);
