let status = document.getElementById('status');

document.getElementById('startOrder').addEventListener('click' , orderStart)

async function orderStart() {

    await wait(1000)
    status.innerHTML = "Prparring your order"
    
    await wait(2000)

    status.innerHTML = "complete preparing"
    
    await wait(3000)
    setTimeout(()=>{
        status.innerHTML = "order placed"
    },2000)
}

function wait(time){
    return new Promise(resolve =>{
        setTimeout(resolve,time)
    });
}