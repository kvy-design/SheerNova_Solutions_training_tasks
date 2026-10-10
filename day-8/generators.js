function* genrat(){
    yield 10;
    yield 20;
    yield 30;
    return 40;
}

let gen = genrat()
for(let i of gen ){
    console.log(i)
}