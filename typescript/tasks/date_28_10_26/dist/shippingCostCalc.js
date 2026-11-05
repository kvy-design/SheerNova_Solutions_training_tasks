"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let perDayCost = 10;
let perWeightCost = 20;
let item1 = {
  dilivery: "Same-day",
  days: 1,
  weightInKg: 2,
  destination: "Ahemdabad",
};
let charges;
function CalculateShipping(items) {
  if (items.dilivery === "Overnight") {
    charges = 50 + items.days * perDayCost + items.weightInKg * perWeightCost;
  } else if (items.dilivery === "Regular") {
    charges = items.days * perDayCost + items.weightInKg * perWeightCost;
  } else if (items.dilivery === "Same-day") {
    charges = 10 + items.weightInKg * perWeightCost;
  }
  return {
    delivery: items.dilivery,
    cost: charges,
  };
}
console.log(CalculateShipping(item1));
//# sourceMappingURL=shippingCostCalc.js.map
