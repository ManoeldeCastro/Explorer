//variables
const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

const modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal .title span"),
  btnClose: document.querySelector(".modal .close"),

  open() {
    modal.wrapper.classList.add("open")
  },
  close() {
    modal.wrapper.classList.remove("open")
  },
}

//onsubmit - propriedade para formularios - nesse caso está executando uma função quando é enviado o formulário

form.onsubmit = (event) => {
  event.preventDefault() // essa linha faz com que a pagina não atualize

  const weight = Number(inputWeight.value)
  const height = Number(inputHeight.value)

  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}`

  modal.message.innerHTML = message
  modal.open()
}
modal.btnClose.onclick = () => modal.close()

function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2)
}
