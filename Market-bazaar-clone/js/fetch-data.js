import {product_list} from './data.js';

export function cardsLoader(start,end,id){
    let len = product_list.length;
    let fiveData = product_list.slice(Number(`${start}`),Number(`${end}`));
    let output = ""
    fiveData.forEach(data => {
        output += `
        <li>
            <div class="products">
                <div class="products-style">
                    <div class="product-img">  
                        <div class="discount"><span>${data.off}</span></div>
                        <div class="btn-container"><a><button class="cart-add2">${data.button1}</button></a><button class="cart-add">${data.button2}</button></div>
                        <div class="pro-img"><img src='${data.img}' width='750px' height='750px'></div>      
                    </div>
                    <div class="disc">
                        <p>${data.title}</p>
                        <a><h5>${data.dis}</h5></a>
                        <h6>${data.amount}</h6>
                    </div>
                </div>
            </div>
        </li>
        `
    })

    document.getElementById(`${id}`).innerHTML = output;
}






































// let output1 = "" 
    // let eightData = product_list.splice(0,8)
    // eightData.forEach(
    //     data => {
    //     output1 += `
    //     <li>
    //         <div class="products">
    //             <div class="products-style">
    //                 <div class="product-img">  
    //                     <div class="discount"><span>${data.off}</span></div>
    //                     <div class="btn-container"><a><button class="cart-add2">${data.button1}</button></a><button class="cart-add">${data.button2}</button></div>
    //                     <div class="pro-img"><img src='${data.img}' width='750px' height='750px'></div>      
    //                 </div>
    //                 <div class="disc">
    //                     <p>${data.title}</p>
    //                     <a><h5>${data.dis}</h5></a>
    //                     <h6>${data.amount}</h6>
    //                 </div>
    //             </div>
    //         </div>
    //     </li>
    //     `
    // }
    // )