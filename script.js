let botao = document.querySelector('.scrollbutton');
function subirTela (){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
function decidirBotao(){
    if (window.scrollY === 0){
        document.querySelector('.scrollbutton').style.display = 'none';
    } else{
        document.querySelector('.scrollbutton').style.display = 'block'
    }
}
window.addEventListener('scroll', decidirBotao)