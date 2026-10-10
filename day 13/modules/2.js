console.log("1. User opens application");

function checkUser() {
    console.log("2. Checking user");

    return new Promise((resolve) => {
        resolve("User verified");
    });
}

function loadDashboard() {
    console.log("3. Starting dashboard loading");

    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("4. Dashboard data received");
            resolve("Dashboard ready");
        }, 0);
    });
}

async function startApplication() {

    console.log("5. Starting application");

    const user = await checkUser();

    console.log("6. User status:", user);

    const dashboard = await loadDashboard();

    console.log("7. Dashboard status:", dashboard);
}

Promise.resolve().then(() => {
    console.log("8. Security check completed");
});

setTimeout(() => {
    console.log("9. Session timeout check");
}, 0);

startApplication();

console.log("10. Application initialization finished");