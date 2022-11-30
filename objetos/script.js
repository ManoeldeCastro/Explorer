function area(largura, altura) {
  let resultado = largura * altura
  return resultado
}
function quadrado(lado) {
  return area(lado, lado)
}

const quadrado1 = quadrado(4)
console.log(quadrado1)

class Naves {
  constructor(name) {
    this.name = name
    this.velocity = 0
  }
  acelere(valocidade) {
    return (this.velocity += valocidade)
  }
}

let spaceCadets = new Naves("spaceCadets")

console.log(spaceCadets)
spaceCadets.acelere(30)
console.log(spaceCadets)
