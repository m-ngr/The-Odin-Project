import { card } from "./card";

function importAll(r) {
  const files = {};
  r.keys().forEach((item) => {
    files[item.replace("./", "")] = r(item);
  });
  return files;
}

const imgs = importAll(require.context("../../images/", false, /\.(png)$/));

const cards = [
  card("Sasuke", imgs["sasuke.png"]),
  card("Naruto", imgs["naruto.png"]),
  card("Itachi", imgs["itachi.png"]),
  card("Obito", imgs["obito.png"]),
  card("Madara", imgs["madara.png"]),
  card("Kakashi", imgs["kakashi.png"]),
  card("Sakura", imgs["sakura.png"]),
  card("Pain", imgs["pain.png"]),
  card("Minato", imgs["minato.png"]),
  card("Hinata", imgs["hinata.png"]),
  card("Gaara", imgs["gaara.png"]),
  card("Jiraiya", imgs["jiraiya.png"]),
  card("Orochimaru", imgs["orochimaru.png"]),
  card("Shikamaru", imgs["shikamaru.png"]),
  card("Neji", imgs["neji.png"]),
  card("Yamato", imgs["yamato.png"]),
  card("Asuma", imgs["asuma.png"]),
  card("Rock Lee", imgs["rock_lee.png"]),
  card("Kisame", imgs["kisame.png"]),
  card("Kabuto", imgs["kabuto.png"]),
  card("Hashirama", imgs["hashirama.png"]),
  card("Tobirama", imgs["tobirama.png"]),
  card("Hiruzen", imgs["hiruzen.png"]),
  card("Danzo", imgs["danzo.png"]),
];

export const loadCards = () => [...cards];
