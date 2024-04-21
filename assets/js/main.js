/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
})

/* HOME*/
sr.reveal('.content', {origin:'right', delay: 400})
sr.reveal('footer',{delay:200})

/* ABOUT*/
sr.reveal('.about-image', {delay: 200})

sr.reveal('.about-text', {delay: 500})

/* SKILLS*/
sr.reveal('.skills', {})
sr.reveal('.skill', {distance: '20px', delay: 300, interval: 100})


/* PRODUCTS*/
sr.reveal('.products-card',{delay:600,interval:100})
/*CARD*/

sr.reveal('.card', {delay:600 ,interval: 300})

/* CONTACT*/
sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', {interval: 200})
sr.reveal('.contact__input', {delay: 400})
sr.reveal('.contact-button', {delay: 600})
sr.reveal('.contact-social', {delay:700,interval:300})



