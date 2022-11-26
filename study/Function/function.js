function triangulo(base, altura) {
  let resultado = (base * altura) / 2
  return resultado
}
function retangulo(base, altura) {
  let resultado = base * altura
  return resultado
}
function quadrado(lado) {
  let resultado = lado ** 2
  return resultado
}
function trapezio(baseMaior, baseMenor, altura) {
  let resultado = ((baseMaior + baseMenor) * altura) / 2
  return resultado
}
function circulo(raio) {
  let resultado = 3.14 * raio ** 2
  return resultado
}

do {
  let menu = prompt
} while (menu !== "3")
