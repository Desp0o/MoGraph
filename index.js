let coloredNav = document.querySelector('.navbar_hidden')
let dashboard  = document.querySelector('.dashboard')
let links = document.querySelectorAll('.navbar_menu_link')

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 0){
        coloredNav.classList.add('navbar_hidden_active')
        dashboard.style.backgroundColor = '#351F65'
    }else{
        coloredNav.classList.remove('navbar_hidden_active')
        dashboard.style.backgroundColor = 'transparent'
    }
})

// byrgerMenu
let burgerMenu = document.getElementById('burgerMenu')
let overlay = document.querySelector('.overlay')

let isClicked = false

burgerMenu.onclick = () =>{
    if(!isClicked){
        isClicked = true
        burgerMenu.src = './images/xmarkSolid.svg'
        dashboard.style.right = '0'
        overlay.style.display = 'block'
    }else{
        isClicked = false
        burgerMenu.src = './images/barsSolid.svg'
        dashboard.style.right    = '-100%'
        overlay.style.display = 'none'
    }
}

links.forEach(element => {
    element.addEventListener('click', ()=>{
        isClicked = false
        dashboard.style.right    = '-100%'
        burgerMenu.src = './images/barsSolid.svg'
    })
});

overlay.onclick = () => {
    burgerMenu.src = './images/barsSolid.svg'
    isClicked = false
    dashboard.style.right    = '-100%'
    overlay.style.display = 'none'
}




let courseDiv = document.querySelector('.course_header')
let txt1 = document.querySelector('.txt1')
let txt2 = document.querySelector('.txt2')
let txt3 = document.querySelector('.txt3')
let courseList = document.querySelector('.course_list')


//text appear animation
const observer = new IntersectionObserver(entries =>{

    entries.forEach(entry =>{
        entry.target.classList.toggle("show", entry.isIntersecting)
        if(entry.isIntersecting) observer.unobserve(entry.target)
    })
         
},
{
    threshold: 0.2
})

observer.observe(courseDiv)
observer.observe(txt1)
observer.observe(txt2)
observer.observe(txt3)
observer.observe(courseList)



// text fadeout animation
let companyHeader = document.querySelector('.company_header')
let companyLogoRow1 = document.querySelector('.company_logos_row1')
let companyLogoRow2 = document.querySelector('.company_logos_row2')

const observerFade = new IntersectionObserver(entries =>{

    entries.forEach(entry =>{
        entry.target.classList.toggle("fadeout", entry.isIntersecting)
        if(entry.isIntersecting) observer.unobserve(entry.target)
    })
         
},
{
    threshold: 0.5
})

observerFade.observe(companyHeader)
observerFade.observe(companyLogoRow1)
observerFade.observe(companyLogoRow2)



