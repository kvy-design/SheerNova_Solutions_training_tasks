import { Status } from "../enums/status.enum";
import { OrderItem } from "./orderItem.type";
export type Order = {
    id : string;
    customerId : string;
    items : OrderItem[];
    status : Status ;
    date : Date;
    subtotal: number;
    discount: number;
    totalAmount: number;
}

console.log(Status.Cancelled)
