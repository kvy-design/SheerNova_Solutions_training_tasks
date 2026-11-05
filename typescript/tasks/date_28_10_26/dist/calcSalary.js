"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let employee1 = [
    {
        name: "kavya",
        basic: 30000,
        allowance: 5000,
        deduction: 2000,
        bonus: 3000,
        category: "permanent",
    },
    {
        name: 'krishav',
        basic: 40000,
        allowance: 6000,
        deduction: 5000,
        hra: 1000,
        bonus: 10000,
        category: "permanent",
    },
];
let employee2 = [
    {
        name: "Isha",
        basic: 300000,
        allowance: 50000,
        deduction: 10000,
        bonus: 8000,
        category: "Manager",
    },
    {
        name: 'Pranav',
        basic: 423000,
        allowance: 6000,
        deduction: 5000,
        hra: 1000,
        bonus: 10000,
        category: "Manager",
    },
];
function handleError(error) {
    throw new Error(error);
}
function calculateSalary(emp) {
    let total = emp.reduce((acc, curr) => {
        acc +=
            (curr.basic < 0 ? handleError('invalid salary') : curr.basic) +
                (curr.allowance < 0 ? handleError('invalid allowance') : curr.allowance) +
                (curr.bonus ?? 0) +
                (curr.hra ?? 0) -
                (curr.deduction < 0 ? handleError('invalid duduction') : curr.deduction);
        return acc;
    }, 0);
    return total;
}
console.log(calculateSalary(employee2));
console.log(calculateSalary(employee1));
//# sourceMappingURL=calcSalary.js.map