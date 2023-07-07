
//TROCAR IMAGENS

let imgPrincipal = document.getElementById('main-img');

let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let img4 = document.getElementById('img4');
let img5 = document.getElementById('img5');

const fotos = [img1, img2, img3, img4, img5];


function trocarImg1() {
if(fotos[0].src == fotos[0].src) {
  imgPrincipal.src = fotos[0].src
}
};

function trocarImg2() {
if(fotos[1].src == fotos[1].src) {
  imgPrincipal.src = fotos[1].src
}
};

function trocarImg3() {
if(fotos[2].src == fotos[2].src) {
  imgPrincipal.src = fotos[2].src
}
};

function trocarImg4() {
if(fotos[3].src ==fotos[3].src) {
  imgPrincipal.src = fotos[3].src
}
};

function trocarImg5() {
if(fotos[4].src == fotos[4].src) {
  imgPrincipal.src = fotos[4].src
}
};


//TROCAR ICONE DO MENU


function change (iconID){

if(document.getElementById(iconID).className=="fa fa-bars") {
document.getElementById(iconID).className = "fa fa-close";
} else {
document.getElementById(iconID).className = "fa fa-bars";

} if (itens.style.display == 'block') {
  itens.style.display = 'none'
} else {
  itens.style.display = 'block'
}
};





// ABRIR MENU RESPONSIVO

const hamburguer2 = document.querySelector(".hamburguer2");
const navMenu = document.querySelector(".nav-menu");
const rolagem = document.querySelector(".overflow__hidden");


hamburguer2.addEventListener("click", () => {

hamburguer2.classList.toggle('active');
navMenu.classList.toggle('active');
rolagem.classList.toggle('active');
});
 


// ABRIR POP UP CARRINHO


const hamburguer3 = document.querySelector(".hamburguer3");
const cartMenu = document.getElementById('cart');
const overlay = document.getElementById('carrinho');
const addCarrinho = document.getElementById('addCarrinho');
const btnCart = document.getElementById('btn-cart');

let quantBtn = document.querySelector(".produto_qnt_princ");
let itemQuant2 = document.getElementById('totalItens2');

let removeItem = document.getElementById('plus');
let itemQuant = document.getElementById('totalItens');
let addItem = document.getElementById('minus');

let preco = document.querySelector('.preco');
let res = document.querySelector('.res');
let total = document.getElementById('subtotal');


console.log(parseFloat(preco.textContent.slice(2))+0.9)



addCarrinho.addEventListener('click', () => {
overlay.classList.toggle('active');
rolagem.classList.toggle('active');

itemQuant2.value = itemQuant.value;



res.innerHTML = `<strong id="subtotal">Total</strong> R$ ${preco},00`



addItem.addEventListener('click', () => {
  let n1 = 307;
  let n2 = itemQuant2.value;
  let n3 = parseInt(n1 * n2)
  let n4 = n3
  
  subTotal.innerHTML = `<strong id="subtotal">Total</strong> R$ ${n4},00`
  });



removeItem.addEventListener('click', () => {
  let n1 = 307;
  let n2 = itemQuant2.value;
  let n3 = parseInt(n1 * n2)
  let n4 = n3
  
  subTotal.innerHTML = `<strong id="subtotal">Total</strong> R$ ${n4},00`
});

});

cartMenu.addEventListener('click', () => {
  overlay.classList.toggle('active');
  rolagem.classList.toggle('active');

  itemQuant2.value = itemQuant.value;


subTotal.innerHTML = `<strong id="subtotal">Total</strong> R$ ${preco},00`
total.innerHTML = `R$ ${preco},00`;



addItem.addEventListener('click', () => {
let n1 = 307;
let n2 = itemQuant2.value;
let n3 = parseInt(n1 * n2)
let n4 = n3

subTotal.innerHTML = `<strong id="subtotal">Total</strong> R$ ${n4},00`
total.innerHTML = `R$ ${n4},00`;
});



removeItem.addEventListener('click', () => {
let n1 = 307;
let n2 = itemQuant2.value;
let n3 = parseInt(n1 * n2)
let n4 = n3

subTotal.innerHTML = `<strong id="subtotal"Total</strong> R$ ${n4},00`
total.innerHTML = `R$ ${n4},00`;
  
});

});

hamburguer3.addEventListener('click', () => {
  overlay.classList.toggle('active');
  rolagem.classList.toggle('active');
  itemQuant.value = itemQuant2.value;
});


btnCart.addEventListener('click', () => {
overlay.classList.toggle('active');
rolagem.classList.toggle('active');
itemQuant.value = itemQuant2.value;
});


// BOTAO QUANTIDADE 


function process_geral(quant, element){
var classValue = parseInt(element.parentElement.querySelector('.quanti').value);
classValue+=quant;
  
if(classValue < 1){
    element.parentElement.querySelector("input.quanti").value = 1;
}else{ 
    element.parentElement.querySelector("input.quanti").value = classValue;    
}
};



