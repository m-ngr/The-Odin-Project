import { card } from "./card";

function importAll(r) {
  const files = {};
  r.keys().forEach((item) => {
    files[item.replace("./", "")] = r(item);
  });
  return files;
}

const cards = [];

export function loadCards() {
  if (cards.length === 0) {
    const imgs = importAll(
      require.context("../../images/", false, /\.(png|jpe?g)$/)
    );

    cards.push(
      card("Sasuke", imgs["sasuke.jpg"]),
      card("Naruto", imgs["naruto.png"]),
      card("Itachi", imgs["itachi.jpg"]),
      card("Obito", imgs["obito.jpg"]),
      card("Madara", imgs["madara.jpg"]),
      card("Kakashi", imgs["0.png"]),
      card("Sakura", imgs["0.png"]),
      card("Nagato", imgs["0.png"]),
      card("Minato", imgs["0.png"]),
      card("Hinata", imgs["0.png"]),
      card("Gaara", imgs["0.png"]),
      card("Jiraiya", imgs["0.png"]),
      card("Orochimaru", imgs["0.png"]),
      card("Shikamaru", imgs["0.png"]),
      card("Neji", imgs["0.png"]),
      card("Yamato", imgs["0.png"]),
      card("Asuma", imgs["0.png"]),
      card("Rock Lee", imgs["0.png"]),
      card("Kisame", imgs["0.png"]),
      card("Kabuto", imgs["0.png"]),
      card("Hashirama", imgs["0.png"]),
      card("Tobirama", imgs["0.png"]),
      card("Hiruzen", imgs["0.png"]),
      card("Danzo", imgs["0.png"])
    );
  }
  return [...cards];
}
