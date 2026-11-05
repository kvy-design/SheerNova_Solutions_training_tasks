import { Order } from "./Order.type";
export type OrderSummary = Omit<Order, "items"> & {
    totalItems: number;
    totalAmount: number;
};