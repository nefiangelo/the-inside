//SELECIONANDO OS ELEMENTOS HTML
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

//IDENTIFICAR CLICK DO MOUSE
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        //DESMARCAR O BOTÃO ANTERIOR
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        //MARCAR O BOTAO CLICKADO E COLOCAR A CLASSE SELECIONADO
        botao.classList.add('selecionado');

        //ESCONDER A IMAGEM ANTERIOR
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');

        //MOSTRAR A IMAGEM CORRESPONDENTE AO BOTAO
        imagens[indice].classList.add('ativa')
    })
})
