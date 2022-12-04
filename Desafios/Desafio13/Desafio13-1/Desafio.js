function salvar() {
  const area = document.querySelector("#area").value
  const numero = document.querySelector("#numero").value
  const bairro = document.querySelector("#bairro").value
  const cidade = document.querySelector("#cidade").value
  const ul = document.querySelector("ul")
  const li = document.createElement("li")
  li.innerText = `${area}m², número: ${numero}(${bairro} - ${cidade}) `
  const buttonRemove = document.createElement("button")

  buttonRemove.setAttribute("type", "button")
  buttonRemove.innerText = "Remover"
  buttonRemove.setAttribute("onclick", "remover(this)")
  ul.appendChild(li)
  li.appendChild(buttonRemove)
}

function remover(button) {
  let removerCasa = button.parentNode
  document.querySelector("ul").removeChild(removerCasa)
}
