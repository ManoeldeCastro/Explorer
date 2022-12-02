class Nave {
  constructor(nome, passageiros) {
    this.nome = nome
    this.passageiros = passageiros
    this.engatada = false
    this.portas = false
  }
  engatar() {
    return (this.engatada = true), (this.portas = true)
  }
}

function creatNave(name, passageiros) {
  name = new Nave(name, passageiros)
  name.engatar()
  if (name.engatada) {
    name.engatada = "Nave engatada"
    name.portas = "Portas Abertas"
  }
  return name
}

function mostrarNave(printNaves) {
  let printsNaves = ""
  printNaves.forEach((element, index) => {
    printsNaves +=
      index + 1 + " " + element.nome + " (" + element.passageiros + ")."
  })
  return printsNaves
}
let naves = []
let menu
do {
  menu = prompt(`
    1 - Cadastre uma nova nave
    2 - Lista de naves
    3 - Sair
  `)
  switch (menu) {
    case "1":
      let name = prompt(`Digite o nome da name`)
      let passageiros = prompt(`Digite a quantidade de tripulantes da nave`)
      naves.push(creatNave(name, passageiros))
      alert(
        `Nave ${name} engatada a plataforma, com capacidade para ${passageiros} passageiros.`
      )
      break
    case "2":
      alert(mostrarNave(naves))
      break
    case "3":
      alert("Saindo...")
      break
    default:
      alert("Código invalido...")
      break
  }
} while (menu !== "3")
