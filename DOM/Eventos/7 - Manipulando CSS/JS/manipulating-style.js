let element = document.querySelector("#style-text")
function setBlueBackground() {
  element.style.background = "blue"
}

function setTransparentBackground() {
  element.style.background = "transparent"
}

function setRedColor() {
  element.classList.add("red-color")
}

function removeRedColor() {
  element.classList.remove("red-color")
}
