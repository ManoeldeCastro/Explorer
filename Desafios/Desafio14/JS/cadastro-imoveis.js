class Imovel {
  constructor(tipo, area, isAlugado) {
    this.tipo = tipo
    this.area = area
    this.isAlugado = isAlugado
  }
}
function salvar() {
  let ul = document.querySelector("ul")
  let tipo = document.querySelector("#tipo").value
  let area = document.querySelector("#area").value
  let isAlugado = document.querySelector("input[name=alugado]")
  if (isAlugado == "Sim") {
    isAlugado.innerText = "Está alugado"
    let span = document.createElement("span")
    span.appendChild(isAlugado)
    span.style.background = "red"
    span.style.color = "white"
  } else {
    isAlugado = "Disponível para locação."
  }
  let buttonRemove = document.createElement("button")
  let li = document.createElement("li")
  buttonRemove.setAttribute("onclick", "remove(this)")
  buttonRemove.setAttribute("type", "button")
  buttonRemove.innerText = "Remover"
  let novoImovel = new Imovel(tipo, area, isAlugado)
  li.innerHTML = `${novoImovel.isAlugado} ${novoImovel.tipo} com área de ${novoImovel.area}m² `
  ul.appendChild(li)
  li.appendChild(buttonRemove)
}

function remove(button) {
  console.log(button)

  let imovel = button.parentNode
  document.querySelector("ul").removeChild(imovel)
}
