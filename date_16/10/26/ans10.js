//rotate the array by k times

let array = [1, 2, 3, 4, 5] // [4,5,1,2,3]
let k = 2
let element = array.splice(0,k+1,1)
array.push(...element)

console.log(array)