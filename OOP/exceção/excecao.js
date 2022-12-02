class Spaceship {
  constructor(name) {
    this.name = name
    this.shotsLeft = 5
  }
  shoot() {
    if (this.shotsLeft > 0) {
      console.log("Bang!")
      this.shotsLeft--
    } else {
      throw new Error("Arma da " + this.name + " Sem munição!")
    }
  }
  reload() {
    this.shotsLeft = 5
  }
}
let fenix = new Spaceship("fenix")
try {
  fenix.shoot()
  fenix.shoot()
  fenix.shoot()
  fenix.shoot()
  fenix.shoot()
  fenix.shoot()
} catch (erro) {
  console.log(erro.message)
  fenix.reload()
} finally {
  console.log("Arma da " + fenix.name + " deu bons tiros!")
}
console.log(fenix)
