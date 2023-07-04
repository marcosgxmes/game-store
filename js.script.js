//TROCAR ICONE
    function change (iconID){
    if(document.getElementById(iconID).className=="fa fa-bars") {
      document.getElementById(iconID).className = "fa fa-close";
      
    } else {
      document.getElementById(iconID).className = "fa fa-bars";
     
      
    } if (itens.style.display == 'block') {
        itens.style.display = 'none'
    }
    else {
        itens.style.display = 'block'
    }
    };


    // BLUR NO FUNDO AO ABRIR MENU

    function blurMenu() {

      let blurTop = document.getElementById('acesso-main');
      let blurBarra = document.getElementById('small-bar');
      let blurInfo = document.getElementById('info-page');
      let blurCompra = document.getElementById('compra');

      blurCompra.classList.toggle('active');
      blurInfo.classList.toggle('active');
      blurTop.classList.toggle('active');
      blurBarra.classList.toggle('active');

    };


    // BOTAO QUANTIDADE 

    function process_geral(quant, element){
      var classValue = parseInt(element.parentElement.querySelector('.quanti').value);
      classValue+=quant;
      //console.log(classValue); 
      if(classValue < 1){
          element.parentElement.querySelector("input.quanti").value = 1;
      }else{ 
          element.parentElement.querySelector("input.quanti").value = classValue;    
      }
  }  



