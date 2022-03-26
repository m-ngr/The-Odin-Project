import * as components from "./components/index";
import * as pages from "./pages/index";
import logo from "../images/favicon.png";

export default function run() {
  const body = document.body;
  const tabs = components.tabs();

  body.append(
    components.header(logo, "Cuisine Restaurant"),
    tabs.element(),
    components.footer()
  );

  tabs.add("Home", "home", pages.home);
  tabs.add("Menu", "menu", pages.menu);
  tabs.add("Contact", "contact", pages.contact);

  tabs.open(window.location.hash.substring(1));
}
