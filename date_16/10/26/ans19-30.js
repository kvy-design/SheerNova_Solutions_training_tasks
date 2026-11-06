//19. Calculate Student Rankings: Each student has marks in several subjects. Calculate the average marks and arrange students from highest to lowest. If two students have the same average, sort their names alphabetically.

let students = [
  { name: "Raj", marks: [80, 90, 70] },
  { name: "Priya", marks: [70, 80, 90] },
  { name: "Neha", marks: [60, 70, 80] },
  { name: "Amit", marks: [90, 80, 70] },
];

let ranking = students
  .map((student) => {
    let total = student.marks.reduce((acc, curr) => acc + curr, 0);
    let average = total / student.marks.length;

    return {
      name: student.name,
      average: average,
    };
  })
  .sort((a, b) => {
    return b.average - a.average || a.name.localeCompare(b.name);
  });

console.log(ranking);

//20. Calculate Employee Sales: Given sales records, calculate each employee's total sales, number of sales, and average sales amount.

let sales = [
  { employee: "Amit", amount: 1000 },
  { employee: "Raj", amount: 2000 },
  { employee: "Amit", amount: 1500 },
  { employee: "Raj", amount: 1000 },
  { employee: "Priya", amount: 3000 },
];

let report = sales.reduce((acc, curr) => {
  if (!acc[curr.employee]) {
    acc[curr.employee] = {
      totalSales: 0,
      numberOfSales: 0,
      averageSales: 0,
    };
  }

  acc[curr.employee].totalSales += curr.amount;
  acc[curr.employee].numberOfSales++;

  acc[curr.employee].averageSales =
    acc[curr.employee].totalSales / acc[curr.employee].numberOfSales;

  return acc;
}, {});

console.log(report);

// 21. Find Three Products Within a Budget: Given products and their prices, select exactly three different products whose total price is as close as possible to the budget without exceeding it.

let products = [
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 1000 },
  { name: "Headphones", price: 1500 },
  { name: "Webcam", price: 1200 },
  { name: "Speaker", price: 800 },
];

let budget = 3000;
let bestCombination = [];
let bestTotal = 0;

for (let i = 0; i < products.length; i++) {
  for (let j = i + 1; j < products.length; j++) {
    for (let k = j + 1; k < products.length; k++) {
      let total = products[i].price + products[j].price + products[k].price;

      if (total <= budget && total > bestTotal) {
        bestTotal = total;
        bestCombination = [products[i], products[j], products[k]];
      }
    }
  }
}

console.log("Products:", bestCombination);
console.log("Total:", bestTotal);
console.log("Remaining budget:", budget - bestTotal);

//22. Combine Duplicate Products: Some product records have the same product ID. Combine records with matching IDs by adding their quantities, while keeping the other product details.

let productss = [
  { id: 1, name: "Mouse", quantity: 5, price: 500 },
  { id: 2, name: "Keyboard", quantity: 3, price: 1000 },
  { id: 1, name: "Mouse", quantity: 4, price: 500 },
  { id: 3, name: "Monitor", quantity: 2, price: 5000 },
];

let combined = Object.values(
  productss.reduce((acc, curr) => {
    if (!acc[curr.id]) {
      acc[curr.id] = { ...curr };
    } else {
      acc[curr.id].quantity += curr.quantity;
    }

    return acc;
  }, {}),
);

console.log(combined);

// 23. Compare User Lists: Compare an old user list with a new one. Find users who were added, users who were removed, and existing users whose details changed. Use the user ID to identify each person.

let oldUsers = [
  { id: 1, name: "Amit", age: 22 },
  { id: 2, name: "Raj", age: 23 },
  { id: 3, name: "Priya", age: 21 },
];

let newUsers = [
  { id: 1, name: "Amit", age: 23 },
  { id: 3, name: "Priya", age: 21 },
  { id: 4, name: "Neha", age: 24 },
];

let added = [];
let removed = [];
let changed = [];

newUsers.forEach((user) => {
  let oldUser = oldUsers.find((old) => old.id === user.id);

  if (!oldUser) {
    added.push(user.name);
  } else if (oldUser.name !== user.name || oldUser.age !== user.age) {
    changed.push(user.name);
  }
});

oldUsers.forEach((user) => {
  let exists = newUsers.some((newUser) => newUser.id === user.id);

  if (!exists) {
    removed.push(user.name);
  }
});

console.log("Added:", added);
console.log("Removed:", removed);
console.log("Changed:", changed);

//24. Find Consecutive Absences: Given employee attendance records, find employees who were absent for three or more consecutive working days. Weekends should not break the sequence.

let attendance = [
  { employee: "Amit", date: "2026-10-19", status: "Absent" },
  { employee: "Amit", date: "2026-10-20", status: "Absent" },
  { employee: "Amit", date: "2026-10-21", status: "Absent" },
  { employee: "Raj", date: "2026-10-19", status: "Absent" },
  { employee: "Raj", date: "2026-10-20", status: "Present" },
  { employee: "Raj", date: "2026-10-21", status: "Absent" },
];

let grouped = attendance.reduce((acc, curr) => {
  if (!acc[curr.employee]) {
    acc[curr.employee] = [];
  }

  acc[curr.employee].push(curr);
  return acc;
}, {});

let result = [];

for (let employee in grouped) {
  let count = 0;

  for (let record of grouped[employee]) {
    if (record.status === "Absent") {
      count++;
    } else {
      count = 0;
    }

    if (count === 3) {
      result.push(employee);
      break;
    }
  }
}

console.log(result);

