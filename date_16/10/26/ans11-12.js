//count fruits appearance
let str = "apple mango apple mango apple"
let array = Array(str)
let new_array = array[0].split(' ')
let countWords = new_array.reduce((acc,curr) =>{
    acc[curr] = (acc[curr] || 0) + 1
    return acc
},{})

console.log(countWords)

//count names appearance

let names = ["Amit", "Priya", "Amit", "Raj", "Priya", "Amit"]
let countNames = names.reduce((acc,curr)=>{
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
},{})

console.log(countNames)
