/* var filme1 = "Star Wars"
var filme2 = "Harry Potter"
var filme3 = "Marvel" 

console.log(filme1)
console.log(filme2)
console.log(filme3)

ou

var filmes = [];

filmes.push("Star Wars");
filmes.push("Harry Potter");
filmes.push("Marvel");

cria variavel array
var filmes = ["Star Wars","Harry Potter", "Marvel"];*/

/*console log e mostra array, array sempre inicia por 0, neste caso o array acima é de 0 - 2
console.log(filmes[0])
console.log(filmes[1])
console.log(filmes[2])
*/

/*
mostra qual tamanho
console.log(filmes.length) 


var filmes = ["Star Wars","Harry Potter", "Marvel"]

para (variavel i = 3 e i for maior 0, faça i - 1
for (var i = 0; i < filmes.length; i++) {
  console.log(filmes[i])
}*/

var listaFilmes = ["https://m.media-amazon.com/images/M/MV5BOGU0OWQyMjItYzA4Zi00MDFiLThiZWQtZmEyNWRiODAzYzNmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BZDgzNzdmNjEtMDAwMC00M2FiLTlkMTEtMDE0MDIyNTEwYmJlXkEyXkFqcGdeQXVyMjY3MjUzNDk@._V1_UY268_CR12,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BODNiODVmYjItM2MyMC00ZWQyLTgyMGYtNzJjMmVmZTY2OTJjXkEyXkFqcGdeQXVyNzk3NDUzNTc@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BYjJiZmE5ZDgtYWUxZi00MWI1LTg2MmEtZmUwZGE2YzRkNTE5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"]

for (i = 0; i < listaFilmes.length; i++) {
  document.write("<img src =" + listaFilmes[i] + "/>")
}