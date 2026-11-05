"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Placed"] = "placed";
    OrderStatus["Preparing"] = "preparing";
    OrderStatus["Ready"] = "ready";
    OrderStatus["Served"] = "served";
    OrderStatus["Cancelled"] = "cancelled";
})(OrderStatus || (OrderStatus = {}));
var MealCategory;
(function (MealCategory) {
    MealCategory["Starter"] = "starter";
    MealCategory["Main"] = "main";
    MealCategory["Dessert"] = "dessert";
    MealCategory["Beverage"] = "beverage";
})(MealCategory || (MealCategory = {}));
class Restaurant {
    menu = [];
    orders = [];
    addMenuItem(item) {
        let orderId = this.menu.find((curitem) => curitem.id === item.id);
        if (orderId)
            throw new Error("Item already present in menu");
        this.menu.push(item);
        return this.menu;
    }
    removeMenuItem(item) {
        let menuItemId = this.menu.findIndex((currItem) => currItem.id === item.id);
        if (menuItemId === -1)
            throw new Error("Item not present in menu");
        this.menu.splice(menuItemId, 1);
    }
    updateOrderStatus(id, status) {
        let order = this.orders.find((currItem) => currItem.id === id);
        if (!order)
            throw new Error("Order is not present");
        let currSatus = order.status;
        let newStatus = status;
        if (currSatus === OrderStatus.Cancelled) {
            order.status = status;
        }
        else if (currSatus === OrderStatus.Placed &&
            newStatus === OrderStatus.Preparing) {
            order.status = status;
        }
        else if (currSatus === OrderStatus.Preparing &&
            newStatus === OrderStatus.Ready) {
            order.status = status;
        }
        else if (currSatus === OrderStatus.Ready &&
            newStatus === OrderStatus.Served) {
            order.status = status;
        }
        else {
            throw new Error("not valid status flow");
        }
    }
    placeOrder(ordr) {
        let isOrder = this.orders.find((currItem) => currItem.id === ordr.id);
        if (isOrder) {
            throw new Error("order is already placed");
        }
        ordr.status = OrderStatus.Placed;
        this.orders.push(ordr);
    }
    getOrderByStatus(status, id) {
        let isOrder = this.orders.find((currItem) => currItem.id === id);
        if (!isOrder)
            throw new Error("order is not placed yet!");
        return isOrder.status;
    }
    getPopularItems() {
        let count = {};
        this.orders.forEach((order) => {
            order.items.forEach((c) => {
                let id = c.menuitem.id;
                count[id] = (count[id] || 0) + c.quentity;
            });
        });
        return this.menu.sort((a, b) => (count[a.id] || 0) - (count[b.id] || 0));
    }
}
const menuItems = [
    {
        id: 1,
        name: "Paneer Tikka",
        category: MealCategory.Starter,
        price: 180,
        isVeg: true,
        preparationTime: 15
    },
    {
        id: 2,
        name: "Chicken Tikka",
        category: MealCategory.Starter,
        price: 220,
        isVeg: false,
        preparationTime: 20
    },
    {
        id: 3,
        name: "Veg Biryani",
        category: MealCategory.Main,
        price: 200,
        isVeg: true,
        preparationTime: 25
    },
    {
        id: 4,
        name: "Butter Chicken",
        category: MealCategory.Main,
        price: 280,
        isVeg: false,
        preparationTime: 30
    },
    {
        id: 5,
        name: "Chocolate Brownie",
        category: MealCategory.Dessert,
        price: 120,
        isVeg: true,
        preparationTime: 10
    },
    {
        id: 6,
        name: "Gulab Jamun",
        category: MealCategory.Dessert,
        price: 80,
        isVeg: true,
        preparationTime: 5
    },
    {
        id: 7,
        name: "Cold Coffee",
        category: MealCategory.Beverage,
        price: 100,
        isVeg: true,
        preparationTime: 5
    },
    {
        id: 8,
        name: "Fresh Lime Soda",
        category: MealCategory.Beverage,
        price: 60,
        isVeg: true,
        preparationTime: 5
    }
];
let item = new Restaurant();
item.addMenuItem({
    id: 1,
    name: "pav-bhaji",
    category: MealCategory.Main,
    price: 100,
    isVeg: true,
    preparationTime: 20,
});
console.log(item.addMenuItem({
    id: 2,
    name: "kaju-masala",
    category: MealCategory.Main,
    price: 100,
    isVeg: true,
    preparationTime: 20,
}));
console.log(item.placeOrder({
    customerName: 'KavyaPatel',
    id: 1,
    items: [
        {
            menuitem: menuItems[0],
            quentity: 2
        },
        {
            menuitem: menuItems[2],
            quentity: 1
        }
    ],
    'status': OrderStatus.Placed,
    totalAmount: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
    tableNumber: 20
}));
console.log(item.getPopularItems);
// Restaurant Order System
// Define string enum OrderStatus: Placed, Preparing, Ready, Served, Cancelled
// Define enum MealCategory: Starter, Main, Dessert, Beverage
// Interface MenuItem with: id, name, category (MealCategory), price, isVeg, preparationTime (minutes)
// Interface Order extending a base Timestamped interface (createdAt, updatedAt): id, customerName, tableNumber, items (MenuItem array with quantity), status, totalAmount
// Create class Restaurant with private menu and orders
// Implement: addMenuItem, removeMenuItem, placeOrder (calculates total), updateOrderStatus (only valid transitions: Placed->Preparing->Ready->Served, any state->Cancelled), getOrdersByStatus, getPopularItems (sorted by order count)
// Use readonly for order id and createdAt
// Create a getter activeOrders that returns all non-Served, non-Cancelled orders
// Use interface for a Kitchen display: only show order id, items, and status (Pick from Order interface - they’ll learn Pick formally tomorrow but explain the concept)
// Interface vs Type Practice
// Create the same shape using both interface and type alias - show extending interface vs intersecting types
// Demonstrate declaration merging with interfaces (add to an existing interface in a separate block)
// Create a function type using interface syntax and arrow type syntax
// Show where interface cannot be used (union types, mapped types) and type alias is needed
//# sourceMappingURL=restorOrderSystem.js.map