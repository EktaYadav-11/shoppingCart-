let openshopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector('.list');
let listcard = document.querySelector('.listcard');
let body = document.querySelector('body');
let total = document.querySelector('total');
let quantity = document.querySelector('.quantity');

openshopping.addEventListener('click' , ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})  

let product= [
    {
        id: 1,
        name: 'product name 1',
        image: 'img1.jpg',
        price:100

    },
    {
        id: 2,
        name: 'product name 2',
        image: 'img 2.jpg',
        price:10020

    },
    {
        id: 3,
        name: 'product name 3',
        image: 'img 3.jpg',
        price:10300

    },
    {
        id: 4,
        name: 'product name 4',
        image: 'img 4.jpg',
        price:10040

    },
    {
        id: 5,
        name: 'product name 5',
        image: 'img 5.jpg',
        price:10500

    },
    {
        id: 6,
        name: 'product name 6',
        image: 'img 6.jpg',
        price:10600

    },
];
// let listcards =[];
function initApp(){
    product.forEach((value, key)=> {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML=`
        <img src="./image/${value.image}"/>
        <div class="title">${value.name}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        <button onclick="addToCard(${key})">add to card</button>
        
        `;
        list.appendChild(newDiv);
    })
}
initApp();