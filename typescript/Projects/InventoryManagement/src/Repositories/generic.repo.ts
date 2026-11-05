export class Repository<T extends { id: string }> {
  protected item: T[] = [];
  getItem(id: string): T | undefined {
    let getId = this.item.find((i) => i.id === id);
    return getId;
  }
  add(item: T): T[] {
    let getId = this.item.find((i) => i.id === item.id);
    if (getId) throw new Error("item already exist");
    this.item.push(item);
    return this.item;
  }
  getAll(): T[] {
    if (!this.item) throw new Error("items are empty");
    return this.item;
  }
  update(id: string, updateData: Partial<Omit<T, "id">>): T[] {
    let getIndex = this.item.findIndex((i) => i.id === id);
    if (getIndex === -1) throw new Error("not valid data");
    const existingItem = this.item[getIndex];
    if (!existingItem) throw new Error("Item not exist");
    Object.assign(existingItem, updateData);
    return this.item;
  }
  delete(id:  string): void {
    let getIndex = this.item.findIndex((i) => i.id === id);
    if (getIndex === -1) throw new Error("item not exist");

    this.item.splice(getIndex, 1);
  }
  findWhere(predicate: (item: T) => boolean): T[] {
    return this.item.filter(predicate);
  }
}

interface User {
    id: string;
    name: string;
    age: number;
    city: string;
}

const users: User[] = [
    { id: '1', name: "Vatsal", age: 22, city: "Nadiad" },
    { id: '2', name: "Rahul", age: 17, city: "Ahmedabad" },
    { id: '3', name: "Karan", age: 15, city: "Vadodara" },
    { id: '4', name: "Meet", age: 20, city: "Nadiad" }
];

// const test = new Repository<User>()
// users.forEach((data)=> test.add(data))
// console.log(test.getAll())

// const result = test.findWhere(user => user.city === 'Vadodara')
// console.log(result)