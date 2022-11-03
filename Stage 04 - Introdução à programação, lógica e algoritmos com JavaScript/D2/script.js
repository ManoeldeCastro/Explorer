var itens = []
confirme()
function confirme() {
  var confirmar = confirm("Ainda tem compras?")
  if (confirmar == false) {
    alert(itens.join(", "))
  } else {
    var nome = prompt("Qual o item?")
    itens.push(nome)
    confirme()
  }
}
