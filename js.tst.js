const infoPage = document.getElementById('info-atual');
const itemImg = document.getElementById('item-img');
const itemTitle = document.getElementById('item-title');
const itemstars = document.getElementById('avaliation');
const itemPrice = document.getElementById('item-price');
const itemDescription = document.getElementById('item-description');
const itemDestail = document.getElementById('detalhes');

// IMG DENTRO DAS DIV
const imgProduto = [...document.querySelectorAll('.imagem-p img')];





//FUNÇÃO CRIA JOGOS
function Jogo (info, capa, nome, avalicao, preco, descricao, detalhe) {
this.info = info
this.capa = capa
this.nome = nome
this.avalicao = avalicao
this.preco = preco
this.descricao = descricao
this.detalhe = detalhe
};


( function () {
const godofwar = new Jogo(
    //INFO DA PÁGINA
    'INÍCIO / LANÇAMENTOS / JOGOS / GOD OF WAR RAGNARÖK 2023',
    //CAPA
    'imagens/gow-capa.jpg',
    //NOME
    'God of War Ragnarök - PS4/PS5',
    //AVALIAÇÃO
    '4.8 (528 avaliações)',
    //PREÇO
    349.00,
    //DESCRIÇÃO
    'Em God of War: Ragnarok, acompanhe a jornada de Kratos e Atreus pelos Nove Reinos em busca de respostas, enquanto as forças asgardianas preparam-se para a guerra. Atreus está à procura de conhecimento para entender a profecia de Loki e o papel dele no Ragnarok. Agora cabe a Kratos enfrentar seus fantasmas do passado para estar presente ao lado de Atreus neste momento de incertezas. Explore lugares inimagináveis com paisagens exuberantes e crie alianças por todos os reinos para enfrentar seus inimigos, entre deuses poderosos e criaturas épicas. As famosas Lâminas do Caos, o Machado Leviatã e o Escudo Guardião estão de volta, junto com uma série de novas habilidades que irão deixar Kratos e Atreus ainda mais implacáveis.',
    //DETALHES
    '1 Jogo God of War Ragnarök.',
    );


const fotos = [
    "https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-watermark-screenshot-03-en-08sep21?$1600px$",

    "https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-watermark-screenshot-11-en-08sep21?$1600px$",

    "https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-watermark-screenshot-12-en-08sep21?$1600px$"]

infoPage.innerHTML = `${godofwar.info}`
itemImg.src = godofwar.capa
itemTitle.innerHTML = `${godofwar.nome}`
itemstars.innerHTML = `${godofwar.avalicao}`
itemPrice.innerHTML = `R$ ${godofwar.preco},00`
itemDescription.innerHTML = `${godofwar.descricao}`
itemDestail.innerHTML = `<li>${godofwar.detalhe}</li>`


//JOGAR IMAGENS NON SRC DA DIV
let aux = 0;

imgProduto.forEach(imagem => {
    imagem.src = fotos[aux];
    aux++
});

//TROCAR IMAGENS
const imgPrincipal = document.getElementById('item-img');

imgProduto.forEach(img => {
    img.addEventListener('click', () => {
      imgPrincipal.src = img.src
    })
})



})();





      









