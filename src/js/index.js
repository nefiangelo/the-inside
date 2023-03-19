//SELECIONANDO OS ELEMENTOS HTML
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
const desc = document.querySelectorAll('.descricao')

//IDENTIFICAR CLICK DO MOUSE
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        //DESMARCAR O BOTÃO ANTERIOR
        desmarcarBotao();

        //MARCAR O BOTAO CLICKADO E COLOCAR A CLASSE SELECIONADO
        botao.classList.add('selecionado');

        //ESCONDER A IMAGEM ANTERIOR
        escondeImagem();

        //MOSTRAR A IMAGEM CORRESPONDENTE AO BOTAO
        imagens[indice].classList.add('ativa');

        //ESCONDE DESCRICAO
        escondeDesc();

        //ADICIONAR CLASSE ATIVADA
        desc[indice].classList.add('ativada')
        
    })
})


function escondeDesc() {
    const descAtivada = document.querySelector('.ativada');
    descAtivada.classList.remove('ativada');
}

function escondeImagem() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desmarcarBotao() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

