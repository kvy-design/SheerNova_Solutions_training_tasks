type Product = {
    name: string;
    price: number;
    quantity: number;
    available: boolean;
}

const products:Product[] = [
    {name :  'Laptop', price : 50000 , quantity : 3 , available : true},
    {name :  'Mouse', price : 500 , quantity : 5 , available : true},
    {name : 'Keyboard' , price : 1000 , quantity : 2 , available : true},
    {name :  'Earphones', price : 5000 , quantity : 0 , available : false}
]

let total = products.reduce((acc,curr)=>{
    acc += curr.price * curr.quantity
    return acc
},0)

console.log('total inventory : ',total)

let outOfStock = products.filter((data)=> data.quantity === 0)

console.log('Out of stock products: ')
outOfStock.forEach((data)=>{
    console.log(data.name);
})

let productTuple: [string, number, number, boolean] = [
    'Headphones', 2000 , 8 , true
];

console.log('product tuple: ',productTuple)


