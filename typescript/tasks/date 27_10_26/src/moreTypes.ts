// let response: any = "42";

// //forcefully type assertion
// let numericLength: number = (response as string).length;

// type Book = {
//   name: string;
// };

// let bookString = '{"name": "who moved my cheese"}';
// let bookObject = JSON.parse(bookString) as Book;

// console.log(bookObject.name);

// const inputElement = document.getElementById("username") as HTMLInputElement;

// //any
// let value: any;
// value = "chai";
// value = 2.5;
// value.toUpperCase();

// //unknown
// let newValue: unknown;
// newValue = "chai";
// newValue = [1, 2, 3];
// newValue = 2.5;
// if (typeof newValue === "string") {
//   newValue.toUpperCase();
// }

// try {
// } catch (error: any) {
//   // console.log(error.message)

//   if (error instanceof Error) {
//     console.log(error.message);
//   }
//   console.log("Error", error);
// }

// const data: unknown = "chai ayr code";
// const strData: string = data as string;

// type Role = "admin" | "user";

// function redirectBasedOnRole(role: Role): void {
//   if (role === "admin") {
//     console.log("redirectiong to admin dashboard");
//     return;
//   }

//   if (role === "user") {
//     console.log("redirecting to user dashboard");
//     return;
//   }
// }

// //never -> it might throw an error or run forever, never reaches to normal end
// function neverReturn(): never {
//   while (true) {}
// }

// // void - funtion returns no useful valeus

// function greet(): void {
//   console.log("heeelo");
// }

// greet();
