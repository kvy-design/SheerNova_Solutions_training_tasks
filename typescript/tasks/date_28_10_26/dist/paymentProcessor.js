"use strict";
// type Cash = {
//     method : 'cash'
//     amount : number
// }
Object.defineProperty(exports, "__esModule", { value: true });
// type Card = {
//     method : 'card'
//     amount : number
// }
// type BankTransfer = {
//     method : 'online'
//     amount : number
// }
// type Payment = Cash | Card | BankTransfer
function handleError(error) {
    throw new Error(error);
}
function processPayment(payment) {
    switch (payment.method) {
        case 'card': return {
            method: 'card',
            amount: payment.amount
        };
        case 'cash': return {
            method: 'cash',
            amount: payment.amount
        };
        case 'online': return {
            method: 'online',
            amount: payment.amount
        };
        default: handleError('Payment method is not valid');
    }
}
console.log(processPayment({ amount: 2000, method: 'card' }));
//# sourceMappingURL=paymentProcessor.js.map