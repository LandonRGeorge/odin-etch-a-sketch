"use strict";

const sketchContainer = document.querySelector("#sketch-container");
const sketchBtnClear = document.querySelector("#sketch-btn-clear");

const fillSketchContainer = function (gridSize = 16) {
  for (let i = 0; i < gridSize ** 2; i++) {
    sketchContainer.setAttribute(
      "style",
      `grid-template-columns: repeat(${gridSize}, 1fr);`
    );
    const div = document.createElement("div");
    div.classList.add("sketch-item");
    div.classList.add("unselected");
    div.addEventListener("mouseover", function (e) {
      this.classList.remove("unselected");
      this.classList.add("selected");
    });
    sketchContainer.appendChild(div);
  }
};

sketchBtnClear.addEventListener("click", () => {
  sketchContainer.innerHTML = "";
  let gridSize;
  while (true) {
    gridSize = +prompt("Grid size?");
    if (gridSize > 100) alert("Number cannot be greater than 100");
    else if (gridSize < 1) alert("Number must be greater than 0");
    else break;
  }
  fillSketchContainer(gridSize);
});

fillSketchContainer();
