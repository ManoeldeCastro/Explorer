const express = require("express")

const app = express()

const PORT = 3334

app.get("/message/:id/:user", (request, response) => {
  response.send(`Id da mensagem: ${request.params.id}
                User: ${request.params.user}`)
})

app.listen(PORT, () => console.log(`Server is running at ${PORT}`))
