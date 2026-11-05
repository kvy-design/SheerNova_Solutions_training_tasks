import { CustomerTier } from "../enums/customerTier.enum";

export type Customer = {
    id:string;
    name : string;
    email : string;
    phone : number;
    tier : CustomerTier;
}

