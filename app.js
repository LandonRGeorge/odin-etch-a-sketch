"use strict";

const sketchContainer = document.querySelector("#sketch-container");
const sketchBtnClear = document.querySelector("#sketch-btn-clear");
const gridSizeLabel = document.querySelector('#grid-size-label')
const gridSizeSlider = document.querySelector('#grid-size-slider')

const changeSizeSlider = (value) => {
  gridSizeSlider.value = +value
}

const changeSliderLabel = (value) => {
  gridSizeLabel.textContent = `${value} x ${value} grid`
}

const resetSketchContainer = () => {
  for (let div of sketchContainer.querySelectorAll('.sketch-item')) {
    div.classList.remove("selected");
  }
}

const removeSketchContainer = () => {
  for (let div of sketchContainer.querySelectorAll('.sketch-item')) {
    div.remove()
  }
}

const fillSketchContainer = function (gridSize = 16) {
  for (let i = 0; i < gridSize ** 2; i++) {
    sketchContainer.setAttribute("style", `grid-template-columns: repeat(${gridSize}, 1fr);`)
    const div = document.createElement("div")
    div.classList.add("sketch-item")
    div.addEventListener("mouseover", function (e) {
      this.classList.add("selected")
    });
    sketchContainer.appendChild(div)
  }
}

window.addEventListener('DOMContentLoaded', () => {
  let value = 50
  changeSliderLabel(value)
  changeSizeSlider(value)
  fillSketchContainer(value)
})

gridSizeSlider.addEventListener('input', (e) => {
  let value = e.target.value
  changeSliderLabel(value)
  removeSketchContainer()
  fillSketchContainer(value)
})


sketchBtnClear.addEventListener("click", () => {
  resetSketchContainer()
});


// fillSketchContainer();
