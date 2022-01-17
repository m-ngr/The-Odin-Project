const DEFAULT_GRID_LENGTH = 16;
//=================================
makeGrid();

document.getElementById("grid-length").addEventListener("change", makeGrid);
document.getElementById("reset-btn").addEventListener("click", makeGrid);

document.querySelectorAll('input[name="color-mode"]').forEach((btn) => {
  btn.addEventListener("change", changeColorMode);
});
//=================================================================================================
function changeColorMode(e) {
  sketchCell.grayColors = false;
  sketchCell.randomColors = false;

  if (e.target.value === "random") {
    sketchCell.randomColors = true;
  } else if (e.target.value === "gray") {
    sketchCell.grayColors = true;
  }
}

function makeGrid() {
  if (makeGrid.grid !== undefined) makeGrid.grid.remove();

  let gridLen = getGridLength();
  makeGrid.grid = createGrid(gridLen);
  document.getElementById("render").appendChild(makeGrid.grid);

  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", sketchCell);
    cell.addEventListener("mousedown", sketchCell);
  });

  document.getElementById("length-label").textContent = `${gridLen}px`;
}

function getGridLength() {
  const gridLen = document.getElementById("grid-length");

  if (getGridLength.initialGridLength === undefined) {
    getGridLength.initialGridLength = Math.max(
      1,
      Math.min(128, gridLen.value || DEFAULT_GRID_LENGTH)
    );
  }

  if (gridLen.value < 1 || gridLen.value > 128) {
    gridLen.value = getGridLength.initialGridLength;
  }

  return gridLen.value;
}

function sketchCell(event) {
  if (event.buttons == 0 && event.type === "mouseover") {
    return;
  }
  if (sketchCell.randomColors === true) {
    event.target.style.backgroundColor = getRandomColor();
  } else if (sketchCell.grayColors === true) {
    event.target.style.backgroundColor = addGray(
      event.target.style.backgroundColor
    );
  } else {
    event.target.style.backgroundColor =
      document.getElementById("color-in").value;
  }
}

function createGrid(gridLength) {
  let gridDiv = document.createElement("div");
  gridDiv.classList.add("grid");
  for (let row = 1; row <= gridLength; ++row) {
    let rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    for (let col = 1; col <= gridLength; ++col) {
      let colDiv = document.createElement("div");
      colDiv.classList.add("cell");
      rowDiv.appendChild(colDiv);
    }
    gridDiv.appendChild(rowDiv);
  }
  return gridDiv;
}

function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return rgbToHex(r, g, b);
}

function rgbToHex(r, g, b) {
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);

  if (r.length == 1) r = "0" + r;
  if (g.length == 1) g = "0" + g;
  if (b.length == 1) b = "0" + b;

  return "#" + r + g + b;
}

function addGray(color) {
  if (color.startsWith("rgb") === true) {
    color = color.replace("rgb(", "").replace(")", "").split(",");
    let r = Math.max(parseInt(color[0], 10) - 25, 0);
    let g = Math.max(parseInt(color[1], 10) - 25, 0);
    let b = Math.max(parseInt(color[2], 10) - 25, 0);
    return rgbToHex(r, g, b);
  }
  return "#EEEEEE";
}
