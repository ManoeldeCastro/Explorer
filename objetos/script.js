function area(largura, altura) {
  let resultado = largura * altura
  return resultado
}
function quadrado(lado) {
  return area(lado, lado)
}

const quadrado1 = quadrado(4)
console.log(quadrado1)
