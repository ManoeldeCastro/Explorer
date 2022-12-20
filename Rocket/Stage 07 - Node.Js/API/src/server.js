const express = require("express")

const app = express()

const PORT = 3333

app.get("/message", (request, response) => {
  response.send("Hello, world!")
})

app.listen(PORT, () => console.log(`Server is running at ${PORT}`))
