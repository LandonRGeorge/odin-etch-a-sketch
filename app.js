"use strict";

const sketchContainer = document.querySelector("#sketch-container");
const sketchBtnClear = document.querySelector("#sketch-btn-clear");

for (let i = 0; i < 16 * 16; i++) {
  const div = document.createElement("div");
  div.classList.add("sketch-item");
  div.classList.add("unselected");
  div.addEventListener("mouseover", function (e) {
    console.log(this);
    this.classList.remove("unselected");
    this.classList.add("selected");
  });
  sketchContainer.appendChild(div);
}

sketchBtnClear.addEventListener("click", () => {
  sketchContainer.innerHTML = "";
});
