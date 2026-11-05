"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let data = "Hello TypeScript";
if (typeof data === "string") {
    //  TypeScript now safely knows 'serverResponse' is a string
    console.log(data.toUpperCase()); // Outputs: "SUCCESS!"
}
else {
    console.log("Data is not a string.");
}
//unknown
let newData = "Unknown type";
//console.log(newData.toUpperCase()); error : 'newData' is of type 'unknown'.
if (typeof newData === "string") {
    console.log(newData.toUpperCase());
}
//using never
function handleError(msg) {
    console.log(msg)
    throw new Error(msg);
}
function userName(name) {
    if (name === undefined) {
        handleError('user not found');
    }
    return `user name ${name}`;
}
console.log(userName());
//# sourceMappingURL=typeSafetyProduct.js.map