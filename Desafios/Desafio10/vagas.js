const vagas = []

function listarVagas() {
  const vagasEmTexto = vagas.reduce((Final, vaga, indice) => {
    Final += indice + ". "
    Final += vaga.nome
    Final += " (" + vaga.candidatos.length + " candidatos)\n"
    return Final
  }, "")
  alert(vagasEmTexto)
}
function novaVaga() {
  let nomeVaga = prompt("Digite o nome da vaga: ")
  let descricao = prompt("Digite uma descrição para a vaga: ")
  let dataLimite = prompt("Digite a data limite (dd/mm/aaaa) para a vaga: ")
  const confirme = confirm(
    "Deseja criar uma vaga com essas informações:\n" +
      "Nome: " +
      nomeVaga +
      "\nDescrição:" +
      descricao +
      "\nData limite: " +
      dataLimite
  )
  if (confirme) {
    const novaVaga = {
      nome: nomeVaga,
      descricao: descricao,
      dataLimite: dataLimite,
      candidatos: [],
    }
    vagas.push(novaVaga)
    alert("Vaga criada.")
  }
}

function exibirVaga() {
  const indice = Number(prompt("informe o índice da vaga que deseja exibir: "))
  if (indice >= vagas.length || indice < 0) {
    alert("Indice invalido")
    return
  }
  const vaga = vagas[indice - 1]

  const candidatosEmTexto = vaga.candidatos.reduce((final, candidato) => {
    return final + "\n - " + candidato
  }, "")
  alert(
    "vaga n°" +
      indice +
      "\nNome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\n Quantidade de candidatos: " +
      vaga.candidatos.length +
      "\nCandidatos inscritos: " +
      candidatosEmTexto
  )
}

function inscreverCandidato() {
  const candidato = prompt("Informe o nome do candidato:")
  const indice = prompt(
    "Informe o indice da vaga para qual o deseja se increver:"
  )
  const vaga = vagas[indice]
  const confirme = prompt(
    "Deseja se Inscrever " +
      candidato +
      " na vaga: " +
      indice +
      " ?\n" +
      "Nome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData limite: " +
      vaga.dataLimite
  )

  if (confirme) {
    vaga.candidatos.push(candidato)
  }
}

function excluirVaga() {
  const indice = prompt("Informe o indice da vaga")
  const vaga = vagas[indice]

  const confirme = confirm(
    "Deseja mesmo excluir " +
      indice +
      "?\n" +
      "Nome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData limite: " +
      vaga.dataLimite
  )

  if (confirme) {
    vagas.splice(indice, 1)
  }
  alert("Vaga removida!")
}

let menu = ""
do {
  menu = prompt(`
  Bem vindo ao Cadastro da vagas de emprego!

1 = Listar Vagas Disponíveis.
2 = Criar uma Nova vaga.
3 = Visualizar uma vaga
4 = Inscrever um candidato em uma vaga.
5 = Excluir uma vaga.
6 = Sair.

`)
  switch (menu) {
    case "1":
      listarVagas()
      break
    case "2":
      novaVaga()
      break
    case "3":
      exibirVaga()
      break
    case "4":
      inscreverCandidato()
      break
    case "5":
      excluirVaga()
      break
    case "6":
      alert("Saindo...")
      break
    default:
      alert("Opção invalida, digite um numero novamente...")
      break
  }
} while (menu !== "6")
