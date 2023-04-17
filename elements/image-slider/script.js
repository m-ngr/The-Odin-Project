document.querySelectorAll(".slider").forEach((slider) => makeSlider(slider));

function makeSlider(slider) {
  const delay = slider.getAttribute("data-delay") || 5000;
  const frame = slider.querySelector("figure");
  const imgs = frame.querySelectorAll("img");
  const dots = [];
  slider.showID = 0;

  const showImageByID = showImage.bind(slider, imgs, dots);

  const showNextImage = () => {
    showImageByID(slider.showID + 1);
  };

  const showPreviousImage = () => {
    showImageByID(slider.showID - 1);
  };

  slider.append(
    nextButton(showNextImage),
    backButton(showPreviousImage),
    dotsElement(imgs.length, dots, showImageByID)
  );

  showImageByID(slider.showID);

  autoSlide(slider, showNextImage, delay);
}

function autoSlide(slider, showNextImage, delay) {
  let nextID = setInterval(showNextImage, delay);

  slider.addEventListener("mouseover", () => clearInterval(nextID));

  slider.addEventListener("mouseleave", () => {
    nextID = setInterval(showNextImage, delay);
  });
}

function nextButton(clickEvent) {
  const button = document.createElement("button");
  button.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
  button.className = "right";

  button.addEventListener("click", clickEvent);

  return button;
}

function backButton(clickEvent) {
  const button = document.createElement("button");
  button.innerHTML = ' <i class="fa-solid fa-chevron-left"></i>';

  button.addEventListener("click", clickEvent);

  return button;
}

function showImage(imgs, dots, id) {
  imgs[this.showID].classList.remove("show");
  dots[this.showID].classList.remove("show");

  if (id >= imgs.length) {
    this.showID = 0;
  } else if (id < 0) {
    this.showID = imgs.length - 1;
  } else {
    this.showID = id;
  }

  imgs[this.showID].classList.add("show");
  dots[this.showID].classList.add("show");
}

function dotsElement(length, dots, clickEvent) {
  const element = document.createElement("div");
  element.className = "dots";

  for (let id = 0; id < length; ++id) {
    const dot = document.createElement("div");
    dot.className = "dot";
    dot.addEventListener("click", clickEvent.bind(dot, id));

    dots.push(dot);
    element.append(dot);
  }

  return element;
}
