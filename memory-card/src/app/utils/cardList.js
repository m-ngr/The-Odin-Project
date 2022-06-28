// import img0 from "../../images/0.png";
import itachiImg from "../../images/itachi.jpg";
import madaraImg from "../../images/madara.jpg";
import narutoImg from "../../images/naruto.png";
import sasukeImg from "../../images/sasuke.jpg";
import obitoImg from "../../images/obito.jpg";
import { card } from "./card";

export function loadCards() {
  return [
    card("Sasuke", sasukeImg),
    card("Naruto", narutoImg),
    card("Itachi", itachiImg),
    card("Obito", obitoImg),
    card("Madara", madaraImg),
  ];
}
