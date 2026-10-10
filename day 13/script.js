const numbers = [10, 20, 30, 40, 50];

function processData(data, callback) {
    return callback(data);
}

function doubleNumbers(data) {
    return data.map(function(number) {
        return number * 2;
    });
}

function getGreaterNumbers(data) {
    return data.filter(function(number) {
        return number > 25;
    });
}

document.getElementById('doubleNo').addEventListener('click',()=>{
    let result = processData(numbers, doubleNumbers)
    document.getElementById('result').innerHTML = result
})

document.getElementById('greatNo').addEventListener('click',()=>{
    let result = processData(numbers, getGreaterNumbers)
    document.getElementById('result').innerHTML = result
})