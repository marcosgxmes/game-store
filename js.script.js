
let btn = document.querySelector('.toggle');
let icon = btn.querySelector('.fa-gamepad');

btn.onclick = function() {
    if (icon.classList.contains('fa-gamepad')) {
        icon.classList.replace('fa-close');
    } else { 
        icon.classList.replace ('fa-gamepad');
    }
} 


function clickMenu() {
if (itens.style.display == 'block') {
    itens.style.display = 'none'
}
else {
    itens.style.display = 'block'
}
}
