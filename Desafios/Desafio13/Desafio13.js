const adicionar = document.getElementById("addHouse")
let form = document.querySelector("form")
let div = document.createElement("div")
let divTwo = document.createElement("div")
document.body.appendChild(div)
document.body.appendChild(divTwo)
let valores = []
let casa = []
let i = 0
let novoP
class Casa {
  constructor(numero, bairro, cidade, area) {
    this.numero = numero
    this.bairro = bairro
    this.cidade = cidade
    this.area = area
  }
}
divTwo.innerHTML = `Casas castradas: </br>`
adicionar.addEventListener("click", () => {
  novoP = document.createElement("p")
  novoP.innerHTML = `
    <label>Número da casa: </label>
    <input type="text" id="numero"></input>
    </br>   
    <label>Bairro: </label>
    <input type="text" id="bairro"></input>
    </br>   
    <label>Cidade:  </label>
    <input type="text" id="cidade"></input>
    </br>   
    <label>Área da casa:</label>
    <input type="text" id="area"></input></br>             
  `
  div.innerHTML = `<button id="salvar" onclick="salvar()">Adicionar</button> `
  form.appendChild(novoP)
})
function salvar() {
  let inputs = document.querySelectorAll("input")
  inputs.forEach((elemt, i) => {
    casa.push(elemt.value)
  })
  let novaCasa = new Casa(casa[0], casa[1], casa[2], casa[3])
  valores.push(novaCasa)
  divTwo.innerHTML += `<p id="casa${i + 1}">Numero: ${
    valores[i].numero
  } - Bairro: ${valores[i].bairro} - Cidade: ${valores[i].cidade} - m²: ${
    valores[i].area
  }</br><button onclick="excluir(this)">Remove</p>`
  novoP.innerHTML = ""
  div.innerHTML = ""
  i++
}

function excluir(button) {
  let casaRemove = button.parentNode
  divTwo.removeChild(casaRemove)
}