//TROCAR IMAGEM PS5
    let imgAnterior = "imagens/shopping2.webp";
    let imgAtual = "imagens/ps5_gow.jpg";

    function trocar() {
      document.getElementById('main-img').src = imgAnterior;
      let aux = imgAtual;
      imgAtual = imgAnterior;
      imgAnterior = aux;

    };

    let imgP2 = "imagens/shopping3.webp";

    function trocar1() {
      document.getElementById('main-img').src = imgP2;
      

    };

    let imgP3 = "imagens/controleps5jpg.jpg";

    function trocar2() {
      document.getElementById('main-img').src = imgP3;
      

    };

    //TROCAR IMAGEM GOW


    const mG = document.getElementById('main-img');
    let gImg1 = document.getElementById('gow1')
    let gImg2 = document.getElementById('gow2')
    let gowMain = "imagens/gow-capa.jpg";
    let gow1 = "imagens/gow-img6.jpg";
    let gow2 = "imagens/god-of-war-ragnarok-watermark-screenshot-03-en-08sep21.webp";
    let gow3 =  "imagens/god-of-war-ragnarok-watermark-screenshot-11-en-08sep21.webp";
    let gow4 = "imagens/god-of-war-ragnarok-watermark-screenshot-08-en-08sep21.webp"
    let gow5 = "imagens/god-of-war-ragnarok-watermark-screenshot-12-en-08sep21.webp"

    function trocar3() {
     
      
      gImg1.addEventListener('click', mG.src = gow1 );

    
    };

    function trocar4() {
     
      document.getElementById('main-img').src = gow2;
      
    };

    function trocar5() {
     
      document.getElementById('main-img').src = gow3;
     
      
    };

    function trocar39() {
     
      document.getElementById('main-img').src = gow4;
     
      
    };

    function trocar40() {
     
      document.getElementById('main-img').src = gow5;
     
      
    };

    //TROCAR IMAGEM PS4

    let ps4Main = "imagens/god-of-war-iii-remaster-dostan-image-126.jpg";
    let ps1 = "imagens/ps4-control.jpg";
    let ps2 = "imagens/ps4_control.png";
    let ps3 = "imagens/ps444.png";

    function trocar6() {
      document.getElementById('main-img').src = ps3;
      let aux = ps4Main;
      ps4Main = ps3;
      ps3 = aux;

    };

    function trocar7() {
      document.getElementById('main-img').src = ps2;
      
    };

    function trocar8() {
      document.getElementById('main-img').src = ps1;
      
    };

    //TROCAR IMAGEM XBOX X

    let xMain = "imagens/xbox_console.jpg";
    let xbox1 = "imagens/series_x.jpg";
    let xbox2 = "imagens/xbox_x2.jpg";
    let xbox3 = "imagens/controle_xbox.jpg";

    function trocar9() {
      document.getElementById('main-img').src = xbox1;
      let aux = xMain;
      xMain = xbox1;
      xbox1 = aux;

    };

    function trocar10() {
      document.getElementById('main-img').src = xbox2;
      
    };

    function trocar11() {
      document.getElementById('main-img').src = xbox3;
      
    };

    //TROCAR IMAGEM XBOX S

    let sMain = "imagens/series_s_boxjpg.jpg";
    let xboxs1 = "imagens/series_and_control.jpg";
    let xboxs2 = "imagens/sss.png";
    let xboxs3 = "imagens/series_s_front.jpg";

    function trocar12() {
      document.getElementById('main-img').src = xboxs1;
      let aux = sMain;
      sMain = xboxs1;
      xboxs1 = aux;

    };

    function trocar13() {
      document.getElementById('main-img').src = xboxs2;
      
    };

    function trocar14() {
      document.getElementById('main-img').src = xboxs3;
      
    };

    //TROCAR IMAGEM GEFORCE

    let gMain = "imagens/rtx4070_.jpg";
    let gf1 = "imagens/rtx1.jpg"
    let gf2 = "imagens/rtx2.jpg";
    let gf3 = "imagens/rtx3.jpg";

    function trocar15() {
      document.getElementById('main-img').src = gf1;
      let aux = gMain;
      gMain = gf1;
      gf1 = aux;

    };

    function trocar16() {
      document.getElementById('main-img').src = gf2;
      
    };

    function trocar17() {
      document.getElementById('main-img').src = gf3;
      
    };

    // TROCAR IMAGEM SPIDE MAN 2


    let spiderImgMain = "imagens/spider_man2-capa.jpg"
    let spiderImg1 = "imagens/jogo-marvel-s-spider-man-2-ps5-edicao-de-lancamento_1686919358_gg.jpg";
    let spiderImg2 = "imagens/jogo-marvel-s-spider-man-2-ps5-edicao-de-lancamento_1686919361_gg.jpg";
    let spiderImg3 = "imagens/jogo-marvel-s-spider-man-2-ps5-edicao-de-lancamento_1686919354_gg.jpg"
    let spiderImg4 = "imagens/jogo-marvel-s-spider-man-2-ps5-edicao-de-lancamento_1686919363_gg.jpg"
    let spiderImg5 = "imagens/jogo-marvel-s-spider-man-2-ps5-edicao-de-lancamento_1686919356_gg.jpg"
    function trocar18() {
      document.getElementById('main-img').src = spiderImg1;
      
    };

    

    function trocar19() {
      document.getElementById('main-img').src = spiderImg2;
      

    };

    

    function trocar20() {
      document.getElementById('main-img').src = spiderImg3;
      

    };

    function trocar41() {
      document.getElementById('main-img').src = spiderImg4;
      

    };

    function trocar42() {
      document.getElementById('main-img').src = spiderImg5;
      

    };

    // ABRIR MENU RESPONSIVO
    
    const hamburguer2 = document.querySelector(".hamburguer2");
    const navMenu = document.querySelector(".nav-menu");
    const rolagem = document.querySelector(".overflow__hidden");

   

    hamburguer2.addEventListener("click", () => {
      hamburguer2.classList.toggle('active');
     
      navMenu.classList.toggle('active');

      rolagem.classList.toggle('active')
     
    });

    // TROCAR IMAGEM MK1 

    const mk1Main = document.getElementById('main-img');
    let mkImgMain = "imagens/ret-ps5-mk1-1.web";
    let mkImg1 = "imagens/mortal-kombat-1-14.jpg";
    let mkImg2 = "imagens/mortal-kombat-1-5.jpg";
    let mkImg3 =  "imagens/mortal-kombat-1-5 (1).jpg";

    function trocar21() {
     
      document.getElementById('main-img').src = mkImg1;
      let aux = mk1Main;
      mk1Main = mkImg1;
      mkImgMain = aux;

    };

    function trocar22() {
     
      document.getElementById('main-img').src = mkImg2;
      
    };

    function trocar23() {
     
      document.getElementById('main-img').src = mkImg3;
     
      
    };

    // TROCAR IMAGEM DIABLO IV

    const diabloMain = document.getElementById('main-img');
    let diabloImgMain = "imagens/diablo-iv-ps5--us--site-x9hpe2rshu.webp";
    let diabloImg1 = "imagens/diablo-iv-screen-05-en-10dec22.webp";
    let diabloImg2 = "imagens/diablo-iv-screen-12-en-17may23.webp";
    let diabloImg3 =  "imagens/diablo-iv-screen-14-en-17may23.webp";

    function trocar24() {
     
      document.getElementById('main-img').src = diabloImg1;
      let aux = diabloImgMain;
      diabloImgMain = diabloImg1;
      diabloImgMain = aux;

    };

    function trocar25() {
     
      document.getElementById('main-img').src = diabloImg2;
      
    };

    function trocar26() {
     
      document.getElementById('main-img').src = diabloImg3;
     
      
    };

    // TROCAR IMAGEM FIFA 23 

    const fifaMain = document.getElementById('main-img');
    let fifaImgMain = "imagens/fifa23_capa.jpg";
    let fifaImg1 = "imagens/fifa-23-world-cup-team-usa-screen-03-ps4-ps5-en-11nov22.webp";
    let fifaImg2 = "imagens/fifa-23-world-cup-pulisic-screen-02-ps4-ps5-en-11nov22.webp";
    let fifaImg3 =  "imagens/fifa-23-world-cup-netherlands-screen-01-ps4-ps5-en-11nov22.webp";

    function trocar27() {
     
      document.getElementById('main-img').src = fifaImg1;
      let aux = fifaImgMain;
      fifaImgMain = fifaImg1;
      fifaImgMain = aux;

    };

    function trocar28() {
     
      document.getElementById('main-img').src = fifaImg2;
      
    };

    function trocar29() {
     
      document.getElementById('main-img').src = fifaImg3;
     
      
    };


    //TROCAR IMAGEM ELDEN RING 

    const eldenMain = document.getElementById('main-img');
    let eldenImgMain = "imagens/elden_ring_capa.jpg";
    let eldenImg1 = "imagens/elden-ring-screenshot-17-en-15jun21.webp";
    let eldenImg2 = "imagens/elden-ring-screenshot-13-en-15jun21.webp";
    let eldenImg3 =  "imagens/elden-ring-screenshot-12-en-15jun21.webp";

    function trocar30() {
     
      document.getElementById('main-img').src = eldenImg1;
      let aux = eldenImgMain;
      eldenImgMain = eldenImg1;
      eldenImgMain = aux;

    };

    function trocar31() {
     
      document.getElementById('main-img').src = eldenImg2;
      
    };

    function trocar32() {
     
      document.getElementById('main-img').src = eldenImg3;
     
      
    };


    // TROCAR IMAGEM STREET FIGHTER 6

    const streetMain = document.getElementById('main-img');
    let streetImgMain = "imagens/street_fighter_capa.webp";
    let streetImg1 = "imagens/street-fighter-6-screen-23-ps4-ps5-en-21nov22.webp";
    let streetImg2 = "imagens/street-fighter-6-screen-18-ps4-ps5-en-21nov22.webp";
    let streetImg3 =  "imagens/street-fighter-6-screen-09-ps4-ps5-en-02sep22.webp";

    function trocar33() {
     
      document.getElementById('main-img').src = streetImg1;
      let aux = streetImgMain;
      streetImgMain = streetImg1;
      streetImgMain = aux;

    };

    function trocar34() {
     
      document.getElementById('main-img').src = streetImg2;
      
    };

    function trocar35() {
     
      document.getElementById('main-img').src = streetImg3;
     
      
    };


    // TROCAR IMAGEM TEKKEN 8

    const tekkenMain = document.getElementById('main-img');
    let tekkenImgMain = "imagens/tekken8_capa.webp";
    let tekkenImg1 = "imagens/tekken-8-screenshot-05-en-20sep22.webp";
    let tekkenImg2 = "imagens/tekken-8-screenshot-08-en-20sep22.webp";
    let tekkenImg3 =  "imagens/tekken-8-screenshot-07-en-20sep22.webp";

    function trocar36() {
     
      document.getElementById('main-img').src = tekkenImg1;
      let aux = tekkenImgMain;
      tekkenImgMain = tekkenImg1;
      tekkenImgMain = aux;

    };

    function trocar37() {
     
      document.getElementById('main-img').src = tekkenImg2;
      
    };

    function trocar38() {
     
      document.getElementById('main-img').src = tekkenImg3;
     
      
    };


