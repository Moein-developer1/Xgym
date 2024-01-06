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


// BMI Calculator

const weightInput = $.querySelector('#weight')
const weightValue = $.querySelector('#weight-val')
const heightInput = $.querySelector('#height')
const heightValue = $.querySelector('#height-val')
const result = $.querySelector('#result')
const category = $.querySelector('#category')


function bmiCalculate() {
    let weightInputValue = weightInput.value
    let heightInputValue = heightInput.value

    weightValue.innerHTML = weightInputValue + ' kg'
    heightValue.innerHTML = heightInputValue + ' cm'

    let heightValueRounded = heightInputValue / 100

    let formulaBMI = (weightInputValue / (heightValueRounded * heightValueRounded)).toFixed(2)

    result.innerHTML = formulaBMI

    if(formulaBMI < 18.5){
        category.innerHTML = 'Overweight'
        result.style.color = '#ffca4d'
    } else if (formulaBMI >= 18.5 && formulaBMI <= 24.9){
        category.innerHTML = 'Normalweight'
        result.style.color = '#0be881'
    } else if (formulaBMI >= 25 && formulaBMI <= 29.9 ){
        category.innerHTML = 'Overweight'
        result.style.color = '#ffca4d'
    } else {
        category.innerHTML = 'Obese'
        result.style.color = '#ff5e4d'
    }
}

weightInput.addEventListener('input',bmiCalculate)
heightInput.addEventListener('input',bmiCalculate)
