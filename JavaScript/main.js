//Recebe todas as fotos da página principal;
let listaFotos = document.querySelectorAll(".fotos");

//Recebe a <ul> da lista de fotos;
let listaPrincipal = document.querySelector(".lista-fotos");

//Recebe todas as opções do menu;
let listaOpcoes = document.querySelectorAll(".opcao");

//Define uma constante que armazena o número total de elementos filhos da listaPrincipal;
const tamanhoListaPrincipal = listaPrincipal.childElementCount;

//Define variável para auxiliar na seleção de fotos a serem exibidas;
let categoriaAnterior = "todas";

//Reseta a listaPrincipal com todos os elementos originais para possibilitar a seleção de categoria das fotos;
function completaListaPrincipal () {
	for (let i = 0; i < listaFotos.length; i++) {
		listaPrincipal.appendChild(listaFotos[i]);
	}
}

//Função que seleciona quais fotos serão exibidas da página;
function selecionaCategoriaFoto (categoria) {
	if (categoriaAnterior !== categoria){
		if(categoria === "todas"){
			completaListaPrincipal();
			categoriaAnterior = categoria;
		}else if(categoria === "objeto"){
			completaListaPrincipal();
			for (let i = 0; i < listaFotos.length; i++) {
				if(listaFotos[i].classList[1] !== "objeto"){
					listaPrincipal.removeChild(listaFotos[i]);
				}
			}
			categoriaAnterior = categoria;
		}else if(categoria === "planta"){
			completaListaPrincipal();
			for(let i = 0; i < listaFotos.length; i++){
				if(listaFotos[i].classList[1] !== "planta"){
					listaPrincipal.removeChild(listaFotos[i]);
				}
			}
			categoriaAnterior = categoria;
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
