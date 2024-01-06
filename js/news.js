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

// blog pagination

let blogsList = [
    {id: 1 ,title: '5 Exercises for a six pack' , text: 'Donec nec sapien in urna fermentum ornare. Morbi vel ultrices leo. Sed eu turpis eu arcu vehicula fringilla ut vitae orci. Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique id vitae massa. Proin vulputate congue rutrum. Fusce lobortis a enim eget tempus.' ,img: 'images/blog-img1.jpg'},
    {id: 2 ,title: 'Do you want strong arms? Here’s our tips' , text: 'Gingerbread bonbon pudding biscuit sugar plum. Donut caramels cake danish lollipop. Chocolate bar jelly dessert candy canes. Sweet sesame snaps cookie. Croissant bear claw chocolate powder jelly beans ice cream. Bear claw brownie icing apple pie. Ice cream marshmallow tiramisu cotton candy brownie tiramisu jujubes. Croissant cheesecake tiramisu wafer powder pie macaroon.' ,img: 'images/blog-img2.jpg'},
    {id: 3 ,title: 'Fitness Competition for begginers' , text: 'Marshmallow candy canes marshmallow caramels chocolate cake liquorice jelly. Gummies caramels jelly beans chupa chups brownie bonbon. Jujubes jujubes sesame snaps powder. Macaroon sesame snaps muffin cake marzipan topping muffin powder pastry. Macaroon sesame snaps topping. Sweet apple pie jelly tart. Cookie apple pie sweet roll pastry. Cookie chocolate chocolate bar sweet gummies.' ,img: 'images/blog-img3.jpg'},
    {id: 4 ,title: '3 Exercises for a big chest' , text: 'Cupcake ice cream gummies dessert tiramisu. Cupcake pie cake apple pie jelly-o brownie oat cake soufflé. Candy canes chocolate cake candy canes jelly beans lollipop. Dragée candy canes jujubes pastry cheesecake. Candy canes apple pie powder. Caramels dessert caramels sweet roll danish jelly-o jelly-o powder liquorice. Biscuit pie sugar plum. Oat cake jelly-o marshmallow pastry dragée gummi bears topping. Bear claw ice cream lollipop danish candy jelly-o jelly-o.' ,img: 'images/blog-img4.jpg'},
    {id: 5 ,title: 'You want a good back? so read this blog' , text: 'Chocolate sugar plum jelly-o sweet roll gummi bears oat cake powder pastry macaroon. Soufflé cheesecake apple pie jelly beans donut candy canes sweet macaroon. Gingerbread topping dessert bonbon sweet roll oat cake oat cake halvah. Cake chocolate cake chocolate sugar plum candy. Marshmallow brownie sweet dessert croissant chocolate fruitcake sweet donut. Cupcake muffin halvah.' ,img: 'images/blog-img5.jpg'},
    {id: 6 ,title: 'How we can to do correct barfix' , text: 'Gingerbread bonbon pudding biscuit sugar plum. Donut caramels cake danish lollipop. Chocolate bar jelly dessert candy canes. Sweet sesame snaps cookie. Croissant bear claw chocolate powder jelly beans ice cream. Bear claw brownie icing apple pie. Ice cream marshmallow tiramisu cotton candy brownie tiramisu jujubes. Croissant cheesecake tiramisu wafer powder pie macaroon.' ,img: 'images/blog-img6.jpg'},
    {id: 7 ,title: 'Whow is the best coach?' , text: 'Sugar plum gummies cupcake gingerbread sweet. Pastry topping cake candy canes marshmallow caramels chupa chups. Halvah dessert tiramisu brownie lemon drops tootsie roll carrot cake. Cake soufflé oat cake cotton candy. Lollipop cake sweet roll croissant danish. Cake dessert tootsie roll cake liquorice sugar plum biscuit macaroon pie. Bonbon cookie cotton candy bear claw wafer.' ,img: 'images/blog-img7.jpg'},
]

const listItemsContainer = $.querySelector('.blogs')
const paginationButtonsContainer = $.querySelector('.pagination__buttons')

let currentPage = 1
let itemCount = 3

function displayItems (allItems,itemsContainer,currentPage,itemCount) {

    itemsContainer.innerHTML = ''

    let endIndex = currentPage * itemCount
    let firstIndex = endIndex - itemCount

    let itemsFragment = $.createDocumentFragment()

    let allItemsSliced = allItems.slice(firstIndex,endIndex)
    
    let blogItem;
    allItemsSliced.forEach(function(item){
        blogItem = $.createElement('div')
        blogItem.className = 'blog__item'

        blogItem.innerHTML = `
        <img class="blog__img" src="${item.img}" alt="">
                        
        <h2 class="blog__title">${item.title}</h2>
        
        <div class="blog__info">
            <div>
                <img src="images/edit.png" alt="">
                <span>By Admin</span>
            </div>
            <div>
                <img src="images/layout.png" alt="">
                <span>In Workout</span>
            </div>
            <div>
                <img src="images/profile.png" alt="">
                <span>Comments</span>
            </div>
        </div>
        
        <div class="blog__content">
            <p>${item.text}</p>
        </div>
        
        <button class="blog__btn">Read more</button>
        `;

        itemsFragment.append(blogItem)
    })

    itemsContainer.append(itemsFragment)

}

function setupPaginationButton (allItems,buttonsContainer,itemCount) {
    let pageCount = Math.ceil(allItems.length / itemCount)

    let btn;

    for (var i = 1 ; i < pageCount + 1 ; i++ ){
        btn = paginationButtonGenerator(i)
        
        buttonsContainer.append(btn)
    }
}

function paginationButtonGenerator (pages) {
    let button = $.createElement('button')
    button.innerHTML = pages

    if(pages === currentPage){
        button.classList.add('active_btn')
    }

    button.addEventListener('click',function(){
        currentPage = pages

        displayItems(blogsList,listItemsContainer,currentPage,itemCount)
    
        $.querySelector('.active_btn').classList.remove('active_btn')

        button.classList.add('active_btn')
    
        window.scrollTo(0,0)
    })

    return button
}

displayItems(blogsList,listItemsContainer,currentPage,itemCount)
setupPaginationButton(blogsList,paginationButtonsContainer,itemCount)