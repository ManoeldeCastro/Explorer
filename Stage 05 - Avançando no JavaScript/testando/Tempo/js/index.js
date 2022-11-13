const buttonPlay = document.querySelector(".play")
const buttonPause = document.querySelector(".pause")
const buttonStop = document.querySelector(".stop")
const buttonSet = document.querySelector(".set")
const buttonSoundOn = document.querySelector(".sound-on")
const buttonSoundOff = document.querySelector(".sound-off")
const minutesTela = document.querySelector("#minutes")
const secondsTela = document.querySelector("#seconds")
let minutes = Number(minutesTela.textContent)
let contar

//resetar controles
function resetar() {
  buttonPlay.classList.remove("hide")
  buttonPause.classList.add("hide")
  buttonStop.classList.add("hide")
  buttonSet.classList.remove("hide")
  atualizar(minutes, 0)
}
function atualizar(minutes, seconds) {
  minutesTela.textContent = String(minutes).padStart(2, "0")
  secondsTela.textContent = String(seconds).padStart(2, "0")
}

// Iniciar contagem
function play() {
  contar = setTimeout(() => {
    let minutes = Number(minutesTela.textContent)
    let seconds = Number(secondsTela.textContent)
    atualizar(minutes, 0)
    if (minutes <= 0 && seconds <= 0) {
      resetar()
      return
    }
    if (seconds <= 0) {
      seconds = 2
      --minutes
    }

    atualizar(minutes, String(seconds - 1))
    play()
  }, 1000)
}
//eventos
buttonPlay.addEventListener("click", () => {
  buttonPlay.classList.add("hide")
  buttonPause.classList.remove("hide")
  buttonStop.classList.remove("hide")
  buttonSet.classList.add("hide")
  play()
})

buttonPause.addEventListener("click", () => {
  buttonPlay.classList.remove("hide")
  buttonPause.classList.add("hide")
  clearTimeout(contar)
})

buttonStop.addEventListener("click", () => {
  resetar()
  clearTimeout(contar)
})
buttonSet.addEventListener("click", () => {
  var newMinutes = prompt("Quantos minutos?")
  if (!newMinutes) {
    return false
  }
  minutes = minutesTela.textContent = Number(newMinutes)
  atualizar(minutes, 0)
  return minutes
})
