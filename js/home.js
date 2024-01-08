const $ = document

// preloader

const preloader = $.querySelector('.preloaders')
const webpage = $.querySelector('.webpage')

function loadPage () {
    preloader.classList.add('hidden')
    webpage.classList.remove('hidden')
}

window.addEventListener('load',function(){
    loadPage()
    sliderActions()
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

// about us buttons
 
const aboutBoxItem = $.querySelectorAll('.box__item-link button')
const boxItemTxt = $.querySelector('.box__item-txt')


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

// gym info 

const items = $.querySelectorAll('.item')

window.addEventListener('load',function(){
    this.setTimeout(function(){
        loadNumbers()
    },1000)
})

function loadNumbers () {
    items.forEach(function(item){
        let increasingPercentage = item.querySelector('.increasing_percentage')
        let toalPercentage = item.querySelector('.total_percentage')

        let p = 0

        let myInterval = setInterval(function(){
            p++
            increasingPercentage.innerHTML = p
            if(increasingPercentage.innerHTML == toalPercentage.innerHTML){
                clearInterval(myInterval)
            }
        },2)
    })
}

// clinets slider show

function sliderActions () {
    const wraper = $.querySelector('.clinets')
const carousel = $.querySelector('.clients__carousel')
const arrowBtns = $.querySelectorAll('.aroows__box span')
const firstCardWidth = $.querySelector('.client').offsetWidth
const carousalChildrens = [...carousel.children]

let isDragging = false , startX , startScrollLeft , timeoutId

let cardPreView = Math.round(carousel.offsetWidth / firstCardWidth)

carousalChildrens.slice(-cardPreView).reverse().forEach(function(card){
    carousel.insertAdjacentHTML('afterbegin',card.outerHTML)
})

carousalChildrens.slice(cardPreView).forEach(function(card){
    carousel.insertAdjacentHTML('beforeend',card.outerHTML)
})

arrowBtns.forEach(function(btn){
    btn.addEventListener('click',function(){
        if(btn.id === 'left'){
            carousel.scrollLeft += - firstCardWidth
        } else {
            carousel.scrollLeft += firstCardWidth
        }
    })
})

function autoPlay () {
    timeoutId = setInterval(function(){
        carousel.scrollLeft += firstCardWidth
    },3000)
}

autoPlay()

function dragStart (e) {
    carousel.classList.toggle('dragging')
    isDragging = true
    startX = e.pageX
    startScrollLeft = carousel.scrollLeft
}

function dragging (e) {
    if(!isDragging) return 
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX )
}

function dragStop () {
    isDragging = false
    carousel.classList.remove('dragging')
}

function infinityScroll () {
    if(carousel.scrollLeft === 0){
        carousel.classList.add('no-transition')
        carousel.scrollLeft = Math.round(carousel.scrollWidth - carousel.offsetWidth)
        carousel.classList.remove('no-transition')
        // carousel.classList.remove('no-iteration')
    } else if (Math.ceil(carousel.scrollLeft)===carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add('no-transition')
        carousel.scrollLeft = carousel.offsetWidth
        carousel.classList.remove('no-transition')
    }

    clearInterval(timeoutId)
    if(!wraper.matches(':hover')) autoPlay ();
}

carousel.addEventListener('mousedown',dragStart)
carousel.addEventListener('mousemove',dragging)
document.addEventListener('mouseup',dragStop)
carousel.addEventListener('scroll',infinityScroll)
wraper.addEventListener('mouseenter',clearInterval(timeoutId))
wraper.addEventListener('mouseleave',infinityScroll)
}