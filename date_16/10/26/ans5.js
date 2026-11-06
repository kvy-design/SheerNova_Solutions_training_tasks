//find the similar numbers from array

let array = [1, 2, 3, 4] 
let array2 = [3, 4, 5, 6]
let similar = []

for(let i of array){
    if(array2.includes(i)){
        similar.push(i)
    }
}

console.log(similar)