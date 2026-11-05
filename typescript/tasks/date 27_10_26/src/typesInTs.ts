// //type inference - no need to tell which type is given
// let cups = Math.random() > 0.5 ? 5 : "3";
// let addres = "vadodara";

// //type annotation - need to tell which datatype is given
// let name: string = "kavya";
// name = "kvy";
// //name = 4 //error

// //type : unknown

// //type narrowing
// function getChai(kind: string | number) {
//   if (typeof kind === "string") {
//     return `Making ${kind} chai..`;
//   }
//   return `chai oder : ${kind}`;
// }

// //truthy checks:  1000% gauranttee to get msg
// function serveChai(msg?: string) {
//   if (msg) {
//     return `serving ${msg}`;
//   }
//   return `serving default masala chai`;
// }

// //exhaustive checks : all possible cases of a union type or enum are explicitly handled usng switch or if/else
// function orderChai(size: "medium" | "small" | "large" | number) {
//   if (size === "small") {
//     return `small cutting chai`;
//   }
//   if (size === "medium" || size === "large") {
//     return "make extra chai";
//   }
//   return `chai order #${size}`;
// }

// //instanceof = usedfor class-based checks

// class KulhadChai {
//   serve() {
//     return `serving kulhad Chai`;
//   }
// }

// class Cutting {
//   serve() {
//     return `serving cutting Chai`;
//   }
// }

// function serve(chai: KulhadChai | Cutting) {
//   if (chai instanceof KulhadChai) {
//     return chai.serve();
//   }
//   return chai.serve();
// }

// //typeof : used to narrow primitve types
// type ChaiOrder = {
//   type: string;
//   sugar: number;
// };

// //return true if types exist
// function isChaiOrder(obj: any): obj is ChaiOrder {
//   return (
//     typeof obj === "object" &&
//     obj !== null &&
//     typeof obj.type === "string" &&
//     typeof obj.sugar === "number"
//   );
// }

// function serveOrder(item: ChaiOrder | string) {
//   if (isChaiOrder(item)) {
//     return `Serving ${item.type} chai with ${item.sugar}`;
//   }
//   return `serving custom chai : ${item}`;
// }

// //definig types like industry

// type MasalaChai = { type: "masala"; spicelevel: number };
// type GingerChai = { type: "ginger"; amount: number };
// type ElaichiChai = { type: "elaichi"; aroma: number };

// type Chai = MasalaChai | GingerChai | ElaichiChai;

// function MakeChai(order: Chai) {
//   switch (order.type) {
//     case "elaichi":
//       return `elaichichai`;
//       break;
//     case "ginger":
//       return `ginger chai`;
//       break;
//     case "masala":
//       return "masala chai";
//       break;
//   }
// }
