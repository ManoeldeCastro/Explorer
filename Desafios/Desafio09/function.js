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

const faces = {
  trianguloConta: () => {
    let baseConta = Number(prompt("digite quanto mede a base do poligono"))
    let altura = Number(prompt("digite mede a altura do poligono"))
    return triangulo(baseConta, altura)
  },
  retanguloConta: () => {
    let base = Number(prompt("digite quanto mede a base do poligono"))
    let altura = Number(prompt("digite mede a altura do poligono"))
    return retangulo(base, altura)
  },
  quadradoConta: () => {
    let lado = Number(prompt("Digite quando mede o lado do poligono"))
    return quadrado(lado)
  },
  trapezioConta: () => {
    let baseMaior = Number(prompt("Digite quanto mede a baseMaior do poligono"))
    let baseMenor = Number(prompt("Digite quanto mede a baseMenor do poligono"))
    let altura = Number(prompt("digite mede a altura do poligono"))
    return trapezio(baseMaior, baseMenor, altura)
  },
  circuloConta: () => {
    let raio = Number(prompt("Digite quanto mede o raio do poligono"))
    return circulo(raio)
  },
}
let menu = ""
do {
  menu = prompt(`
  Bem vindo a calculadora geométrica!

1 = Somar área do triangulo.
2 = Somar área do retângulo.
3 = Somar área do quadrado.
4 = Somar área do trapézio.
5 = Somar área do círculo.
6 = Sair.

`)
  switch (menu) {
    case "1":
      alert(faces.trianguloConta())
      break
    case "2":
      alert(faces.retanguloConta())
      break
    case "3":
      alert(faces.quadradoConta())
      break
    case "4":
      alert(faces.trapezioConta())
      break
    case "5":
      alert(faces.circuloConta())
      break
    case "6":
      alert("Fim do programa")
      break
    default:
      alert("Opção invalida")
  }
} while (menu !== "6")
