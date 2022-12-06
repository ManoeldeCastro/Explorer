const numberRandom = Math.round(Math.random() * 10)
var tentar = document.querySelector("input#button")
var tentativas = []
tentar.addEventListener("click", () => {
  var number = document.querySelector("input#number")
  num = Number(number.value)
  if (num > 10) {
    alert("O numero não está dentro dos parâmetros")
  } else if (tentativas.includes(num)) {
    alert("Você já tentou esse numero!")
  } else if (num == numberRandom) {
    var css = document.getElementById("css1")
    css.href = "style1.css"
    var titulo = document.getElementsByTagName("h1")[0]
    titulo.innerHTML = `Acertou em ${tentativas.length + 1} tentativas`
    tentar.value = "Jogar novamente"
    tentar.addEventListener("click", () => {
      document.location.reload(true)
    })
  } else {
    tentativas.push(num)
    console.log(number)
  }
  number.focus()
  number.value = ""
})
