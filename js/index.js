//MENU HAMBURGUER
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


// CARROSEL
const imgs = document.getElementById('slider');
const img = document.querySelectorAll('#slider img');
const imgWidth = document.querySelector('#slider img').width;

let idy = 0;

function carrosel() {
    idy++;
    if(idy > img.length -1) {
        idy = 0;
    }
    imgs.style.transform = `translateX(${-idy * imgWidth}px)`;
};

setInterval(carrosel, 3000);


