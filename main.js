//Recebe todas as fotos da página principal;
let listaFotos = document.querySelectorAll(".fotos");

let listaPrincipal = document.querySelector(".lista-fotos");

//Recebe todas as opções do menu;
let listaOpcoes = document.querySelectorAll(".opcao");

//Função que seleciona quais fotos serão removidas da página;
function selecionaCategoriaFoto (categoria) {
	if (categoria === "todas"){
		for(let i = 0; i < listaFotos.length; i++){

		}
	}
}

//Define a função selecionaCategoriaFoto aos itens da lista de seleção de categoria;
for (let i = 0; i < listaOpcoes.length; i++){
	let opcaoAtual = listaOpcoes[i];
	opcaoAtual.onclick = function () {
		selecionaCategoriaFoto(opcaoAtual.id);
	}
}