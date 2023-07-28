//ELEMENTOS DA PÁGINA
const infoPage = document.getElementById('info-atual');
const itemImg = document.getElementById('item-img');
const itemTitle = document.getElementById('item-title');
const itemstars = document.getElementById('avaliation');
const itemPrice = document.getElementById('item-price');
const itemDescription = document.getElementById('item-description');
const itemDestail = document.getElementById('detalhes');
const imgProduto = [...document.querySelectorAll('.imagem-p img')];


//ITENS NO CARRINHO
const imgCart = document.getElementById('cart-img');
const priceCart = document.getElementById('cart-price');

const getJogo = localStorage.getItem("jogo");


//JOGO GOD OF WAR
if(getJogo === "godOfWar") {
    function godOfWar() {
    
     

        const kratos = {
            info: "INÍCIO / LANÇAMENTOS / JOGOS / GOD OF WAR RAGNARÖK 2023",
            capa: "imagens/gow-capa.jpg",
            avaliacao: "4.8 (528 avaliações)",
            nome: "God of War Ragnarök - PS4/PS5",
            preco: 350,
            descricao: "Em God of War: Ragnarok, acompanhe a jornada de Kratos e Atreus pelos Nove Reinos em busca de respostas, enquanto as forças asgardianas preparam-se para a guerra. Atreus está à procura de conhecimento para entender a profecia de Loki e o papel dele no Ragnarok. Agora cabe a Kratos enfrentar seus fantasmas do passado para estar presente ao lado de Atreus neste momento de incertezas. Explore lugares inimagináveis com paisagens exuberantes e crie alianças por todos os reinos para enfrentar seus inimigos, entre deuses poderosos e criaturas épicas. As famosas Lâminas do Caos, o Machado Leviatã e o Escudo Guardião estão de volta, junto com uma série de novas habilidades que irão deixar Kratos e Atreus ainda mais implacáveis.",
            detalhe: '1 Jogo God of War Ragnarok. '
          }
    
    infoPage.innerHTML = kratos.info
    itemImg.src = kratos.capa
    itemTitle.innerHTML = `${kratos.nome}`
    itemstars.innerHTML = `${kratos.avaliacao}`
    itemPrice.innerHTML = `R$ ${kratos.preco},00`
    itemDescription.innerHTML = `${kratos.descricao}`
    itemDestail.innerHTML = `<li>${kratos.detalhe}</li>`
    imgCart.src = kratos.capa
    priceCart.innerHTML = `R$ ${kratos.preco}`
    
    
    const fotos = [
        'https://s2-techtudo.glbimg.com/0WyUojp-gkkKrtfyTA841RVrN5Y=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/K/D/1nCcAfSU2iSPAYx27i7Q/god-of-war-ragnarok-kratos-thor-historia-controle-tematico.jpg',
    
        "https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-watermark-screenshot-03-en-08sep21?$1600px$",
    
        "https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-watermark-screenshot-11-en-08sep21?$1600px$",
    
        "https://s2-techtudo.glbimg.com/E2eByMLvkiMY8rVGGO8L_48fb5c=/0x0:3840x2160/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/s/6/8Z4n8WSzmsB0h7TqGzgQ/god-of-war-ragnarok-20221022012102.jpg",
    
        "https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-watermark-screenshot-12-en-08sep21?$1600px$"
    ];
    
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
    
    }
    godOfWar();
}


