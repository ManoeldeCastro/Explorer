function doChange() {
  alert(event.target.value)
}
let sampleInput = document.querySelector("input[name='sample-input']")
let changeEvent = new Event("change")
changeEvent.change = doChange()

sampleInput.addEventListener("change", changeEvent.change())
