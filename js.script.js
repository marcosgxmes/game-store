
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
  

/*
let btn = document.getElementById('joy');
let icon = btn.document.getElementById('burguer');

btn.onclick = function clickMenu() {
if (itens.style.display == 'block') {
    itens.style.display = 'none'
}
else {
    itens.style.display = 'block'
}
};

/*let btn = document.querySelector('.toggle');
let icon = btn.querySelector('.fa-gamepad');

btn.onclick = function() {
    if (icon.classList.contains('fa-gamepad')) {
        icon.classList.replace('fa-close');
    } else { 
        icon.classList.replace ('fa-gamepad');
    }
} */
