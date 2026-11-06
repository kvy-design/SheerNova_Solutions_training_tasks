//find second largest no

let array = [10, 25, 8, 25, 18];

let first_big_number = 0
let second_big_number = 0
for(let i of array){
    if(first_big_number < i){
        first_big_number = i
        console.log('first',i)
    }
    if(first_big_number > second_big_number && second_big_number < i ){
        if(first_big_number==i) {
            continue;
        }
        second_big_number = i
        console.log('second',i)
    }
    
}
console.log(second_big_number)
