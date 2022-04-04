import "./style.css";

export function footer() {
  const footerElement = document.createElement("footer");
  const iconList = document.createElement("nav");
  const text = document.createElement("p");
  text.innerText = "Coded by Mahmoud Elnagar";

  iconList.className = "social-links";

  iconList.append(
    icon(
      "github",
      "https://github.com/m-ngr",
      `<i class="fa-brands fa-github"></i>`
    ),
    icon(
      "linkedin",
      "https://www.linkedin.com/in/m-ngr/",
      `<i class="fa-brands fa-linkedin"></i>`
    ),
    icon(
      "twitter",
      "https://twitter.com/dev_ngr",
      `<i class="fa-brands fa-twitter"></i>`
    )
  );

  footerElement.append(text, iconList);

  return footerElement;
}

function icon(title, link, iconHTML) {
  const iconElement = document.createElement("a");
  iconElement.className = "social-icon";
  iconElement.title = title;
  iconElement.href = link;
  iconElement.target = "_blank";
  iconElement.innerHTML = iconHTML;

  return iconElement;
}
