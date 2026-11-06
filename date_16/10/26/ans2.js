//remove duplicates without using set
let array = [2, 4, 2, 6, 4, 8]

for(let i in array){
    for(let j in array){
        if(i!=j && array[i]==array[j]){
            array.splice(j,1)
        }
    }
}
console.log(array)