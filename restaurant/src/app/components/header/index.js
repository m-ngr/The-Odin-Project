import "./style.css";

export function header(logoPath = "", title = "") {
  const headerElement = document.createElement("header");
  const logo = document.createElement("img");
  const titleElement = document.createElement("h1");

  logo.src = logoPath;
  titleElement.innerText = title;

  headerElement.append(logo, titleElement);
  return headerElement;
}
