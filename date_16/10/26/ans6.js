//return multiple number of accurance

let array = [2, 3, 2, 3, 6]
let repeat = []

for(let i of array){
    let count = 0;
    for(let j of array){
        if(i==j){
            count++;
        }
        if(count > 1 && i==j){
            if(!repeat.includes(j)){
                repeat.push(j)
            }
        }
    }
}
console.log(repeat)