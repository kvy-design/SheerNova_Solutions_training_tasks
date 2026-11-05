import { Repository } from "./generic.repo";
import { Order } from "../types/Order.type";
import { Customer } from "../types/customer.type";
import { ProductRepo } from "./productRepo.repo";
let customer: Customer[] = [];
export class OrderRepo extends Repository<Order> {
  getByCustomer(id: string): Order[] {
    let orders = this.item.filter((order) => order.customerId === id);
    if (orders.length === 0) throw new Error("customer not found");
    return orders;
  }
  getByStatus(status: string): Order[] {
    let orders = this.item.filter((order) => order.status === status);
    if (orders.length === 0) throw new Error("incorrect status");
    return orders;
  }

  getByDateRange(stdate: Date, enDate: Date): Order[] {
    let orders = this.item.filter(
      (order) => order.date >= stdate && order.date <= enDate,
    );
    if (orders.length === 0) throw new Error("dates incorrect");
    return orders;
  }
  
}
