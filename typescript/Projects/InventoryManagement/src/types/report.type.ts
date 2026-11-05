import { Status } from "../enums/status.enum";

export type Report = {
    totalOrders: number;
    revenue: number;

    topProducts: {
        productId: string;
        totalQuantity: number;
    }[];

    topCustomers: {
        customerId: string;
        totalOrders: number;
    }[];

    ordersByStatus: Record<Status, number>;
};