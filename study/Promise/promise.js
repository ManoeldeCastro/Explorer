function melhorBanda(band) {
  return new Promise((resolve, reject) => {
    if (band == "Queen") {
      resolve({
        success: true,
        name: band,
        messagem: band + " Está é a melhor banda de Rock",
      })
    } else {
      reject({
        success: false,
        msg: "Eu não acho",
      })
    }
  })
}
function melhorMusica(resposta) {
  return new Promise((resolve, reject) => {
    if (resposta.success) {
      resolve("Banda de curtição é: " + resposta.name)
    } else {
      reject("Você não sabe o que é bom!")
    }
  })
}

async function resultado() {
 try{
  const melhor = await melhorBanda("Red hot")
  console.log(melhor)
  const musica = await melhorMusica(melhor)
  console.log(musica)
}catch(err){
  console.log(err.msg)
}
}
resultado()
