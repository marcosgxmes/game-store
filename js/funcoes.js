
//MENU HAMBURGER
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


 // BOTAO QUANTIDADE 
function process_geral(quant, element){
  var classValue = parseInt(element.parentElement.querySelector('.quanti').value);
  classValue += quant;
    
  if(classValue < 1){
      element.parentElement.querySelector("input.quanti").value = 1;
  }else{ 
      element.parentElement.querySelector("input.quanti").value = classValue;    
  }
};

const overflow = document.querySelector('.overflow__hidden')
const overlay = document.getElementById('carrinho');
const btnCart = document.getElementById('btn-cart');
const btnCart2 = document.getElementById('btn-cart2');
const closeCart = document.querySelector('.hamburguer3');
const closeCart2 = document.querySelector('.hamburguer4');
const lixeira = document.getElementById('lixeira');
const deleted = document.getElementById('delete')



//FECHAR CARRINHO
closeCart.addEventListener('click', ()=> {
  overflow.classList.toggle('active');
  overlay.classList.toggle('active');
});


//FECHAR CARRINHO QUANDO VAZIO
closeCart2.addEventListener('click', ()=> {
  deleted.classList.toggle('active');
  overflow.classList.toggle('active');
});


lixeira.addEventListener('click', () => {
  overlay.classList.toggle('active');
  deleted.classList.toggle('active');
})


//CONTINUAR A COMPRAR
btnCart.addEventListener('click', ()=> {
  overflow.classList.toggle('active');
  overlay.classList.toggle('active');
});


//CONTINUAR A COMPRAR 2
btnCart2.addEventListener('click', ()=> {
  deleted.classList.toggle('active');
  overflow.classList.toggle('active');
 
});