//JOGO SPIDER MAN 2
if(getJogo === "spiderMan") {
    function spiderMan2(){
    
        const spiderman2 = {
            //INFO DA PÁGINA
            info:'INÍCIO / LANÇAMENTOS / JOGOS / MARVEL SPIDER MAN 2 2023',
            //CAPA
            capa:'imagens/spider_man2-capa.jpg',
            //NOME
            nome:"Marvel's Spider Man 2",
            //AVALIAÇÃO
            avaliacao:'4.7 (206 avaliações)',
            //PREÇO
            preco:307.00,
            //DESCRIÇÃO
           descricao: "Os Spiders Peter Parker e Miles Morales estão de volta em mais uma aventura eletrizante da famosa franquia Marvel's Spider-Man para PS5. Balance, pule e plane com as novas Asas de Teia para percorrer a Nova York da Marvel e alterne rapidamente entre Peter Parker e Miles Morales para jogar histórias diferentes e usar novos poderes épicos enquanto o infame vilão Venom ameaça a vida deles, das pessoas próximas a eles e a cidade.",
            //DETALHES
           detalhe: '1 Jogo Spider Man 2.',
        };
        
        
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
    itemstars.innerHTML = `${spiderman2.avaliacao}`;
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
    spiderMan2();
}


//JOGO ELDEN RING
if(getJogo === "eldenRing") {
    function eldenRing(){
    
        const eldenring = {
            //INFO DA PÁGINA
            info:'INÍCIO / LANÇAMENTOS / JOGOS / ELDEN RING 2022',
            //CAPA
            capa:'imagens/elden_ring-capa.jpg',
            //NOME
            nome:"Elden Ring - PS4/PS5",
            //AVALIAÇÃO
            avaliacao:'4.9 (1.203 avaliações)',
            //PREÇO
            preco:299,
            //DESCRIÇÃO
            descricao:"A Golden Order foi destroçada. Nas Lands Between, governadas pela Rainha Marika, the Eternal, o Elden Ring, a fonte do Erdtree, foi destruído. Os semideuses filhos de Marika reivindicaram os fragmentos do Elden Ring, conhecidos como Great Runes, e a corrupção insana oriunda dessa incrível força recém-descoberta desencadeou uma guerra: The Shattering. Uma guerra que significou o final do Greater Will. E agora o poder será dado aos Tarnished, que foram rejeitados e exilados das Lands Between. Com mortos que ainda vivem e uma graça há muito perdida, siga o caminho para as Lands Between, atravessando o mar nebuloso, para chegar até o Elden Ring. E torne-se o Elden Lord...",
            //DETALHES
            detalhe:'1 Jogo Elden Ring.'
        };
        
        
        const fotos = [
            "https://gmedia.playstation.com/is/image/SIEPDC/elden-ring-screenshot-12-en-15jun21?$800px$",
    
            "https://gmedia.playstation.com/is/image/SIEPDC/elden-ring-screenshot-09-en-15jun21?$800px$",
        
            "https://gmedia.playstation.com/is/image/SIEPDC/elden-ring-screenshot-17-en-15jun21?$800px$",
    
            "https://gmedia.playstation.com/is/image/SIEPDC/elden-ring-screenshot-13-en-15jun21?$800px$",
            
            "https://gmedia.playstation.com/is/image/SIEPDC/elden-ring-screenshot-08-en-15jun21?$800px$"
        ]
    
    
    infoPage.innerHTML = `${eldenring.info}`;
    itemImg.src = eldenring.capa;
    itemTitle.innerHTML = `${eldenring.nome}`;
    itemstars.innerHTML = `${eldenring.avalicao}`;
    itemPrice.innerHTML = `R$ ${eldenring.preco},00`;
    itemDescription.innerHTML = `${eldenring.descricao}`;
    itemDestail.innerHTML = `<li>${eldenring.detalhe}</li>`;
    
    imgCart.src = eldenring.capa;
    priceCart.innerHTML = `R$ ${eldenring.preco},00`;
    
    
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
    eldenRing();
}

//JOGO DIABLO IV
if(getJogo === "diabloIV") {
    function diabloIV(){
    
        const diablo = {
            //INFO DA PÁGINA
            info:'INÍCIO / LANÇAMENTOS / JOGOS / DIABLO IV 2023',
            //CAPA
            capa:'imagens/diablo-capa.jpg',
            //NOME
           nome: "Diablo IV",
            //AVALIAÇÃO
           avaliacao: '4.9 (103 avaliações)',
            //PREÇO
            preco:349,
            //DESCRIÇÃO
           descricao: "A série lendária de RPG de ação está de volta com Diablo IV. Essa evolução espetacular introduz um novo e vasto mundo para explorar, cheio de aventuras sem fim, demônios letais e saques lendários. Conheça a terra corrompida do Santuário no exato momento em que ela mergulha em uma nova era das trevas. Lilith, filha de Mephisto, Senhor do Terror, foi libertada do exílio e agora sua influência odiosa ameaça consumir o mundo. Apenas você e seus companheiros de aventura podem evitar que Lilith destrua o Santuário. Explore o Santuário com ou sem amigos para progredir na campanha cativante de Diablo IV, fazendo missões, libertando cidades e enfrentando chefões épicos. No melhor estilo Diablo, o fim do jogo é expansivo e os jogadores podem se encontrar no mundo compartilhado do jogo para trocar itens, formar equipes ou testar seus poderes em zonas JxJ. Os recursos de jogo multiplataforma, progressão multiplataforma e cooperativo local permitem que você continue a aventura quando e onde quiser.",
            //DETALHES
            detalhe:'1 Jogo Diablo IV.'
        };
        
        
        const fotos = [
            "https://gmedia.playstation.com/is/image/SIEPDC/diablo-iv-screen-05-en-10dec22?$800px$",
    
            "https://gmedia.playstation.com/is/image/SIEPDC/diablo-iv-screen-12-en-17may23?$800px$",
        
            "https://gmedia.playstation.com/is/image/SIEPDC/diablo-iv-screen-13-en-17may23?$800px$",
    
            "https://gmedia.playstation.com/is/image/SIEPDC/diablo-iv-screen-14-en-17may23?$800px$",
            
            "https://gmedia.playstation.com/is/image/SIEPDC/diablo-iv-screen-15-en-17may23?$800px$"
        ]
    
    
    infoPage.innerHTML = `${diablo.info}`;
    itemImg.src = diablo.capa;
    itemTitle.innerHTML = `${diablo.nome}`;
    itemstars.innerHTML = `${diablo.avaliacao}`;
    itemPrice.innerHTML = `R$ ${diablo.preco},00`;
    itemDescription.innerHTML = `${diablo.descricao}`;
    itemDestail.innerHTML = `<li>${diablo.detalhe}</li>`;
    imgCart.src = diablo.capa;
    priceCart.innerHTML = `R$ ${diablo.preco},00`;
    
    
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
    diabloIV();
}


//JOGO MORTAL KOMBAT 1
if(getJogo === "mk1") {
    function mortalKombat(){
    
        const mk1 = {
            //INFO DA PÁGINA
            info:'INÍCIO / LANÇAMENTOS / JOGOS / MORTAL KOMBAT 1 2023',
            //CAPA
            capa:'imagens/mk1-capa.jpg',
            //NOME
           nome: "Mortal Kombat 1 - PS5",
            //AVALIAÇÃO
            avaliacao:'4.6 (53 avaliações)',
            //PREÇO
           preco: 399,
            //DESCRIÇÃO
            descricao:"Entre numa nova era de kombate com o 1º título da icônica franquia de luta e desvende as consequências das ações de Liu Kang que remontam a aurora dessa série esmagadora. Testemunhe a manipulação do tempo com a chegada de novos personagens capazes de alterar o fluxo da batalha, obter segundos preciosos e ganhar vantagem. Guerreiros experientes enfrentam versões antigas de si mesmos, Terremotos do Tempo dão uma sacudida nas lutas e tudo que você achava que sabia sobre o Mortal Kombat será desafiado à medida que a força toda-poderosa por trás do torneio brutal se revela.",
            //DETALHES
            detalhe:'1 Jogo Mortal Kombat 1.'
        };
        
        
        const fotos = [
            "https://meups.com.br/wp-content/uploads/2023/07/MORTAL-KOMBAT-1-3-900x503.jpg",
    
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhoay-KAczk-QpdCy-Yw_Fl8te0UN8jUL1pMmCpH_JVbPEAU2DbTBwbGtBOY_LCxV2oT4J2HHgcBf_8vXKcHXJHLAvemoL2xNNPi6mlxLI45xaPBWZnM8vtWj1fzC-CUZ_GB_H1kmUbqloUTity-aHcHGppJSJavAzEdsSVkoD6qv1-2PynOLGXg0NN/w640-h360/vlcsnap-2023-06-18-06h51m47s013.png",
        
            "https://www.comboinfinito.com.br/principal/wp-content/uploads/2023/05/mortal-kombat-01.jpg",
    
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiuINaBQo8FcyTb5xPoFC2ywJNLSNAcL6mWms_W_ZJFCVnDyL3c-rOmFvPHmbuGmYsC-g1TQLxx9V0txsTrb4lkzayg1JlZR-HXmz90A_5dk8EWzW71Xi2CLVsssCePAfk1cnzRmB42vhK6YQ7H8jtTK_V-nI7sTMxR1WNuS5IlkNjoPa8WWjjPF2LM/w640-h360/vlcsnap-2023-06-18-06h44m25s737.png",
            
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgAGg6Anm9IFDWTi87GB9ywkP9Oov8Kuc7lj2POAPkG3SlTJFfDSLyXcy95tV2OF1sjgow3cv_DsafFOMavM6FoKH6LRWz9ZBbLKfSX36rjZ9IW1TqxJikfRbepGUuXM5V1vCMKHHo0R9uVTYdXVuVwgenw9kEYtvlffM4z-zq4MB9341oNcdBq185t/w640-h360/vlcsnap-2023-06-18-06h41m09s968.png"
        ]
    
    
    infoPage.innerHTML = `${mk1.info}`;
    itemImg.src = mk1.capa;
    itemTitle.innerHTML = `${mk1.nome}`;
    itemstars.innerHTML = `${mk1.avaliacao}`;
    itemPrice.innerHTML = `R$ ${mk1.preco},00`;
    itemDescription.innerHTML = `${mk1.descricao}`;
    itemDestail.innerHTML = `<li>${mk1.detalhe}</li>`;
    imgCart.src = mk1.capa;
    priceCart.innerHTML = `R$ ${mk1.preco},00`;
    
    
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
    mortalKombat();
}


//JOGO FIFA 23
if(getJogo === "fifa23") {
    function fifa(){
    
        const fifa23 = {
            //INFO DA PÁGINA
           info: 'INÍCIO / LANÇAMENTOS / JOGOS / FIFA 2023',
            //CAPA
           capa: 'imagens/fifa2023-capa.jpg',
            //NOME
            nome:"FIFA 2023 - PS5",
            //AVALIAÇÃO
            avaliacao:'4.5 (303 avaliações)',
            //PREÇO
            preco:338.00,
            //DESCRIÇÃO
            descricao:"O Jogo de Todo Mundo O EA SPORTS™ FIFA 23 coloca o maior jogo do mundo em campo, com torneios da Copa do Mundo FIFA™ de futebol masculino e feminino, adição de clubes femininos e novas formas de jogar os seus modos favoritos. Os avanços na tecnologia HyperMotion2 trazem ainda mais ação e realismo do futebol para o campo no PS5. Com o dobro de captura de movimentos do mundo real, agora, mais do que nunca, há mais animações de futebol real em cada partida.",
            //DETALHES
            detalhe:'1 Jogo FIFA 2023.',
        };
        
        
        const fotos = [
            "https://gmedia.playstation.com/is/image/SIEPDC/fifa-23-world-cup-pulisic-screen-02-ps4-ps5-en-11nov22?$800px$",
    
            "https://gmedia.playstation.com/is/image/SIEPDC/fifa-23-world-cup-netherlands-screen-01-ps4-ps5-en-11nov22?$800px$",
        
            "https://gmedia.playstation.com/is/image/SIEPDC/fifa-23-world-cup-stadium-screen-01-ps4-ps5-en-11nov22?$800px$",
    
            "https://gmedia.playstation.com/is/image/SIEPDC/fifa-23-world-cup-vinicius-screen-01-ps4-ps5-en-11nov22?$800px$",
            
            "https://gmedia.playstation.com/is/image/SIEPDC/fifa-23-world-cup-ghana-screen-01-ps4-ps5-en-11nov22?$800px$"
        ]
    
    
    infoPage.innerHTML = `${fifa23.info}`;
    itemImg.src = fifa23.capa;
    itemTitle.innerHTML = `${fifa23.nome}`;
    itemstars.innerHTML = `${fifa23.avaliacao}`;
    itemPrice.innerHTML = `R$ ${fifa23.preco},00`;
    itemDescription.innerHTML = `${fifa23.descricao}`;
    itemDestail.innerHTML = `<li>${fifa23.detalhe}</li>`;
    imgCart.src = fifa23.capa;
    priceCart.innerHTML = `R$ ${fifa23.preco},00`;
    
    
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
    fifa();
}


//JOGO STREET FIGHTER 6
if(getJogo === "streetFighter6") {
    function streetFighter(){
    
        const streetfighter6 = {
            //INFO DA PÁGINA
            info:'INÍCIO / LANÇAMENTOS / JOGOS / STREET FIGHTER 6 2023',
            //CAPA
            capa:'imagens/street_fighter6-capa.jpg',
            //NOME
            nome:"Street Fighter 6",
            //AVALIAÇÃO
            avaliacao:'4.3 (156 avaliações)',
            //PREÇO
            preco:279,
            //DESCRIÇÃO
            descricao:"Street Fighter 6 é o próximo passo na evolução da série Street Fighter e conta com recursos de gameplay inovadores, além de visuais aprimorados em todos os aspectos do jogo. Street Fighter 6 usa a RE ENGINE, própria da Capcom, e apresenta três modos distintos de jogo: Fighting Ground, World Tour e Battle Hub. Seu caminho para se tornar um World Warrior começa aqui. Seu momento. Sua luta.",
            //DETALHES
            detalhe:'1 Jogo Street Fighter 6.'
        };
        
        
        const fotos = [
            "https://gmedia.playstation.com/is/image/SIEPDC/street-fighter-6-screen-23-ps4-ps5-en-21nov22?$800px$",
    
            "https://gmedia.playstation.com/is/image/SIEPDC/street-fighter-6-screen-18-ps4-ps5-en-21nov22?$800px$",
        
            "https://gmedia.playstation.com/is/image/SIEPDC/street-fighter-6-screen-09-ps4-ps5-en-02sep22?$800px$",
    
            "https://gmedia.playstation.com/is/image/SIEPDC/street-fighter-6-screen-28-ps4-ps5-en-21nov22?$800px$",
            
            "https://gmedia.playstation.com/is/image/SIEPDC/street-fighter-6-screen-13-ps4-ps5-en-21nov22?$800px$"
        ];
    
    
    infoPage.innerHTML = `${streetfighter6.info}`;
    itemImg.src = streetfighter6.capa;
    itemTitle.innerHTML = `${streetfighter6.nome}`;
    itemstars.innerHTML = `${streetfighter6.avaliacao}`;
    itemPrice.innerHTML = `R$ ${streetfighter6.preco},00`;
    itemDescription.innerHTML = `${streetfighter6.descricao}`;
    itemDestail.innerHTML = `<li>${streetfighter6.detalhe}</li>`;
    imgCart.src = streetfighter6.capa;
    priceCart.innerHTML = `R$ ${streetfighter6.preco},00`;
    
    
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
    streetFighter();
}


//JOGO TEKKEN 8
if(getJogo === "tekken8") {
    function tekken(){
    
        const tekken8 = {
            //INFO DA PÁGINA
           info: 'INÍCIO / LANÇAMENTOS / JOGOS / TEKKEN 8 2023',
            //CAPA
           capa: 'imagens/tekken8-capa.jpg',
            //NOME
            nome:"Tekken 8",
            //AVALIAÇÃO
            avaliacao:'4.3 (156 avaliações)',
            //PREÇO
            preco:340.00,
            //DESCRIÇÃO
            descricao:"Sinta o poder de cada golpe em Tekken 8, o mais novo capítulo da lendária franquia de jogo de luta da Bandai Namco. Usando o poder e realismo da Unreal Engine 5, Tekken 8 leva os jogos de luta a um novo nível, aproveitando toda a potência da nova geração de consoles. Novos recursos inovadores, personagens incrivelmente detalhados e cenários dramáticos fazem deste um dos títulos mais visualmente impressionantes e imersivos do gênero até agora. Tekken 8 retoma a história após a violenta batalha que terminou na derrota de Heihachi Mishima em Tekken 7 — mas agora o foco é um novo conflito de pai contra filho: Jin Kazama vai desafiar Kazuya Mishima num confronto que vai abalar as estruturas da cidade.",
            //DETALHES
           detalhe: '1 Jogo Tekken 8.'
        };
        
        
        const fotos = [
            "https://gmedia.playstation.com/is/image/SIEPDC/tekken-8-screenshot-05-en-20sep22?$800px$",
    
            "https://gmedia.playstation.com/is/image/SIEPDC/tekken-8-screenshot-02-en-20sep22?$800px$",
        
            "https://gmedia.playstation.com/is/image/SIEPDC/tekken-8-screenshot-08-en-20sep22?$800px$",
    
            "https://gmedia.playstation.com/is/image/SIEPDC/tekken-8-screenshot-06-en-20sep22?$800px$",
            
            "https://gmedia.playstation.com/is/image/SIEPDC/tekken-8-screenshot-07-en-20sep22?$800px$"
        ]
    
    
    infoPage.innerHTML = `${tekken8.info}`;
    itemImg.src = tekken8.capa;
    itemTitle.innerHTML = `${tekken8.nome}`;
    itemstars.innerHTML = `${tekken8.avaliacao}`;
    itemPrice.innerHTML = `R$ ${tekken8.preco},00`;
    itemDescription.innerHTML = `${tekken8.descricao}`;
    itemDestail.innerHTML = `<li>${tekken8.detalhe}</li>`;
    imgCart.src = tekken8.capa;
    priceCart.innerHTML = `R$ ${tekken8.preco},00`;
    
    
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
    tekken();
}


//CONSOLE PS5
if(getJogo === "ps5"){
    function playStation5(){
    
    const ps5 = {
        //INFO DA PÁGINA
       info: 'INÍCIO / LANÇAMENTOS / CONSOLES / SONY CONSOLE DIGITAL PLAYSTATION 5 2020 BRANCO',
        //CAPA
       capa: 'https://images.kabum.com.br/produtos/fotos/115737/console-sony-playstation-5_1600357937_g.jpg',
        //NOME
       nome: "Console Sony PlayStation 5",
        //AVALIAÇÃO
       avaliacao: '4.8 (703 avaliações)',
        //PREÇO
       preco: 4.199,
        //DESCRIÇÃO
      descricao:  "A evolução em consoles de videogame chegou e você precisa viver essa experiência! Com SSD de alta velocidade, que permite um carregamento ultrarrápido, áudio 3D e controle Wireless DualSense com feedback tátil e gatilhos adaptáveis, o PlayStation 5 proporcionará uma incrível imersão em seus games favoritos.",
        //DETALHES
       detalhe: "1 Console Sony PlayStation 5."
    };
    
    
    const fotos = [
        "https://images.kabum.com.br/produtos/fotos/115737/console-sony-playstation-5-midia-fisica_1598984720_g.jpg",

        "https://images.kabum.com.br/produtos/fotos/115737/console-sony-playstation-5_1603798015_g.jpg",

        
    
        "https://images.kabum.com.br/produtos/fotos/115737/console-sony-playstation-5-midia-fisica_1598984721_g.jpg",

        "https://images.kabum.com.br/produtos/fotos/115737/console-sony-playstation-5-midia-fisica_1598984719_g.jpg",
        
        "https://images.kabum.com.br/produtos/fotos/magalu/459232/PlayStation-5-2022-825GB-1-Controle-Branco-Sony_1682705727_gg.jpg"
    ]


infoPage.innerHTML = `${ps5.info}`;
itemImg.src = ps5.capa;
itemTitle.innerHTML = `${ps5.nome}`;
itemstars.innerHTML = `${ps5.avaliacao}`;
itemPrice.innerHTML = `R$ ${ps5.preco},00`;
itemDescription.innerHTML = `${ps5.descricao}`;
itemDestail.innerHTML = `
<li>${ps5.detalhe}</li>
<li>2 Controles DualSense.</li>
<li>1 Cabo USB-C.</li>
<li>1 Cabo de alimentação.</li>
<li>1 Cabo HDMI.</li>`;
imgCart.src = ps5.capa;
priceCart.innerHTML = `R$ ${ps5.preco},00`;


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
playStation5();
}


//CONSOLE PS4
if(getJogo === "ps4"){
   function playStation4(){
    
    const ps4 = {
        //INFO DA PÁGINA
       info: 'INÍCIO / LANÇAMENTOS / CONSOLES / SONY CONSOLE PLAYSTATION 4 PRO 2016',
        //CAPA
       capa: 'https://d2r9epyceweg5n.cloudfront.net/stores/002/027/409/products/4a3af706fab2cd009f85f29d8d95b7b31-10a8b99adaa3fc704e16717097037043-640-0.webp',
        //NOME
       nome: "Console Sony PlayStation 4 PRO",
        //AVALIAÇÃO
       avaliacao: '4.7 (1.376 avaliações)',
        //PREÇO
     preco:   3.249,
        //DESCRIÇÃO
     descricao:   "PlayStation 4 Jogos incríveis e entretenimiento sem fim. Os jogos mais incríveis estão no PS4, com 1TB de armazenamento. O console PS4 oferece excelente poder de jogabilidade, entretenimento incrível tecnologia HDR vibrante. Inclui: Console PlayStation 4 Controle sem fio DualShock 4 Disco Blu-ray de God Of War Ragnarok PS4 Headset mono Cabo HDMI Cabo de alimentaçao CA Cabo USB Materiais impressosControle sem fio DualShock 4 Disco Blu-ray de God Of War Ragnarok PS4 Headset mono Cabo HDMI Cabo de alimentaçao CA Cabo USB Materiais impressos.",
        //DETALHES
       detalhe: "1 Console Sony PlayStation 4 PRO."
    };
    
    
    const fotos = [
        "https://m.media-amazon.com/images/I/41sN+-1hRsL._AC_SX679_.jpg",

        "https://m.media-amazon.com/images/I/61+Ufg4Je5L._AC_SX679_.jpg",

        "https://m.media-amazon.com/images/I/61GgeLOJjuL._AC_SX679_.jpg",
        
        "https://m.media-amazon.com/images/I/51Ieq0twp+L._AC_SX679_.jpg",
        
        "https://m.media-amazon.com/images/I/51S9Kk+2M2L._AC_SX679_.jpg"
    ]


infoPage.innerHTML = `${ps4.info}`;
itemImg.src = ps4.capa;
itemTitle.innerHTML = `${ps4.nome}`;
itemstars.innerHTML = `${ps4.avaliacao}`;
itemPrice.innerHTML = `R$ ${ps4.preco},00`;
itemDescription.innerHTML = `${ps4.descricao}`;
itemDestail.innerHTML = `
<li>${ps4.detalhe}</li>
<li>2 Controles DualShock 4.</li>
<li>1 Cabo USB-C.</li>
<li>1 Cabo de alimentação.</li>
<li>1 Cabo HDMI.</li>
<li>1 Fone Sony.</li>`;
imgCart.src = ps4.capa;
priceCart.innerHTML = `R$ ${ps4.preco},00`;


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

};  playStation4();
}



//CONSOLE XBOX SX
if(getJogo === "xboxsx"){
   function xboxSX(){
    
    const xboxsx = {
        //INFO DA PÁGINA
      info:  'INÍCIO / LANÇAMENTOS / CONSOLES / CONSOLE MICROSOFT XBOX SERIES X 2020',
        //CAPA
       capa: 'https://m.media-amazon.com/images/I/61eYoSqkHnL._AC_SX679_.jpg',
        //NOME
      nome:  "Console Microsoft Xbox Series X",
        //AVALIAÇÃO
      avaliacao:  '4.8 (3.361 avaliações)',
        //PREÇO
      preco:  4.150,
        //DESCRIÇÃO
     descricao:   "Apresentamos o xbox series x, nosso console mais rápido e poderoso de todos os tempos; jogue milhares de títulos de quatro gerações de consoles- todos os jogos têm melhor aparência e são melhor executados no xbox series x; no coração do series x está a xbox velocity architecture, que combina um ssd personalizado e software integrado para diminuir significativamente os tempos de carregamento dentro e fora do jogo; troque simultaneamente entre vários jogos em um instante com o quick resume; explore novos mundos e desfrute da ação como nunca antes com 12 teraflops incomparáveis de poder de processamento gráfico; desfrute de jogos 4k a até 120 quadros por segundo, som 3d avançado especial e muito mais; comece com uma biblioteca instantânea de mais de 100 jogos de alta qualidade, incluindo todos os novos títulos do xbox game studios no mesmo dia do seu lançamento como o halo infinite, com o xbox game pass ultimate (assinatura vendida separadamente) ***informações importantes:4k a 120 fps: requer conteúdo e exibição compatíveis; use-o no xbox series x conforme o conteúdo for disponibilizado.xbox game pass: o catálogo de jogos varia ao longo do tempo.",
        //DETALHES
      detalhe:  "1 Dispositivo VR."
    };
    
    
    const fotos = [
        "https://m.media-amazon.com/images/I/51A41nLe5IL._AC_SX522_.jpg",

        "https://m.media-amazon.com/images/I/510uaz4Tu8L._AC_SX522_.jpg",
        
        "https://m.media-amazon.com/images/I/51HSFVoY4eL._AC_SX522_.jpg",

        "https://m.media-amazon.com/images/I/518lHGigunL._AC_SX522_.jpg",
        
        "https://m.media-amazon.com/images/I/71HyGW8sJXL._AC_SX522_.jpg"
    ]


infoPage.innerHTML = `${xboxsx.info}`;
itemImg.src = xboxsx.capa;
itemTitle.innerHTML = `${xboxsx.nome}`;
itemstars.innerHTML = `${xboxsx.avaliacao}`;
itemPrice.innerHTML = `R$ ${xboxsx.preco},00`;
itemDescription.innerHTML = `${xboxsx.descricao}`;
itemDestail.innerHTML = `<li>${xboxsx.detalhe}</li>`;
imgCart.src = xboxsx.capa;
priceCart.innerHTML = `R$ ${xboxsx.preco},00`;


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
xboxSX();
}



//CONSOLE XBOX SS
if(getJogo === "xboxss"){
    function xboxSS(){
    
        const xboxss = {
            //INFO DA PÁGINA
           info: 'INÍCIO / LANÇAMENTOS / CONSOLES / CONSOLE MICROSOFT XBOX SERIES S 2020',
            //CAPA
          capa:  'https://m.media-amazon.com/images/I/81Z1xBs6GoL._AC_SX679_.jpg',
            //NOME
          nome:  "Console Microsoft Xbox Series S",
            //AVALIAÇÃO
         avaliacao:   '4.6 (13.991 avaliações)',
            //PREÇO
         preco:   2.299,
            //DESCRIÇÃO
         descricao:   "Xbox series s, nosso xbox menor e mais elegante de todos os tempos; com taxas de quadros mais altas, tempos de carregamento mais rápidos e mundos mais ricos e dinâmicos, o xbox series s oferece desempenho e velocidade de última geração em um formato compacto e totalmente digital.",
            //DETALHES
         detalhe:   "1 Console Xbox SS."
        };
        
        
        const fotos = [
            "https://images.kabum.com.br/produtos/fotos/128561/console-microsoft-xbox-series-s-500gb-branco-rrs-00006_1601067301_g.jpg",
    
            "https://images.kabum.com.br/produtos/fotos/128561/console-microsoft-xbox-series-s-500gb-branco-rrs-00006_1601067306_g.jpg",
            
            "https://images.kabum.com.br/produtos/fotos/128561/console-microsoft-xbox-series-s-500gb-branco-rrs-00006_1601067300_g.jpg",
    
            "https://images.kabum.com.br/produtos/fotos/128561/console-microsoft-xbox-series-s-500gb-branco-rrs-00006_1601067302_g.jpg",
            
            "https://images.kabum.com.br/produtos/fotos/128561/console-microsoft-xbox-series-s-500gb-branco-rrs-00006_1601067305_g.jpg"
        ]
    
    
    infoPage.innerHTML = `${xboxss.info}`;
    itemImg.src = xboxss.capa;
    itemTitle.innerHTML = `${xboxss.nome}`;
    itemstars.innerHTML = `${xboxss.avaliacao}`;
    itemPrice.innerHTML = `R$ ${xboxss.preco},00`;
    itemDescription.innerHTML = `${xboxss.descricao}`;
    itemDestail.innerHTML = `<li>${xboxss.detalhe}</li>`;
    imgCart.src = xboxss.capa;
    priceCart.innerHTML = `R$ ${xboxss.preco},00`;
    
    
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
    xboxSS()
}



//PLACA DE VIDEO NVIDIA
if(getJogo === "nvidia"){
   function nvidiaRTX(){
    
    const nvidia = {
        //INFO DA PÁGINA
      info:  'INÍCIO / LANÇAMENTOS / ACESSÓRIOS / PLACA DE VIDEO NVIDIA GEFORCE RTX 4070 TI',
        //CAPA
      capa:  'https://m.media-amazon.com/images/I/71BGmiM5y3L._AC_SX425_.jpg',
        //NOME
     nome:   "Placa de Vídeo Nvidia Geforce RTX 4070 TI",
        //AVALIAÇÃO
     avaliacao:   '4.6 (11 avaliações)',
        //PREÇO
     preco:   6.106,
        //DESCRIÇÃO
     descricao:   "MEMORIA GPU AD104-400 Process 4 CUDA Cores 7680 Idle Board Power N/A Max Board Power 285W Power Connectors PCIe Gen5 16-pin connector Idle GPU Temperature N/A Max GPU Temperature N/A Size 12GB Type GDDR6X Memory Width 192-bit Memory Bandwidth 504 Interface PCI-E 4.0 Dimensions(with Bracket) 336*148*62 Dimensions(without Bracket) 320*133*62 Boost Clock 2670 Over Clock O Memory Clock (effective) 21 Over Clock X 1st output DisplayPort 1.4a 2nd output DisplayPort 1.4a 3rd output DisplayPort 1.4a 4th output HDMI 2.1a 5th output Edge N/A Software SLI / Crossfire × FAN 2*92mm, 1*102mm Slot 3 FAN Control O Idle Noise Level (decibel) N/A MAX Noise Level (decibel) N/A Heatpipes / VC 8*6mm RGB Front and Top Other special features 1-Click Sync Pro DirectX DirectX 12 Windows support Windows 10/11 64-bit Minimum Power Supply 700W.",
        //DETALHES
     detalhe:   "Altura do produto: 6,2 cm."
    };
    
    
    const fotos = [
        "https://m.media-amazon.com/images/I/71M5Zsmcj5L._AC_SY355_.jpg",

        "https://m.media-amazon.com/images/I/71p7zoDISNL._AC_SY355_.jpg",
        
        "https://m.media-amazon.com/images/I/712OzK8fUKL._AC_SY355_.jpg",

        "https://m.media-amazon.com/images/I/71lx7Hr0VhL._AC_SY355_.jpg",
        
        "https://m.media-amazon.com/images/I/71HkkwOXtkL._AC_SY355_.jpg"
    ]


infoPage.innerHTML = `${nvidia.info}`;
itemImg.src = nvidia.capa;
itemTitle.innerHTML = `${nvidia.nome}`;
itemstars.innerHTML = `${nvidia.avaliacao}`;
itemPrice.innerHTML = `R$ ${nvidia.preco},00`;
itemDescription.innerHTML = `${nvidia.descricao}`;
itemDestail.innerHTML = `
<li>${nvidia.detalhe}</li>
<li>Largura do produto: 14,8 cm.</li>
<li>Peso do produto: 1,8 kg.</li>
<li>Chipset: NVIDIA.</li>
<li>Memória de vídeo: 12 GB.</li>
<li>Vel. relógio de memória: 1313 MHz.</li>
`;
imgCart.src = nvidia.capa;
priceCart.innerHTML = `R$ ${nvidia.preco},00`;


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
nvidiaRTX();
}





