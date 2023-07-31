
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




// ICON CARRINHO
const cartMenu = document.getElementById('cart');

//FUNDO ESCURO
const overlay = document.getElementById('carrinho');

// BOTAO ADD CARRINHO
const addCarrinho = document.getElementById('addCarrinho');

// CONTINUAR A COMPRAR
const btnCart = document.getElementById('btn-cart');

// CONTINUAR A COMPRAR 2
const btnCart2 = document.getElementById('btn-cart2');


  
  let total = document.getElementById('subtotal').innerHTML;
  const convert = Number(total)
  let totalItem = document.getElementById('totalItens2').value;
  const addItem = document.getElementById('plus');
  const removeItem = document.getElementById('minus');

 


//ADD ITEM
addItem.addEventListener('click', ()=> {
  totalItem ++;
  total.innerHTML = `R$ ${convert * totalItem}`
});


//REMOVER ITEM
removeItem.addEventListener('click', ()=> {
  totalItem --;
  totalItem <= 0 ? totalItem = 1 :  totalItem;
  
  total.innerHTML = `R$ ${convert * totalItem}` 
});


addCarrinho.addEventListener('click', () => {
  overlay.classList.toggle('active');
});






















