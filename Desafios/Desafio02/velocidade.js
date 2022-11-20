const car1 = prompt("Nome do veiculo:")
const velCar1 = Number(prompt(`Velocidade do ${car1}:`))
const car2 = prompt("Nome do veiculo:")
const velCar2 = Number(prompt(`Velocidade do ${car2}:`))
function verificar() {
  if (velCar1 < velCar2) {
    return alert(`As velocidades dos carros são de:  
        Carro: ${car1} é ${velCar1}Km/h,
        Carro 2: ${car2} ${velCar2}Km/h,
        ${car2} está ${velCar2 - velCar1}Km/h mais rápido
        `)
  } else if (velCar2 < velCar1) {
    return alert(`As velocidades dos carros são de:  
        Carro 1 ${velCar1}Km/h,
        Carro 2 ${velCar2}Km/h,
        ${car1} está ${velCar1 - velCar2}Km/h mais rápido
        `)
  } else {
    return alert(`As velocidades dos carros são de:  
        ${car1}: ${velCar1}Km/h.
        ${car2}: ${velCar2}Km/h
        estão na mesma velocidade!`)
  }
}
verificar()
