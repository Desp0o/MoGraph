let coloredNav = document.querySelector('.navbar_hidden')

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 0){
        coloredNav.classList.add('navbar_hidden_active')
    }else{
        coloredNav.classList.remove('navbar_hidden_active')
    }
})







let courseDiv = document.querySelector('.course_header')
let txt1 = document.querySelector('.txt1')
let txt2 = document.querySelector('.txt2')
let txt3 = document.querySelector('.txt3')
let courseList = document.querySelector('.course_list')


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


