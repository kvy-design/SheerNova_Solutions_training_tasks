import { Order } from "../types/Order.type";
import { Repository } from "../Repositories/generic.repo";
import { CustomerRepo } from "../Repositories/customer.repo";
import { OrderRepo } from "../Repositories/orderRepository.repo";
import { ProductRepo } from "../Repositories/productRepo.repo";
import { CustomerTier } from "../enums/customerTier.enum";
import { Status } from "../enums/status.enum";
import { Result } from "../types/result.type";
import { OrderSummary } from "../types/orderSum.type";

export class OrderService {
  constructor(
    private customerRepo: CustomerRepo,
    private orderRepo: OrderRepo,
    private productRepo: ProductRepo,
  ) {}
  craeteOrder(
    customerId: string,
    items: Array<{ productId: string; quantity: number }>,
  ): Result<Order> {


    // Validate customer
    let customer = this.customerRepo.findWhere(
      (customer) => customer.id === customerId,
    );
    if (customer.length === 0) throw new Error("customer not exist");

    items.forEach((items)=>{
        if(items.quantity < 0) throw new Error('negative quentity cant be added')
    })

    // Check whether the customer ID exists.
    // Find products
    let products = items.map((i) => {
      return this.productRepo.getItem(i.productId);
    });

    if (products.some((p) => !p)) {
      throw new Error("One or more products do not exist");
    }


    // Retrieve each product using its product ID.
    // Validate stock
    // Check whether sufficient stock is available.
    let stock = products.some(
      (p, index) => p!.stockQnty < items[index]!.quantity,
    );

    if (stock) {
      throw new Error("Insufficient stock");
    }


    // Calculate totals
    // Calculate quantity × unit price for each product.
    // Apply discount
    // Check customer tier and calculate the discount.
    let subtotal = products.reduce((acc, p, index) => {
      return acc + p!.price * items[index]!.quantity;
    }, 0);

    let customerData = customer[0]!;
    let discount = 0;
    switch (customerData.tier) {
      case CustomerTier.Bronze:
        discount = 0;
        break;
      case CustomerTier.Gold:
        discount = 0.1;
        break;
      case CustomerTier.Silver:
        discount = 0.05;
        break;
      case CustomerTier.Platinum:
        discount = 0.15;
        break;
    }
    let discountAmount = subtotal * discount;
    let totalAmount = subtotal - discountAmount;


    // Update inventory
    // Deduct purchased quantities from product stock.
    products.forEach((p, index) => {
      this.productRepo.update(p!.id, {
        stockQnty: p!.stockQnty - items[index]!.quantity,
      });
    });


    // Create order
    // Generate an order ID, date and initial status.
    let order: Order = {
      id: crypto.randomUUID(),
      customerId: customerId,
      items: products.map((i, index) => {
        return {
          productId: i!.id,
          quantity: items[index]!.quantity,
          unitPrice: i!.price,
          lineTotal: i!.price * items[index]!.quantity,
        };
      }),
      status: Status.Pending,
      discount : discount,
      subtotal : subtotal,
      totalAmount : totalAmount,
      date: new Date(),
    };


    // Return Result
    // Return success with the order or an error message.
    this.orderRepo.add(order)
    return {
        'success' : true,
        'data' : order
    }
  }

  updateOrderStatus(orderId : string, newStatus : Status): Result<Order>{
    let order = this.orderRepo.getItem(orderId)
    if (!order){
        return {
            success : false,
            error : 'Incorrect Id'
        }
    }

    let allowedTransitions:Record<Status,Status[]> = {
        [Status.Pending] : [Status.Confirmed , Status.Cancelled],
        [Status.Confirmed] : [Status.Shipped , Status.Cancelled],
        [Status.Shipped] : [Status.Delivered , Status.Cancelled],
        [Status.Delivered] : [Status.Cancelled],
        [Status.Cancelled] : []
    }
    if(!allowedTransitions[order.status].includes(newStatus)){
        return {
            success: false,
            error: "Invalid status transition"
        };
    }

    this.orderRepo.update(orderId,{
        status : newStatus
    })

    return {
        success: true,
        data: order
    };
  }

  getOrderSummary(orderId : string): OrderSummary{
    let order = this.orderRepo.getItem(orderId)
    if(!order) throw new Error('order not found')
    return {
        'id' : orderId,
        'customerId' : order.customerId,
        'discount' : order.discount,
        'status' : order.status,
        'subtotal' : order.subtotal,
        'totalAmount' : order.totalAmount,
        'totalItems': order.items.length,
        'date' : order.date
    }
  }
}
