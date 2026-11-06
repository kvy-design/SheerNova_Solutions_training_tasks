//31. Remove the Smallest Section: Find the shortest continuous section of an array that can be removed so that no duplicate numbers remain in the remaining array.

let arr = [1, 2, 3, 2, 4, 5];
let start_index = 0;
let end_index = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (j !== i && arr[i] == arr[j]) {
      start_index = j;
      end_index = i;
    }
  }
}

arr.splice(start_index, end_index);

console.log(arr, start_index, end_index);

//32. Identify Duplicate Transactions: Given financial transactions, identify possible duplicates using the user ID, amount, transaction type, and timestamp. Treat transactions within a specified time window as possible duplicates.

let transactions = [
  { userId: 1, amount: 500, type: "debit", time: 1000 },
  { userId: 2, amount: 200, type: "credit", time: 1100 },
  { userId: 1, amount: 500, type: "debit", time: 1200 },
  { userId: 1, amount: 500, type: "debit", time: 5000 },
];

let window = 300;
let duplicates = [];

for (let i = 0; i < transactions.length; i++) {
  for (let j = i + 1; j < transactions.length; j++) {
    let a = transactions[i];
    let b = transactions[j];
    console.log(a, b);

    if (
      a.userId === b.userId &&
      a.amount === b.amount &&
      a.type === b.type &&
      Math.abs(a.time - b.time) <= window
    ) {
      console.log(
        a.userId,
        b.userId,
        a.amount,
        b.amount,
        a.type,
        b.type,
        Math.abs(a.time - b.time),
        window,
      );
      duplicates.push([a, b]);
    }
  }
}

console.log(duplicates);

//33. Department Salary Report: For each department, calculate the number of employees, average salary, highest and lowest salaries, and names of all employees tied for the highest salary.

let employees = [
  { name: "Amit", department: "IT", salary: 50000 },
  { name: "Neha", department: "HR", salary: 40000 },
  { name: "Raj", department: "IT", salary: 60000 },
  { name: "Priya", department: "IT", salary: 60000 },
  { name: "Jay", department: "HR", salary: 50000 },
];

let report = employees.reduce((acc, curr) => {
  if (!acc[curr.department]) {
    acc[curr.department] = {
      lengthOfEmployee: 0,
      highSalary: curr.salary,
      lowSalary: curr.salary,
      employeess: [curr.name],
    };
  }

  let dept = acc[curr.department];

  dept.lengthOfEmployee++;

  if (curr.salary > dept.highSalary) {
    dept.highSalary = curr.salary;
    dept.employeess = [curr.name];
  } else if (
    curr.salary === dept.highSalary &&
    dept.employeess[0] !== curr.name
  ) {
    dept.employeess.push(curr.name);
  }

  dept.lowSalary = Math.min(dept.lowSalary, curr.salary);

  return acc;
}, {});

console.log(report);

//34. Top Three Products by Revenue: Given order records, calculate revenue for each product and return the top three. Account for discounts, cancelled orders, and returned quantities.

let orders = [
  {
    product: "Laptop",
    price: 50000,
    quantity: 2,
    discount: 10,
    returned: 0,
    status: "completed",
  },
  {
    product: "Phone",
    price: 20000,
    quantity: 3,
    discount: 5,
    returned: 1,
    status: "completed",
  },
  {
    product: "Tablet",
    price: 15000,
    quantity: 2,
    discount: 0,
    returned: 0,
    status: "completed",
  },
  {
    product: "Laptop",
    price: 50000,
    quantity: 1,
    discount: 0,
    returned: 0,
    status: "cancelled",
  },
  {
    product: "Phone",
    price: 20000,
    quantity: 2,
    discount: 0,
    returned: 0,
    status: "completed",
  },
];

let revenue = orders.reduce((acc, curr) => {
  if (curr.status === "cancelled") {
    return acc;
  }

  let sold = curr.quantity - curr.returned;
  let amount = sold * curr.price * (1 - curr.discount / 100);

  acc[curr.product] = (acc[curr.product] || 0) + amount;

  return acc;
}, {});

let topThree = Object.entries(revenue)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 3);

console.log(revenue);
console.log("Top 3 products:", topThree);

//35. Compare Nested Objects: Compare two nested objects and report all added, removed, or changed values, including the full path to each changed field.


let obj1 = {
    user: { name: "Amit", age: 22, city: "Nadiad" }
};

let obj2 = {
    user: { name: "Amit", age: 23, email: "amit@gmail.com" }
};

function compare(a, b, path = "") {
    let result = [];

    for (let key in a) {
        console.log('key1',key)
        let fullPath = path ? path + "." + key : key;

        if (!(key in b)) {
            result.push("Removed: " + fullPath);
        } else if (typeof a[key] === "object" && a[key] !== null) {
            result.push(...compare(a[key], b[key], fullPath));
        } else if (a[key] !== b[key]) {
            result.push("Changed: " + fullPath);
        }
    }

    for (let key in b) {
        if (!(key in a)) {
            console.log('key2',key)
            result.push("Added: " + (path ? path + "." + key : key));
        }
    }

    return result;
}

console.log(compare(obj1, obj2));

//36. Task Dependency Order: Each task lists the tasks that must be completed before it can start. Find a valid task execution order and identify circular dependencies that make completion impossible.


let tasks = {
    A: [],
    B: ["A"],
    C: ["A"],
    D: ["B", "C"],
    E: ["D"]
};

let order = [];
let visited = [];

function complete(task) {
    if (visited.includes(task)) return;

    visited.push(task);

    for (let dependency of tasks[task]){
        complete(dependency);
    }

    order.push(task);
}

for (let task in tasks) {
    complete(task);
}

console.log(order);