const d= new Date()
console.log(d)
console.log(d.toDateString())
console.log(d.getDate())
console.log(d.getDay())
console.log(d.getTime())

//iso date : yy-mm-dd , short dt : mm/dd/yy , long date : month date year or date month year

const start = new Date("2026-09-10");
const end = new Date("2026-09-24");
const date = new Date('2005-08-01')
console.log(date)
const diff = start - end
console.log(diff)

//Math methods

const no = Math.round(Math.random() * 10)
console.log(no)

//sts

let letters = new Set(["A","B","C","D"])
let array = [...letters]
console.log(letters.entries())
let text = ""
letters.forEach(function(value){
    text += value
})

console.log(text)

// letters.add("a");
// letters.add("b");
// letters.add("c");
// letters.add("c");
// letters.add("c");
// letters.add("c");
// letters.add("c");
// letters.add("c");

// console.log(letters)

//set methods
const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

const C = A.symmetricDifference(B); //.union , .difference , .intersection , isDisjointFrom() , isSubsetOf() , isSupersetOf() 
console.log(C)

// const fruits = new Map()
// fruits.set("apples", 500);
// fruits.set("bananas", 300);
// fruits.set("oranges", 200);
// console.log(fruits)
// fruits.set("oranges", 300);
// console.log(fruits)
// console.log(fruits.get("apples"))
// console.log(fruits.size)

// for(let i of fruits.entries()){
//     console.log(i)
// }

// for(let i of fruits.keys()){
//     console.log(i)
// }
// for(let i of fruits.values()){
//     console.log(i)
// }
// fruits.forEach(function(values){
//     console.log(values)
// })

const fruits = [
  {name:"apples", quantity:300},
  {name:"bananas", quantity:500},
  {name:"oranges", quantity:200},
  {name:"kiwi", quantity:150}
];

function callback({quantity}){
    return quantity > 200 ? "ok" : "low"
}

const result = Map.groupBy(fruits, callback)
console.log(result)

for(let i of result.get('ok')){
    console.log(i.quantity)
}
for(let i of result.get('low')){
    console.log(i.quantity)
}

const weakMap = new WeakMap();

const user = {
    name: "Aisha"
};

weakMap.set(user, "Admin");
let result1 = weakMap.get(user)
console.log(weakMap)