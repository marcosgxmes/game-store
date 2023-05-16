let btn = document.querySelector(".toggle");
let icon = btn.querySelector(".fa-bars");

btn.onclick = function() {
    if (icon.classList.contains("fa-bars")) {
        icon.classList.replace("fa-bars", "fa-times");
    } else { 
        icon.classList.replace("fa-times", "fa-bars");

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
