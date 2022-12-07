let coloredNav = document.querySelector('.navbar_hidden')

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 0){
        coloredNav.classList.add('navbar_hidden_active')
    
        console.log('hey');
    }else{
        coloredNav.classList.remove('navbar_hidden_active')
    }
})