import { CustomerTier } from "./enums/customerTier.enum";
import { CustomerRepo } from "./Repositories/customer.repo";
import { OrderRepo } from "./Repositories/orderRepository.repo";
import { ProductRepo } from "./Repositories/productRepo.repo";
import { InventoryService } from "./Services/inventory.service";
import { OrderService } from "./Services/order.service";
import { ReportService } from "./Services/report.service";
import { Status } from "./enums/status.enum";

const productRepo = new ProductRepo;
const customerRepo = new CustomerRepo;
const orderRepo = new OrderRepo;

const orderService = new OrderService(
    customerRepo,
    orderRepo,
    productRepo
);

const inventoryService = new InventoryService(
    customerRepo,
    orderRepo,
    productRepo
);

const reportService = new ReportService(
    customerRepo,
    orderRepo,
    productRepo
);

console.log("===== ADD CUSTOMERS =====");
customerRepo.add({
    id: "C101",
    name: "Rahul",
    email: "rahul@example.com",
    phone: 9876543210,
    tier: CustomerTier.Gold
});

customerRepo.add({
    id: "C102",
    name: "Priya",
    email: "priya@example.com",
    phone: 9876543211,
    tier: CustomerTier.Silver
});

console.log(customerRepo.getAll());


console.log("===== ADD PRODUCTS =====");

productRepo.add({
    id: "P101",
    name: "Laptop",
    category: "Electronics",
    sku: "LAP101",
    price: 50000,
    stockQnty: 20,
    tags: "computer"
});

productRepo.add({
    id: "P102",
    name: "Mouse",
    category: "Electronics",
    sku: "MOU102",
    price: 500,
    stockQnty: 50,
    tags: "accessory"
});

productRepo.add({
    id: "P103",
    name: "Keyboard",
    category: "Electronics",
    sku: "KEY103",
    price: 1000,
    stockQnty: 5,
    tags: "accessory"
});

console.log(productRepo.getAll());

console.log("===== CREATE ORDER =====");

const orderResult = orderService.craeteOrder(
    "C101",
    [
        { productId: "P101", quantity: 2 },
        { productId: "P102", quantity: 3 }
    ]
);

console.log(orderResult);


console.log("===== UPDATE ORDER STATUS =====");

if (orderResult.success) {
    console.log(
        orderService.updateOrderStatus(
            orderResult.data.id,
            Status.Confirmed
        )
    );
}

console.log("===== RESTOCK PRODUCT =====");

console.log(
    inventoryService.restockProduct("P103", 10)
);

console.log("===== CHECK UPDATED STOCK =====");

console.log(productRepo.getItem("P103"));

console.log("===== GENERATE REPORT =====");

console.log(
    reportService.generateReport(
        new Date("2026-01-01"),
        new Date("2026-12-31")
    )
);