//Hing order Functions
// função que recebe outra função como parâmetro.
function calcular(a, b, operação) {
  const resultado = operação(a, b)
  return resultado
}

function somar(x, y) {
  return x + y
}

console.log(calcular(7, 8, somar))
