let lista = []
var start
while (start != 3) {
  var start = Number(
    prompt(`Olá Usuario! Digitie a opção deseja:

  1. Cadastrar um item na lista.
  2. Mostrar itens cadastrados.
  3. Sair do programa.
  `)
  )
  switch (start) {
    case 1:
      var item = prompt("Digite o item desejado:")
      lista.push(item)
      break
    case 2:
      if (lista.length < 1) {
        alert("Nenhum item cadastrado")
        break
      } else {
        alert(lista.join(", "))
        break
      }
    default:
      alert("Fim do programa")
      break
  }
}
