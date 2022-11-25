let imoveis = []
let menu = ""
let i = 0
do {
  menu = prompt(`
imoveis cadastrados = ${imoveis.length}
1 = Adicionar imóvel
2 = Mostrar imóveis 
3 = Sair
`)
  switch (menu) {
    case "1":
      let imovel = {}
      imovel.propietario = prompt("digite o nome do propietario")
      imovel.quartos = prompt("digite quantos quartos")
      imovel.banheiros = prompt("digite quantos banheiros")
      let garagem = confirm("tem garagem?")
      if (!garagem) {
        imovel.garagem = "Não tem garagem"
      }
      {
        imovel.garagem = "Tem garagem"
      }
      imoveis[i] = imovel

      console.log(imoveis)
      break
    case "2":
      for (element in imoveis) {
        alert(`
  Imóvel de ${imoveis[element].propietario}       
tem ${imoveis[element].quartos} Quartos,
tem ${imoveis[element].banheiros} Banheiros,
e ${imoveis[element].garagem}.
`)
      }
      break
    default:
      menu = "3"
      break
  }
  i++
} while (menu !== "3")
