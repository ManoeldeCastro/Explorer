function Aluno(nome, nota1, nota2) {
  this.nome = nome
  this.nota1 = nota1
  this.nota2 = nota2

  this.media = () => {
    return (this.nota1 + this.nota2) / 2
  }
}
const aluno1 = new Aluno("Manoel", 10, 9.5)
console.log(aluno1.media())

// nesse caso essa é um função construtora perceba na linha em que eu atribuo ao aluno1 a função eu preciso passar ela com o new antes, diferentemente do arquivo anterior, onde eu n precisava colocar o this. dessa maneira além de precisar eu preciso sempre colocar o new antes de criar um novo objeto
