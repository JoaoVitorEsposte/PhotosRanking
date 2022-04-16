//Variável que guarda a pontuação de uma imagem;
let pontuacaoFoto = 0;

//Lista de todas as estrelas de uma imagem;
let listaEstrelas = document.querySelectorAll(".star");

//Armazena o botão de zerar a pontuação;
let zerarPontuacaoBotao = document.querySelector(".zerar");

//Esta função altera a pontuação de uma foto;
function alteraPontuacao (pontuacao) {
	pontuacaoFoto = pontuacao + 1;
}

//Esta função altera a aparência das estrelas selecionadas;
function alteraAparenciaEstrelas (quantidade) {
	if(quantidade >= 0){
		for(let i = 0; i <= quantidade; i++){
			listaEstrelas[quantidade - i].outerHTML = "<button class=\"star\" value=\"&amp;\">&#127775;</button>";
		}

		for(let i = quantidade; i < listaEstrelas.length - 1; i++){
			listaEstrelas[i + 1].outerHTML = "<button class=\"star\" value=\"&amp;\">&#9733;</button>";
		}

		listaEstrelas = document.querySelectorAll(".star");
		atualizaListaEstrelas();
	}
}

//Esta função é necessária pois quando altero o estilo das estrelas a listaEstrelas fica apontando para um elemento que não existe mais;
function atualizaListaEstrelas () {
	//Define as funções para os botões das estrelas;
	for (let i = 0; i < listaEstrelas.length; i++) {
		let estrelaAtual = listaEstrelas[i];
		estrelaAtual.onclick = function () {
			alteraPontuacao(i);
			alteraAparenciaEstrelas(i);
		} 
	}
}

//Reseta tanto a pontuação como a estilização das estrelas de uma foto;
function zerarPontuacao () {
	for(let i = 0; i < listaEstrelas.length; i++){
		listaEstrelas[i].outerHTML = "<button class=\"star\" value=\"&amp;\">&#9733;</button>";
	}
	listaEstrelas = document.querySelectorAll(".star");
	atualizaListaEstrelas();

	pontuacaoFoto = 0;
}

//Define as funções para os botões das estrelas;
for (let i = 0; i < listaEstrelas.length; i++) {
	let estrelaAtual = listaEstrelas[i];
	estrelaAtual.onclick = function () {
		alteraPontuacao(i);
		alteraAparenciaEstrelas(i);
	} 
}

//Define a função para o botão de zerar a pontuação de uma foto;
zerarPontuacaoBotao.onclick = zerarPontuacao;
