 /* //CARROSEL
(function() {
  const imgs = document.getElementById('slider');
  const img = document.querySelectorAll('#slider img');
  const imgWidth = document.querySelector('#slider img');

let idy = 0;

function carrosel() {
    idy++;
    if(idy > img.length -1) {
        idy = 0;
    }
    imgs.style.transform = `translateX(${-idy * imgWidth.width}px)`;
};

setInterval(carrosel, 3000);
})(); 


// MENU HAMBURGER
(function () {
const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");
const rolagem = document.querySelector(".overflow__hidden");
const blur = document.querySelector('.blurred')
  
  hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    blur.classList.toggle('active');
    navMenu.classList.toggle('active');
    rolagem.classList.toggle('active');
  });
})();

*/



//JOGOS
const jogoGow = document.getElementById('jogo-gow');
const jogoSpiderMan = document.getElementById('jogo-spider-man');
const jogoEldenRing = document.getElementById('jogo-elden-ring');
const jogoDiablo = document.getElementById('jogo-diablo');
const jogoMk1 = document.getElementById('jogo-mk1');
const jogoFifa23 = document.getElementById('jogo-fifa23');
const jogoTekken8 = document.getElementById('jogo-tekken8');
const jogoStreetFighter6 = document.getElementById('jogo-street-fighter6');


jogoGow.addEventListener('click', ()=> {
  localStorage.clear("jogo");
  localStorage.setItem("jogo", "godOfWar");
});


jogoSpiderMan.addEventListener('click', ()=> {
  localStorage.clear("jogo");
  localStorage.setItem("jogo", "spiderMan");
});


jogoEldenRing.addEventListener('click', ()=> {
  localStorage.clear();
  localStorage.setItem("jogo", "eldenRing");
})


jogoDiablo.addEventListener('click', ()=> {
  localStorage.clear();
  localStorage.setItem("jogo", "diabloIV");
})


jogoMk1.addEventListener('click', ()=> {
  localStorage.clear();
  localStorage.setItem("jogo", "mk1");
})


jogoFifa23.addEventListener('click', ()=> {
  localStorage.clear();
  localStorage.setItem("jogo", "fifa23");
})


jogoTekken8.addEventListener('click', ()=> {
  localStorage.clear();
  localStorage.setItem("jogo", "tekken8");
})


jogoStreetFighter6.addEventListener('click', ()=> {
  localStorage.clear();
  localStorage.setItem("jogo", "streetFighter6");
})





  











