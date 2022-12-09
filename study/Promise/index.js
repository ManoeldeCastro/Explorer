const spaceship = {
  name: "Fenix",
  bateriaAtual: 50,
  consumoPorKmS: 0.00008,
}

const bateriaAtualizada = function (bateriaConsumida) {
  return new Promise(function (resolve, reject) {
    spaceship.bateriaAtual -= bateriaConsumida
    if (spaceship.bateriaAtual > 0) {
      resolve(spaceship.bateriaAtual)
    } else {
      reject(
        "Bateria esgotada! " +
          spaceship.name +
          " será desativada em alguns segundos."
      )
    }
  })
}

const calcularBateriaConsumida = function (velocidade, segundos) {
  return new Promise(function (resolve, reject) {
    if (spaceship.consumoPorKmS <= 0 || velocidade <= 0) {
      reject("Nave está parada!")
    } else {
      let bateriaConsumida = spaceship.consumoPorKmS * velocidade * segundos
      resolve(bateriaConsumida)
    }
  })
}
calcularBateriaConsumida(6000, 600)
  .then((bateriaConsumida) => {
    return bateriaAtualizada(bateriaConsumida)
  })
  .then((bateria) => {
    console.log("nave está com bateria de " + bateria)
  })
  .catch((erro) => {
    console.log(erro)
  })
console.log(calcularBateriaConsumida(75000, 800))
