
var pessoa ={
	nome: "Felipe Malheiros",
	cargo: "Designer",
	foto: "https://openclipart.org/image/2400px/svg_to_png/247319/abstract-user-flat-3.png"

}

document.getElementById("nome-cabecalho").innerHTML = pessoa.nome;
document.getElementById("cargo-cabecalho").innerHTML = pessoa.cargo;
document.getElementById("foto-cabecalho").src = pessoa.foto;