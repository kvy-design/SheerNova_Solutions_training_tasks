import { Repository } from "./generic.repo";
import { Product } from "../types/product.type";

export class ProductRepo extends Repository<Product> {
  searchByName(name: string): Product[] {
    let getProduct = this.item.filter(
      (item) => item.name.toLowerCase() === name.toLowerCase(),
    );
    if (getProduct.length === 0) throw new Error("no name match!");
    return getProduct;
  }
  getByCategory(category: string): Product[] {
    let getProduct = this.item.filter((item) => item.category === category);
    if (getProduct.length === 0) throw new Error("no category match");
    return getProduct;
  }
  getLowStock(num: number): Product[] {
    return this.item.filter((i) => i.stockQnty < num);
  }
  ProductsArray<Product>(items:Product):number[]{
    let Price = this.item.map((i) => i.price)
    return Price
  }
}

const products: Product[] = [
  {
    id: '1',
    category: "Electronics",
    name: "Wireless Mouse",
    sku: "ELE-MOU-001",
    price: 599,
    stockQnty: 4,
    tags: "wireless,accessories",
  },
  {
    id: '2',
    category: "Electronics",
    name: "Mechanical Keyboard",
    sku: "ELE-KEY-002",
    price: 2499,
    stockQnty: 25,
    tags: "mechanical,gaming",
  },
  {
    id: '3',
    category: "Electronics",
    name: "Monitor 24 Inch",
    sku: "ELE-MON-003",
    price: 8999,
    stockQnty: 2,
    tags: "monitor,display",
  },
  {
    id: '4',
    category: "Accessories",
    name: "USB-C Cable",
    sku: "ACC-CAB-004",
    price: 299,
    stockQnty: 50,
    tags: "usb,type-c",
  },
  {
    id: '5',
    category: "Accessories",
    name: "Laptop Stand",
    sku: "ACC-STD-005",
    price: 799,
    stockQnty: 8,
    tags: "laptop,desk",
  },
  {
    id: '6',
    category: "Electronics",
    name: "Bluetooth Headphones",
    sku: "ELE-HDP-006",
    price: 1999,
    stockQnty: 0,
    tags: "bluetooth,audio",
  },
  {
    id: '7',
    category: "Stationery",
    name: "Notebook",
    sku: "STA-NOT-007",
    price: 120,
    stockQnty: 100,
    tags: "paper,writing",
  },
  {
    id: '8',
    category: "Accessories",
    name: "Webcam",
    sku: "ACC-WEB-008",
    price: 1499,
    stockQnty: 3,
    tags: "camera,streaming",
  },
];
// const test = new ProductRepo();
// products.forEach((i) => test.add(i));
// console.log(test.getAll());
// console.log(test.searchByName("Webcam"));
// console.log(test.getLowStock(3))
// console.log(test.getByCategory('Accessories'))