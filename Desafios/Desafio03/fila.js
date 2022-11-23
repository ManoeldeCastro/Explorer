let fila = []
let opcao = ""
do {
  let pacientes = ""
  for (i = 0; i < fila.length; i++) {
    pacientes += i + 1 + "° - " + fila[i] + "\n"
  }
  opcao = prompt(`
  Digite a opçao desejada
  1: Adicionar paciente

  2: Finalizar consulta

  3: Sair:

  Lista de pacientes: ${pacientes}
`)

  switch (opcao) {
    case "1":
      let novoPaciente = prompt("Nome do paciente:")
      fila.push(novoPaciente)
      break
    case "2":
      const consultado = fila.shift()
      if (!consultado) {
        alert("Não a pacientes")
      } else {
        alert(`${consultado} foi concluido a consulta!`)
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
