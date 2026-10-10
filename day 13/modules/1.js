console.log("1. Application started");

function validateOrder() {
    console.log("2. Validating order");

    return Promise.resolve("Order validated");
}

function processPayment() {
    console.log("3. Starting payment");

    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("4. Payment gateway responded");
            resolve("Payment successful");
        }, 0);
    });
}

async function completeOrder() {
    console.log("5. Completing order");

    const validation = await validateOrder();

    console.log("6. Validation result:", validation);

    const payment = await processPayment();

    console.log("7. Payment result:", payment);

    setTimeout(() => {
        console.log("8. Order confirmation email sent");
    }, 0);
}

console.log("9. Before starting order");

completeOrder();

Promise.resolve().then(() => {
    console.log("10. Independent promise executed");
});

setTimeout(() => {
    console.log("11. Independent timer executed");
}, 0);

console.log("12. Application finished");