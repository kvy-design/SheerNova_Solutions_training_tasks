//generics functions

function identity<r,v>(arg : r , arg1 : v) : [r,v]{
    return [arg,arg1]
}

let i = identity<number,string>(1, 'hi')
console.log(i)
console.log(identity(2,3))


//generic interface

interface responce<T> {
    data : T;
    status : number;
}

//generic array example

function printItems<T>(nums : T[]):void{
    nums.forEach((i) =>{
        console.log(i)
    })
}

printItems<string>(['kavya','hetvi','tanvi','heer'])
printItems<number>([1,2,3])

//api resposes

interface ApiResponse<T> {
    success : boolean;
    message : string;
    data : T
}

interface student {
    id : number;
    name : string;
}

interface Product {
    id : number;
    productName : string;
    price : number;
}

let studentResponse : ApiResponse<student> = {
    success : true,
    message : 'student fetched successfully',
    data : {
        id : 1,
        name : 'kavya'
    }
};

let productResponse : ApiResponse<Product> = {
    success : true,
    message : 'product fetched successfully',
    data : {
        id : 1,
        price : 20000,
        productName : 'mobile'
    }
}

console.log(studentResponse.data.name)
console.log(productResponse.data.productName)

//generic storage class

class Storage<T>{
    private items : T[] = [];
    addItem(item : T):void {
        this.items.push(item);
    }
    getItem():T[]{
        return this.items;
    }
}

//extends in generics


interface Student {
    id:number;
    name:string;
    age:number;
}
function getProperty<T,K extends keyof T>(obj: T,key:K):T[K]{
    return obj[key];
}

let student: Student = {
    id: 1,
    name: 'vatsal',
    age : 20
};

console.log(getProperty(student, 'name'));
console.log(getProperty(student,'age'));
console.log(getProperty(student,'id'));


