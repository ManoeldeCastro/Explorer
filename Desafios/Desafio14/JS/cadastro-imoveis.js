class Imovel {
  constructor(tipo, area, isAlugado) {
    this.tipo = tipo
    this.area = area
    this.isAlugado = isAlugado
  }
}
function salvar() {
  event.preventDefault()
  let ul = document.querySelector("ul")
  let tipo = document.querySelector("#tipo").value
  let area = document.querySelector("#area").value
  let isAlugado = document.querySelector("input[name=alugado]:checked").value

  let span = criarSpan(isAlugado)
  let buttonRemove = document.createElement("button")
  let li = document.createElement("li")
  li.appendChild(span)
  buttonRemove.setAttribute("onclick", "remove(this)")
  buttonRemove.setAttribute("type", "button")
  buttonRemove.innerText = "Remover"
  let novoImovel = new Imovel(tipo, area, isAlugado)
  li.innerHTML += ` - ${novoImovel.tipo} com área de ${novoImovel.area}m² `
  ul.appendChild(li)
  li.appendChild(buttonRemove)
  document.querySelector("input[name='area']").value = ""
}

function remove(button) {
  let imovel = button.parentNode
  document.querySelector("ul").removeChild(imovel)
}
function criarSpan(isAlugado) {
  if (isAlugado == "Sim") {
    let span = document.createElement("span")
    span.style.color = "white"
    span.style.backgroundColor = "Red"
    span.innerText = "ALUGADO"
    return span
  } else {
    let span = document.createElement("span")
    span.innerText = "Disponivel para locação"
    span.style.color = "black"
    span.style.backgroundColor = "transparent"
    return span
  }
}
