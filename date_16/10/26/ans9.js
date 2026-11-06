//find pairs of elements who matches the target sum

let array = [2, 4, 3, 5, 7]
target = 9
let pairs = []
let s = new Set()

for(let i of array){
    let leftNo = target - i
    if(s.has(leftNo)){
        pairs.push([leftNo,i])
    }
    s.add(i)
}

console.log(pairs)