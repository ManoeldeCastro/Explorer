let baralho = []
let opcao = ""
do {
  opcao = prompt(`
  Digite a opçao desejada
  1: Adicionar carta:

  2: Puxar carta:

  3: Sair:

  quantidade de cartas: ${baralho.length}
`)

  switch (opcao) {
    case "1":
      let novaCarta = prompt("Qual carta você quer adicionar?")
      baralho.push(novaCarta)
      break
    case "2":
      const puxando = baralho.pop()
      if (!puxando) {
        alert("Não há cartas")
      } else {
        alert(`você puxou essa carta: ${puxando}`)
      }
      break
    case "3":
      alert("Fim do programa")
      break
    default:
      alert("parâmetro invalido")
      break
  }
} while (opcao !== "3")
