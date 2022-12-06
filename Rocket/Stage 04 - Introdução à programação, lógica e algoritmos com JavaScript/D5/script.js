let pacients = [
  {
    name: "Manoel",
    age: 24,
    peso: 86,
    altura: 1.81,
  },
  {
    name: "Michele",
    age: 32,
    peso: 62,
    altura: 1.6,
  },

  {
    name: "Jack",
    age: 33,
    peso: 96,
    altura: 1.74,
  },
]
function calc(peso, altura) {
  imc = (peso / (altura * altura)).toFixed(2)
  return imc
}
for (paciente of pacients) {
  console.log(
    `${paciente.name} tem o IMC de ${calc(paciente.peso, paciente.altura)}`
  )
}
