//counter
function increment(){
    let counter = 0
    // function plus(){
    //     counter += 1
    // }
    // plus()
    // plus()
    return function(){
        counter ++
        return counter
    }
}
let x = increment()
document.getElementById('add').addEventListener("click",()=>{
    document.getElementById('count').innerHTML = x()
})

