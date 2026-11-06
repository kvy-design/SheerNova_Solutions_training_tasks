//find missing number from 1 to 10

let array = [1, 2, 4, 6, 9, 10];
let missing = []

for(let i = 1; i <= 10 ; i++){
    if(!array.includes(i)){
        missing.push(i)
    }
}
console.log(missing)