//25. Find Customers Who Bought Every Category: Given customer purchase records, find customers who have purchased at least one product from every category in a required list.

let requiredCategories = ["Electronics", "Clothing", "Books"];

let purchases = [
  { customer: "Amit", category: "Electronics" },
  { customer: "Amit", category: "Clothing" },
  { customer: "Amit", category: "Books" },
  { customer: "Raj", category: "Electronics" },
  { customer: "Raj", category: "Books" },
  { customer: "Priya", category: "Electronics" },
  { customer: "Priya", category: "Clothing" },
  { customer: "Priya", category: "Books" },
];

let customerCategories = purchases.reduce((acc, curr) => {
  if (!acc[curr.customer]) {
    acc[curr.customer] = new Set();
  }

  acc[curr.customer].add(curr.category);

  return acc;
}, {});

console.log(customerCategories);

let result1 = Object.keys(customerCategories).filter((customer) => {
  return requiredCategories.every((category) =>
    customerCategories[customer].has(category),
  );
});

console.log(result1);

//26. Create a Customer Spending Report: Given customer orders, calculate each customer's total spending, most frequently purchased product, and date of their latest order.

let orders = [
  { customer: "Amit", product: "Mouse", amount: 500, date: "2026-10-19" },
  { customer: "Amit", product: "Mouse", amount: 500, date: "2026-10-21" },
  { customer: "Amit", product: "Monitor", amount: 3000, date: "2026-10-22" },
  { customer: "Raj", product: "Keyboard", amount: 1000, date: "2026-10-20" },
];

let report1 = orders.reduce((acc, curr) => {
  if (!acc[curr.customer]) {
    acc[curr.customer] = {
      total: 0,
      products: {},
      latest: curr.date,
    };
  }

  let c = acc[curr.customer];
  c.total += curr.amount;
  c.products[curr.product] = (c.products[curr.product] || 0) + 1;

  if (curr.date > c.latest) c.latest = curr.date;

  return acc;
}, {});

console.log(report1);

for (let name in report1) {
  let products = report1[name].products;
  report1[name].mostPurchased = Object.keys(products).reduce((acc, curr) =>
    products[acc] >= products[curr] ? acc : curr,
  );
}

console.log(report1);

//27. Build a Category Tree: Categories are stored in a flat array. Each category has an ID and a parent ID. Convert the list into a tree where child categories appear inside their parent categories.

let categories = [
  { id: 1, name: "Electronics", parentId: null },
  { id: 2, name: "Mobiles", parentId: 1 },
  { id: 3, name: "Laptops", parentId: 1 },
  { id: 4, name: "Clothing", parentId: null },
  { id: 5, name: "tops", parentId: 4 },
];

let tree = [];
let map = {};

categories.forEach((cat) => {
  map[cat.id] = { ...cat, children: [] };
});

console.log(map);

categories.forEach((cat) => {
  if (cat.parentId === null) {
    tree.push(map[cat.id]);
  } else {
    map[cat.parentId].children.push(map[cat.id]);
  }
});
console.log(tree);
console.log(JSON.stringify(tree, null, 1));

//28. Flatten a Nested Object: Convert a nested object into a flat object using dot-separated keys.
// Example: { user: { name: "Amit", address: { city: "Pune" } } } → { "user.name": "Amit", "user.address.city": "Pune" }

let data = {
  user: {
    name: "Amit",
    address: {
      city: "Pune",
      country: "India",
    },
    skills: {
      primary: "JavaScript",
      secondary: "Python",
    },
  },
};

let result2 = {};

function flatten(obj, prefix = "") {
  for (let key in obj) {
    let newKey = prefix ? prefix + "." + key : key;
    console.log(
      "key ->",
      key,
      "\n",
      "new-key ->",
      newKey,
      "/ prefix ->",
      prefix,
      "/key ->",
      key,
    );

    if (typeof obj[key] === "object" && obj[key] !== null) {
      console.log("true->", obj);
      flatten(obj[key], newKey);
    } else {
      result2[newKey] = obj[key];
      console.log("false ->", "result : ", result2, " /obj : ", obj);
    }
  }
}

flatten(data);
console.log(result2);

// 29. Calculate Final Inventory: Given current stock and a list of incoming and outgoing stock transactions, calculate the final quantity of every product. Also identify transactions that would cause stock to fall below zero.

let stock = { Mouse: 5, Keyboard: 3 };

let transactions = [
  { product: "Mouse", qty: 2 },
  { product: "Keyboard", qty: -5 },
  { product: "Mouse", qty: -3 },
];

let invalid = [];

transactions.forEach((t) => {
  if (stock[t.product] + t.qty < 0) {
    invalid.push(t);
  } else {
    stock[t.product] += t.qty;
  }
});

console.log("Stock:", stock);
console.log("Invalid:", invalid);

//30. Find Appointment Conflicts: Given clinician appointment records with start and end times, find pairs of appointments that overlap for the same clinician.

let appointments = [
  { doctor: "A", start: 9, end: 11 },
  { doctor: "A", start: 10, end: 12 },
  { doctor: "B", start: 9, end: 10 },
  { doctor: "A", start: 11, end: 12 },
];

let conflicts = appointments.filter((a, i) =>
  appointments.some((b, j) => {
    return j > i && a.doctor === b.doctor && a.start < b.end && b.start < a.end;
  }),
);
console.log(conflicts);


//32. Identify Duplicate Transactions: Given financial transactions, identify possible duplicates using the user ID, amount, transaction type, and timestamp. Treat transactions within a specified time window as possible duplicates.

