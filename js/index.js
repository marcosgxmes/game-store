 //CARROSEL
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














