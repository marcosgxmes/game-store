// IMG DENTRO DAS DIV
const imgProduto = [...document.querySelectorAll('.imagem-p img')];

//ITENS NO CARRINHO
const imgCart = document.getElementById('cart-img');
const priceCart = document.getElementById('cart-price');

//ELEMENTOS DA PÁGINA
const infoPage = document.getElementById('info-atual');
const itemImg = document.getElementById('item-img');
const itemTitle = document.getElementById('item-title');
const itemstars = document.getElementById('avaliation');
const itemPrice = document.getElementById('item-price');
const itemDescription = document.getElementById('item-description');
const itemDestail = document.getElementById('detalhes');




//FUNÇÃO CRIA JOGOS
function Jogo (info, capa, nome, avalicao, preco, descricao, detalhe){
    this.info = info
    this.capa = capa
    this.nome = nome
    this.avalicao = avalicao
    this.preco = preco
    this.descricao = descricao
    this.detalhe = detalhe
    };


//JOGO GOD OF WAR
function godOfWar() {
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
            '1 Jogo God of War Ragnarök.'
        );
        
        
        const fotos = [
            'https://s2-techtudo.glbimg.com/0WyUojp-gkkKrtfyTA841RVrN5Y=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/K/D/1nCcAfSU2iSPAYx27i7Q/god-of-war-ragnarok-kratos-thor-historia-controle-tematico.jpg',

            "https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-watermark-screenshot-03-en-08sep21?$1600px$",
        
            "https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-watermark-screenshot-11-en-08sep21?$1600px$",

            "https://s2-techtudo.glbimg.com/E2eByMLvkiMY8rVGGO8L_48fb5c=/0x0:3840x2160/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/s/6/8Z4n8WSzmsB0h7TqGzgQ/god-of-war-ragnarok-20221022012102.jpg",
        
            "https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-watermark-screenshot-12-en-08sep21?$1600px$"
        ];
        
        infoPage.innerHTML = `${godofwar.info}`
        itemImg.src = godofwar.capa
        itemTitle.innerHTML = `${godofwar.nome}`
        itemstars.innerHTML = `${godofwar.avalicao}`
        itemPrice.innerHTML = `R$ ${godofwar.preco},00`
        itemDescription.innerHTML = `${godofwar.descricao}`
        itemDestail.innerHTML = `<li>${godofwar.detalhe}</li>`
        imgCart.src = godofwar.capa
        priceCart.innerHTML = `R$ ${godofwar.preco},00`
    
       
    
        //COLOCAR IMAGENS NO SRC DA DIV
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
     }); 
}; 

    
//JOGO SPIDER MAN 2
function spiderMan2(){
    
        const spiderman2 = new Jogo(
            //INFO DA PÁGINA
            'INÍCIO / LANÇAMENTOS / JOGOS / MARVEL SPIDER MAN 2 2023',
            //CAPA
            'imagens/spider_man2-capa.jpg',
            //NOME
            "Marvel's Spider Man 2",
            //AVALIAÇÃO
            '4.7 (206 avaliações)',
            //PREÇO
            307.00,
            //DESCRIÇÃO
            "Os Spiders Peter Parker e Miles Morales estão de volta em mais uma aventura eletrizante da famosa franquia Marvel's Spider-Man para PS5. Balance, pule e plane com as novas Asas de Teia para percorrer a Nova York da Marvel e alterne rapidamente entre Peter Parker e Miles Morales para jogar histórias diferentes e usar novos poderes épicos enquanto o infame vilão Venom ameaça a vida deles, das pessoas próximas a eles e a cidade.",
            //DETALHES
            '1 Jogo Spider Man 2.',
            );
        
        
        const fotos = [
            "https://gmedia.playstation.com/is/image/SIEPDC/spider-man-2-screenshot-story-duo-4k-legal-13jul23?$1600px$",

            "https://gmedia.playstation.com/is/image/SIEPDC/spider-man-2-screenshot-venom-4k-legal-13jul23?$1600px$",
        
            "https://gmedia.playstation.com/is/image/SIEPDC/spider-man-2-screenshot-symbiote-4k-legal-13jul23?$1600px$",

            "https://m.media-amazon.com/images/I/91FtLDOXIxL._SL1500_.jpg",
            
            'https://gmedia.playstation.com/is/image/SIEPDC/spider-man-2-screenshot-peter-miles-en-25may23.jpg?$1600px$'
        ]
 

infoPage.innerHTML = `${spiderman2.info}`;
itemImg.src = spiderman2.capa;
itemTitle.innerHTML = `${spiderman2.nome}`;
itemstars.innerHTML = `${spiderman2.avalicao}`;
itemPrice.innerHTML = `R$ ${spiderman2.preco},00`;
itemDescription.innerHTML = `${spiderman2.descricao}`;
itemDestail.innerHTML = `<li>${spiderman2.detalhe}</li>`;

imgCart.src = spiderman2.capa;
priceCart.innerHTML = `R$ ${spiderman2.preco},00`;


//JOGAR IMAGENS NO SRC DA DIV
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

}; 

