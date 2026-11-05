type Shipping = {
  dilivery: "Same-day" | "Overnight" | "Regular";
  days: number;
  weightInKg: number;
  destination: "vadodara" | "Anand" | "Surat" | "Valsad" | "Ahemdabad";

};

let perDayCost:number = 10
let perWeightCost:number = 20


let item1: Shipping = {
  dilivery: "Same-day",
  days : 1,
  weightInKg: 2,
  destination: "Ahemdabad"
};

type ResultShipping = {
  delivery: string;
  cost: number;
};
let charges:number;

function CalculateShipping(items: Shipping): ResultShipping {
    if(items.dilivery === 'Overnight'){
        charges = 50 + items.days * perDayCost + items.weightInKg * perWeightCost
    }
    else if(items.dilivery === 'Regular'){
        charges = items.days * perDayCost + items.weightInKg * perWeightCost
    }
    else if(items.dilivery === 'Same-day'){
        charges = 10  + items.weightInKg * perWeightCost
    }

    return {
        delivery : items.dilivery,
        cost : charges
    }
}

console.log(CalculateShipping(item1))
