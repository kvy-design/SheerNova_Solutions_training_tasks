interface details<T> {
    add(item: T) : void;
    getById(id: number) :T | undefined; 
    getAll():T[] | undefined;
    update(id:number, item: Partial<T>):void;
    remove(id:number):void;
}

interface Id{
    id: string | number;
}

type Product = {
    id : Id;
    name: string;
    price : number;

}
type User<T> ={
    id : T;
    age : number;
    email : string;
}
type Task = {
    id : Id;
    title : string;
    discription : string;
    isCompleted : boolean;

}

class DataStore<T extends Id> implements details<T>{
    private items: T[] = [];
    add(item: T): T[] {
        let itemId = this.items.find((i) => i.id === item.id)
        if(itemId) throw new Error('item already exist')
        this.items.push(item)
    return this.items
    }  
    
    getById(id: number): T| undefined {
        let itemId = this.items.find((i)=> i.id  === id)
        if(!itemId) throw new Error('id is not valid')
        return itemId
    }

    getAll(): T[] | undefined {
        if(this.items.length === 0) throw new Error('items are empty')
        return this.items
    }
    update(id: number, item: Partial<T>): void {
        let getItem = this.getById(id)
        if(!getItem) throw new Error('item not exist')
        let keys = Object.keys(item) as (keyof T)[]
        keys.forEach((k) =>{
            console.log(k)
            getItem[k] = item[k]!
            console.log(getItem)
        }) 
        let index = this.items.findIndex((i) => i.id === getItem.id)
        this.items.splice(index,1)

        this.items.push(getItem)
        console.log(this.items)
    }
    remove(id: number): void {
        let index = this.items.findIndex((i) => i.id === id)
        if(!index) throw new Error('index is not valid')
        this.items.splice(index,1)
    }
}

const users: User<number>[] = [
    {
        id: 1,
        email: "vatsal@gmail.com",
        age: 22,
    },
    {
        id: 2,
        email: "rahul@gmail.com",
        age: 21,
    },
    {
        id: 3,
        email: "priya@gmail.com",
        age: 23,
    },
    {
        id: 4,
        email: "amit@gmail.com",
        age: 20,
    },
    {
        id: 5,
        email: "neha@gmail.com",
        age: 24,
    }
];

let ds = new DataStore<User<number>>()
ds.add(users[0]!)
ds.add(users[1]!)
ds.add(users[2]!)
ds.add(users[3]!)
console.log(ds.add(users[4]!))
ds.update(2 , {email : 'gk@mail.com' , age : 30}!)
ds.remove(2)
console.log(ds.getAll())
