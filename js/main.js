// < =============== toggele menu =============== >
let menu = document.getElementById('menu'),
    close = document.getElementById('close');
    list = document.querySelector('.list');
function toggele() {
    menu.classList.toggle('d-none')
    close.classList.toggle('d-none')
    list.classList.toggle('top-0')
}
menu.addEventListener('click',toggele)
close.addEventListener('click',toggele)
// < =============== Scroll Up && Nav Shadow =============== >
let btnScrool = document.getElementById('btnScrool'),
    navbar = document.querySelector('.navbar');
btnScrool.onclick = ()=> scroll({top:0})
onscroll = ()=>{
    if (scrollY >= 250) {
        btnScrool.classList.add('bottom-0')
        navbar.classList.add('nav-shadow')
    }else{
        btnScrool.classList.remove('bottom-0')
        navbar.classList.remove('nav-shadow')
    }
}