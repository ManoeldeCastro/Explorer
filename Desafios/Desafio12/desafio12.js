class Spaceship {
  static get desaceleracao() {
    return 0.17
  }
  constructor(nome, totalTripulantes) {
    this.nome = nome
    this.totalTripulantes = totalTripulantes
    this.velocidade = 0
  }
  acelerar(aceleracao) {
    this.velocidade += aceleracao * (1 - Spaceship.desaceleracao)
  }
}
class Batalha extends Spaceship {
  constructor(nome, totalTripulantes, totalArmas) {
    super(nome, totalTripulantes)
    this.totalArmas = totalArmas
  }
}
class Transport extends Spaceship {
  constructor(nome, totalTripulantes, totalLugares) {
    super(nome, totalTripulantes)
    this.totalLugares = totalLugares
  }
}
let nave
function iniciar() {
  let nome = prompt("Qual nome da nave?")
  let nTripulante = prompt("Qual é o total de Tripulantes da nave")
  let tipoNave = prompt(`
  Digite o tipo de nava:
  1 - Nave de Batalha
  2 - Nave de transporte
  `)
  if (!tipoNave == "1" || !tipoNave == "2") {
    alert("Codigo invalido..")
  } else {
    if ((tipoNave = 1)) {
      let armas = prompt("Quantidade de armas?")
      nave = new Batalha(nome, nTripulante, armas)
    } else {
      let lugares = prompt("quantidade de lugares")
      nave = new Transport(nome, nTripulante, lugares)
    }
  }
  do {
    menu = prompt(`
  Digite o que deseja fazer!
  1- acelerar nave
  2- Trocar de nave 
  3- Sair
  `)
    switch (menu) {
      case "1":
        nave.acelerar(Number(prompt("quanto deseja acerelar?")))
        alert(nave.velocidade)
        break
      case "2":
        iniciar()
        break
      case "3":
        alert("saindo...")
        break
      default:
        alert("Codigo invalido...")
        break
    }
  } while (menu !== "3")
}
iniciar()
