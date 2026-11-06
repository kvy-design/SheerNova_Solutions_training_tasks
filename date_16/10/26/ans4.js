//push all 0 to the end

let array = [0, 5, 0, 3, 8, 0, 2];
let zeros = [];

for (i of array) {
  if (i == 0) {
    let index0 = array.indexOf(i);
    zeros.push(0);
    array.splice(index0, 1);
  }
}
array.push(...zeros);

console.log(array);
