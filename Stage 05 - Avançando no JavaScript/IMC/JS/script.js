import { modal } from "./modal.js"
import { alertError } from "./alert-error.js"
import { IMC, notANumber } from "./utils.js"

const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

// oninput > serve para criar um função ao comecar a digitar no input selecionado
inputWeight.oninput = () => alertError.close()
inputHeight.oninput = () => alertError.close()

//onsubmit - propriedade para formularios - nesse caso está executando uma função quando é enviado o formulário

form.onsubmit = (event) => {
  event.preventDefault() // essa linha faz com que a pagina não atualize

  const weight = Number(inputWeight.value)
  const height = Number(inputHeight.value)

  const showAlertError = notANumber(weight) || notANumber(height)
  if (showAlertError) {
    alertError.open()
    return
  }
  alertError.close()
  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}`

  modal.message.innerHTML = message
  modal.open()
}
