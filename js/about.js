const $ = document

// preloader

const preloader = $.querySelector('.preloaders')
const webpage = $.querySelector('.webpage')

function loadPage () {
    preloader.classList.add('hidden')
    webpage.classList.remove('hidden')
}

window.addEventListener('load',function(){
    setTimeout(() => {
        loadPage()
    }, 1000);
})

// hamburger menu

const menuIcon = $.querySelector('.menu__icon')
const navList = $.querySelector('.nav__list')
let navLinks = $.querySelectorAll('.nav__link')

navLinks.forEach(function(link){
    link.addEventListener('click',function(){
        closeList()
    })
})

menuIcon.addEventListener('click',function(){
    menuIcon.classList.toggle('active')
    navList.classList.toggle('active')
})

// close list on click on empty page

document.addEventListener('click' , (e) => {
    if(e.target !== menuIcon && e.target !== menuIcon.parentNode) {
        closeList()
    }
})

function closeList () {
    menuIcon.classList.remove('active')
    navList.classList.remove('active')
}

// page scrolled and back to top button

const navbar = $.querySelector('.navbar')
const backToTopButton = $.querySelector('.back__to-top')

backToTopButton.addEventListener('click',function(){
    window.scrollTo(0,0)
})

function pageScroll () {
    let scrollTop = window.scrollY

    if(scrollTop > 0) {
        navbar.classList.add('scrolled')
        backToTopButton.classList.add('show')
    } else {
        navbar.classList.remove('scrolled')
        backToTopButton.classList.remove('show')
    }
}

window.addEventListener('scroll',pageScroll)

// infos progressbar

const circules = $.querySelectorAll('.circule')

setTimeout(loadbars,1000)

function loadbars (){
    circules.forEach(function(circule){
        let progressbar = circule.querySelector('.circular__progress')
        let progressValue = circule.querySelector('.progress__value')
        let progressEndValue = progressbar.dataset.target

        let progressStartValue = 0

        let myInterval = setInterval(() => {
            progressStartValue++
            
            progressValue.innerHTML = progressStartValue + '%'
            progressbar.style.background = `conic-gradient(yellow ${progressStartValue * 3.6}deg ,transparent 0)`
     
            if(progressStartValue == progressEndValue) {
                clearInterval(myInterval)
            }
        }, 25);
    })
}

const aboutBoxItem = $.querySelectorAll('.box__item-link button')
const boxItemTxt = $.querySelector('.box__item-txt')

console.log(boxItemTxt);

aboutBoxItem.forEach(function(btn){
    btn.addEventListener('click',function(e){
        $.querySelector('.active_btn').classList.remove('active_btn')
        btn.classList.add('active_btn')
    
        if(e.target.id === 'about'){
            boxItemTxt.classList.add('fade')
            boxItemTxt.innerHTML = 'Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna';
            boxItemTxt.addEventListener('animationend',function(){
                boxItemTxt.classList.remove('fade')
            })
        } else if (e.target.id === 'choose'){
            boxItemTxt.classList.add('fade')
            boxItemTxt.innerHTML = 'Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod.';
            boxItemTxt.addEventListener('animationend',function(){
                boxItemTxt.classList.remove('fade')
            })
        }
    })
})