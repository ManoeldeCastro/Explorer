function createGame(player1, hour, player2) {
  return `
      <li>
      <img src="img/icon-${player1}.svg" alt="Logo ${player1}" />
      <strong>${hour}</strong>
      <img src="img/icon-${player2}.svg" alt="Logo ${player2}" />
    </li>
  `
}

let delay = -0.4

function createCard(date, day, games) {
  delay += 0.4
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
`
}

document.querySelector("main#cards").innerHTML +=
  createCard("24/11", "quinta", createGame("brasil", "16:00", "servia")) +
  createCard(
    "28/11",
    "segunda",
    createGame("brasil", "13:00", "suica") +
      createGame("portugal", "16:00", "uruguai")
  ) +
  createCard("02/12", "sexta", createGame("brasil", "16:00", "camaroes"))
