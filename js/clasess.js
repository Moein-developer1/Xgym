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

// working hours

let daysPlan = {
    monday : {powerlifting : 'JOHN DEO' , bodybuilding : 'JAMES TAYLOR' , cardioprogram : 'JACK SPARROW' , 
    weightloose : 'ROBERT SMITH' , fitnessprogram : 'ADAM PHILLIPS' , crossfitclass : 'JAMES ALIEN' ,
    musclebuilding : 'PETTER JOHN' , yogaclass: 'JESSY REO'},
    
    tuesday : {powerlifting : 'JAMES TAYLOR' , bodybuilding : 'ROBERT SMITH' , cardioprogram : 'JAMES ALIEN' , 
    weightloose : 'JESSY REO' , fitnessprogram : 'JOHN DEO' , crossfitclass : 'ADAM PHILLIPS' ,
    musclebuilding : 'PETTER JOHN' , yogaclass: 'JOHN DEO'},

    wednesday : {powerlifting : 'ADAM PHILLIPS' , bodybuilding : 'JESSY REO' , cardioprogram : 'PETTER JOHN' , 
    weightloose : 'JESSY REO' , fitnessprogram : 'JAMES ALIEN' , crossfitclass : 'ROBERT SMITH' ,
    musclebuilding : 'JAMES TAYLOR' , yogaclass: 'JACK SPARROW'},

    thursday : {powerlifting : 'JOHN DEO' , bodybuilding : 'JAMES TAYLOR' , cardioprogram : 'JACK SPARROW' , 
    weightloose : 'ROBERT SMITH' , fitnessprogram : 'ADAM PHILLIPS' , crossfitclass : 'JAMES ALIEN' ,
    musclebuilding : 'PETTER JOHN' , yogaclass: 'JESSY REO'},

    friday : {powerlifting : 'JAMES TAYLOR' , bodybuilding : 'ROBERT SMITH' , cardioprogram : 'JAMES ALIEN' , 
    weightloose : 'JESSY REO' , fitnessprogram : 'JOHN DEO' , crossfitclass : 'ADAM PHILLIPS' ,
    musclebuilding : 'PETTER JOHN' , yogaclass: 'JOHN DEO'},

    saturday : {powerlifting : 'ADAM PHILLIPS' , bodybuilding : 'JESSY REO' , cardioprogram : 'PETTER JOHN' , 
    weightloose : 'JESSY REO' , fitnessprogram : 'JAMES ALIEN' , crossfitclass : 'ROBERT SMITH' ,
    musclebuilding : 'JAMES TAYLOR' , yogaclass: 'JACK SPARROW'},

    sunday: {powerlifting : 'JOHN DEO' , bodybuilding : 'JAMES TAYLOR' , cardioprogram : 'JACK SPARROW' , 
    weightloose : 'ROBERT SMITH' , fitnessprogram : 'ADAM PHILLIPS' , crossfitclass : 'JAMES ALIEN' ,
    musclebuilding : 'PETTER JOHN' , yogaclass: 'JESSY REO'}
}



const dayButtons = $.querySelectorAll('.day button')
const classesInfos = $.querySelector('.classes__infos')
const classes = $.querySelectorAll('.classes__infos .class')


function daySelected (e) {
    $.querySelector('.active_btn').classList.remove('active_btn')
    e.target.classList.add('active_btn') 
    let day = e.target.dataset.day
    
    
    let plan = daysPlan[day]

    classesInfos.innerHTML = `<div class="class fade">
        <p class="class__time">6.00AM - 8.00AM</p>
        <p class="class__title">POWER LIFTING</p>
        <p class="class__coach">${plan.powerlifting}</p>
    </div>

    <div class="class fade">
        <p class="class__time">8.00AM - 10.00AM</p>
        <p class="class__title">BODY BUILDING</p>
        <p class="class__coach">${plan.bodybuilding}</p>
    </div>  
    <div class="class fade">
        <p class="class__time">10.00AM - 12.00PM</p>
        <p class="class__title">CARDIO PROGRAM</p>
        <p class="class__coach">${plan.cardioprogram}</p>
    </div>
    <div class="class fade">
        <p class="class__time">12.00PM - 2.00PM</p>
        <p class="class__title">WEIGHT LOOSE</p>
        <p class="class__coach">${plan.weightloose}</p>
    </div>
    <div class="class fade">
        <p class="class__time">2.00PM - 4.00PM</p>
        <p class="class__title">FITNESS PROGRAM</p>
        <p class="class__coach">${plan.fitnessprogram}</p>
    </div>
    <div class="class fade">
        <p class="class__time">4.00PM - 6.00PM</p>
        <p class="class__title">CROSSFIT CLASS</p>
        <p class="class__coach">${plan.crossfitclass}</p>
    </div>
    <div class="class fade">
        <p class="class__time">6.00PM - 8.00PM</p>
        <p class="class__title">MUSCLE BUILDING</p>
        <p class="class__coach">${plan.musclebuilding}</p>
    </div>
    <div class="class fade">
        <p class="class__time">8.00PM - 10.00PM</p>
        <p class="class__title">YOGA CLASS</p>
        <p class="class__coach">${plan.yogaclass}</p>
    </div>`;
}

dayButtons.forEach(function(btn){
    btn.addEventListener('click',daySelected)
})