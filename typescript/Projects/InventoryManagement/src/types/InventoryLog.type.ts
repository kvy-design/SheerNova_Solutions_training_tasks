export type InventoryLog = {
    productId : number;
    type : 'restock'|'sale' | 'adjustment' ;
    quantity : number;
    timestamp : Date;
    notes ?: string;
}
