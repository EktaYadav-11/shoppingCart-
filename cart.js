let openshopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
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
        image: 'img 7.jpg',
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
let listcards =[]; 
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
function addToCard(key){
    if (listCard[key]==null){
        listCard[key]= product[key];
        listCard[key].quantity=1;
    }
    reloadCard();
}

function reloadCard(){
    listCard.innerHTML ='';
    let count = 0;
    let totalPrice = 0;
    listCard.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
         
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML =`
            <div><img src="image/${value.image}"/></div>
            <div>${value.name}</div>
            <div>${value.price.toLocaleString()}</div>            
            
            <div>
            <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
            <div class="count">${value.quantity}</div>
            <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
            </div>
            `;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText= count;

}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCard[key];

    }else{
        listCard[key].quantity = quantity;
        listCard[key].price = quantity*product[key].price;
    }

    reloadCard();

}