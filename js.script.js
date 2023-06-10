//TROCAR ICONE
    function change (iconID){
    if(document.getElementById(iconID).className=="fa fa-gamepad") {
      document.getElementById(iconID).className = "fa fa-close";
      
    } else {
      document.getElementById(iconID).className = "fa fa-gamepad";
     
      
    } if (itens.style.display == 'block') {
        itens.style.display = 'none'
    }
    else {
        itens.style.display = 'block'
    }
    };

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
    let gowMain = "imagens/gow_game.jpg";
    let gow1 = "imagens/gow_imagem1.webp";
    let gow2 = "imagens/gow_imagem2.webp";
    let gow3 = "imagens/gow_imagem3.webp";

    function trocar3() {
      document.getElementById('main-img').src = gow1;
      let aux = gowMain;
      gowMain = gow1;
      gow1 = aux;

    };

    function trocar4() {
      document.getElementById('main-img').src = gow2;
      
    };

    function trocar5() {
      document.getElementById('main-img').src = gow3;
      
    };

    //TROCAR IMAGEM PS4

    let ps4Main = "imagens/ps4box.webp";
    let ps1 = "imagens/gow3.jpg";
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





