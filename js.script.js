

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


let quantBtn = document.querySelector(".produto_qnt_princ");
let itemQuant2 = document.getElementById('totalItens2');
let subTotal = document.getElementById('subTotal');
let removeItem = document.getElementById('plus');
let itemQuant = document.getElementById('totalItens');
let addItem = document.getElementById('minus');
let total = document.getElementById('res');



const hamburguer3 = document.querySelector(".hamburguer3");
const cartMenu = document.getElementById('cart');
const overlay = document.getElementById('carrinho');
const addCarrinho = document.getElementById('addCarrinho');
const btnCart = document.getElementById('btn-cart');

cartMenu.addEventListener('click', () => {
    overlay.classList.toggle('active');
    rolagem.classList.toggle('active');
  
    itemQuant2.value = itemQuant.value;

let x11 = 307;

let peep = parseInt(itemQuant2.value * x11);
let xxx = peep;

subTotal.innerHTML = `<strong id="subtotal">Subtotal</strong> R$ ${xxx},00`
  total.innerHTML = `R$ ${xxx},00`;


addItem.addEventListener('click', () => {
  let n1 = 307;
  let n2 = itemQuant2.value;
  let n3 = parseInt(n1 * n2)
  let n4 = n3
  
  subTotal.innerHTML = `<strong id="subtotal">Subtotal</strong> R$ ${n4},00`
  total.innerHTML = `R$ ${n4},00`;
  });



removeItem.addEventListener('click', () => {
  let n1 = 307;
  let n2 = itemQuant2.value;
  let n3 = parseInt(n1 * n2)
  let n4 = n3
  
  subTotal.innerHTML = `<strong id="subtotal">Subtotal</strong> R$ ${n4},00`
  total.innerHTML = `R$ ${n4},00`;
    
});

});

hamburguer3.addEventListener('click', () => {
    overlay.classList.toggle('active');
    rolagem.classList.toggle('active');

    itemQuant.value = itemQuant2.value;
});

addCarrinho.addEventListener('click', () => {
overlay.classList.toggle('active');
rolagem.classList.toggle('active');

itemQuant2.value = itemQuant.value;

let x11 = 307;

let peep = parseInt(itemQuant2.value * x11);
let xxx = peep;

subTotal.innerHTML = `<strong id="subtotal">Subtotal</strong> R$ ${xxx},00`
  total.innerHTML = `R$ ${xxx},00`;


addItem.addEventListener('click', () => {
  let n1 = 307;
  let n2 = itemQuant2.value;
  let n3 = parseInt(n1 * n2)
  let n4 = n3
  
  subTotal.innerHTML = `<strong id="subtotal">Subtotal</strong> R$ ${n4},00`
  total.innerHTML = `R$ ${n4},00`;
  });



removeItem.addEventListener('click', () => {
  let n1 = 307;
  let n2 = itemQuant2.value;
  let n3 = parseInt(n1 * n2)
  let n4 = n3
  
  subTotal.innerHTML = `<strong id="subtotal">Subtotal</strong> R$ ${n4},00`
  total.innerHTML = `R$ ${n4},00`;
});

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




//TROCAR IMAGENS

let imgPrincipal = document.getElementById('main-img');

let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let img4 = document.getElementById('img4');
let img5 = document.getElementById('img5');

const fotos = [img1, img2, img3, img4, img5];


function trocarImg1() {
if(fotos[0].src == img1.src) {
  imgPrincipal.src = img1.src
}
};

function trocarImg2() {
if(fotos[1].src == img2.src) {
  imgPrincipal.src = img2.src
}
};

function trocarImg3() {
if(fotos[2].src == img3.src) {
  imgPrincipal.src = img3.src
}
};

function trocarImg4() {
if(fotos[3].src == img4.src) {
  imgPrincipal.src = img4.src
}
};

function trocarImg5() {
if(fotos[4].src == img5.src) {
  imgPrincipal.src = img5.src
}
};