import { Order } from "../types/Order.type";
import { Repository } from "../Repositories/generic.repo";
import { CustomerRepo } from "../Repositories/customer.repo";
import { OrderRepo } from "../Repositories/orderRepository.repo";
import { ProductRepo } from "../Repositories/productRepo.repo";
import { CustomerTier } from "../enums/customerTier.enum";
import { Status } from "../enums/status.enum";
import { Result } from "../types/result.type";
import { Report } from "../types/report.type";

export class ReportService {
  constructor(
    private customerRepo: CustomerRepo,
    private orderRepo: OrderRepo,
    private productRepo: ProductRepo,
  ) {}

  generateReport(startDate: Date, endDate: Date): Report {
    let orders = this.orderRepo
      .getAll()
      .filter((order) => order.date >= startDate && order.date <= endDate);

    // Total orders
    let totalOrders = orders.length;

    // Revenue
    let revenue = orders.reduce((acc, order) => {
      return acc + order.items.reduce((sum, item) => sum + item.lineTotal, 0);
    }, 0);

    // Top products
    let productSales = new Map<string, number>();

    orders.forEach((order) => {
      order.items.forEach((item) => {
        let current = productSales.get(item.productId) || 0;
        productSales.set(item.productId, item.quantity + current);
      });
    });

    let topProducts = Array.from(
      productSales,
      ([productId, totalQuantity]) => ({
        productId,
        totalQuantity,
      }),
    )
      .sort((a, b) => b.totalQuantity - a.totalQuantity)
      .slice(0, 5);

    // Top customers
    let customerOrders = new Map<string, number>();

    orders.forEach((order) => {
      let current = customerOrders.get(order.customerId) || 0;
      customerOrders.set(order.customerId, current + 1);
    });

    let topCustomers = Array.from(
      customerOrders,
      ([customerId, totalOrders]) => ({
        customerId,
        totalOrders,
      }),
    )
      .sort((a, b) => b.totalOrders - a.totalOrders)
      .slice(0, 5);

    // Orders by status
    let ordersByStatus: Record<Status, number> = {
      [Status.Pending]: 0,
      [Status.Confirmed]: 0,
      [Status.Shipped]: 0,
      [Status.Delivered]: 0,
      [Status.Cancelled]: 0,
    };

    orders.forEach((order) => {
      ordersByStatus[order.status]++;
    });

    return {
      totalOrders,
      revenue,
      topProducts,
      topCustomers,
      ordersByStatus,
    };
  }
}
