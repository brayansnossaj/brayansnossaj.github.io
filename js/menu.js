const menu = document.querySelector('.menu')
const navegation_menu= document.querySelector('.navegation-menu')


menu.addEventListener('click',()=>{
    navegation_menu.classList.toggle("spread")
})

window.addEventListener('click',e=>{
    if(navegation_menu.classList.contains('spread') && e.target != navegation_menu && e.target !=menu){
        navegation_menu.classList.toggle("spread")
    }
}
)