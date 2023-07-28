
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


//CONSOLES
const ps5 = document.getElementById('ps5');
const ps4 = document.getElementById('ps4');
const xboxsx = document.getElementById('xboxsx');
const xboxss = document.getElementById('xboxss');
const nvidia = document.getElementById('nvidia');

ps5.addEventListener('click', ()=> {
  localStorage.clear();
  localStorage.setItem("jogo", "ps5");
})


ps4.addEventListener('click', ()=> {
  localStorage.clear();
  localStorage.setItem("jogo", "ps4");
})


xboxsx.addEventListener('click', ()=> {
  localStorage.clear();
  localStorage.setItem("jogo", "xboxsx");
})


xboxss.addEventListener('click', ()=> {
  localStorage.clear();
  localStorage.setItem("jogo", "xboxss");
})


nvidia.addEventListener('click', ()=> {
  localStorage.clear();
  localStorage.setItem("jogo", "nvidia");
})





