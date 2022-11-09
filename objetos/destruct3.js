// // const btn = document.querySelector("#btnb")
// // const btnstyle = getComputedStyle(btn)

// // const { backgroundColor, margin, color } = btnstyle
// // console.log(backgroundColor, margin, color)

// // troca de velores
// let curso1 = "Javascript"
// let curso2 = "HTML"

// // Trocado valores com destruct
// ;[curso1, curso2] = [curso2, curso1]
// console.log(curso1, curso2)

const cachorro = {
  Name: "Bany",
  Raça: "Golden",
  Cor: "Amarelo",
}

const { Cor: banyCor } = cachorro

console.log(banyCor)
