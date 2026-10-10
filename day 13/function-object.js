let userFunction = {
    greet(){
        console.log(this.name+", Welcome Home! \n"+"age :"+this.age)
    }
}

let user1 = {
    name : "kavya",
    age : "21"
}

let user2 = {
    name : "Krisha",
    age : "30"
}

Object.setPrototypeOf(user1 , userFunction)
user1.greet()
user2.greet()