import {cardsLoader} from './fetch-data.js';


let icons = document.querySelector(".icons1");
icons.innerHTML = `
<a class="login" href="/login">
    <button class="user">
        <svg width="20px" height="20px" viewBox="0 0 24 24" >
            <g fill="none" stroke="#9CA3AF" stroke-width="1.5">
                <circle cx="12" cy="9" r="3"></circle>
                <circle cx="12" cy="12" r="10"></circle>
                <path
                    stroke-linecap="round"
                    d="M17.97 20c-.16-2.892-1.045-5-5.97-5s-5.81 2.108-5.97 5">
                </path>
            </g>
        </svg>
    </button>
</a>  

`;

const cartContainer = document.createElement("span");
cartContainer.className = "cart-container";

cartContainer.innerHTML = `
    <a href="/mini-cart" class="cart-btn">
        <svg
            width="1.25em"
            height="1.25em"
            viewBox="0 0 24 24"
            fill="none"
        >
            <g fill="none" stroke="#9CA3AF" stroke-width="1.5">

                <path d="M3.864 16.455c-.858-3.432-1.287-5.147-.386-6.301S6.148 9 9.685 9h4.63c3.538 0 5.306 0 6.207 1.154s.472 2.87-.386 6.301c-.546 2.183-.818 3.274-1.632 3.91c-.814.635-1.939.635-4.189.635h-4.63c-2.25 0-3.375 0-4.189-.635c-.814-.636-1.087-1.727-1.632-3.91Z"></path>

                <path d="m19.5 9.5l-.71-2.605c-.274-1.005-.411-1.507-.692-1.886A2.5 2.5 0 0 0 17 4.172C16.56 4 16.04 4 15 4M4.5 9.5l.71-2.605c.274-1.005.411-1.507.692-1.886A2.5 2.5 0 0 1 7 4.172C7.44 4 7.96 4 9 4"></path>

                <path d="M9 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z"></path>

                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8 13v4m8-4v4m-4-4v4">
                </path>

            </g>
        </svg>
    </a>

    <span class="cart-badge">3</span>
`;
icons.appendChild(cartContainer);


let cards =[
 {
    id : 1,
    h1 : "50% Off For Your First Shopping",
    p : "Get Free Shipping on all orders over $99.00",
    button : "Shop Now",
    image : "./assets/bag-1.webp"
},
{
    id : 2,
    h1 : "50% Off For Your First Shopping",
    p : "Get Free Shipping on all orders over $99.00",
    button : "Shop Now",
    image : "./assets/airpod-1.webp"
},
{
    id : 3,
    h1 : "50% Off For Your First Shopping",
    p : "Get Free Shipping on all orders over $99.00",
    button : "Shop Now",
    image : "./assets/speaker-5.webp"
},

]
    
function product_loader(){
   let  output = ""
    cards.forEach(data => {
         output += `
        <div class="title">
            <div class="drpt">
                <h1>${data.h1}</h1>
                <p>${data.p}</p>
                <button>${data.button}</button>
            </div>
            <div class="img-wrap">
                <img src="${data.image}">
            </div>
        </div>`
    })
    document.getElementsByClassName('list-product')[0].innerHTML = output + output;
}
product_loader();
document.addEventListener('DOMContentLoaded', cardsLoader(0,6, 'ul'));
document.addEventListener('DOMContentLoaded',cardsLoader(0,8,'ul1'));
document.addEventListener('DOMContentLoaded',cardsLoader(2,8,'ul3'));
document.addEventListener('DOMContentLoaded',cardsLoader(11,17,'ul4'));

let count = 0;
document.getElementById('right').addEventListener('click',()=>{
    if(count <= 50){
        count++;
        document.getElementById('ul').style.transform = `translateX(${count * -25}%)`
    }
})
document.getElementById('left').addEventListener('click',()=>{
    if(count <= 50){
        count--;
        document.getElementById('ul').style.transform = `translateX(${count *25}%)`
    }
})


// document.getElementById('home').addEventListener("onmouseenter" , function(){
//     document.getElementById('child-home').style.display = "flex"
// });