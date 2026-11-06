//13 { IT: { employees: ["Amit", "Raj"], count: 2 }, HR: { employees: ["Priya"], count: 1 } }
let data = [
  { name: "Amit", department: "IT" },
  { name: "Priya", department: "HR" },
  { name: "Raj", department: "IT" }
]


let department = data.reduce((acc,curr) =>{
  if(!acc[curr.department]){
    acc[curr.department] = {
      employee : [],
      count : 0
    }
  }
    acc[curr.department].employee.push(curr.name);
    acc[curr.department].count = acc[curr.department].employee.length;
    return acc
},{})

console.log('13. ',department)
console.log('')


//14 { apple: 10, mango: 5 } and { apple: 20, orange: 8 } → { apple: 30, mango: 5, orange: 8 }

let obj1 = { apple: 10, mango: 5};
let obj2 = { apple: 20, orange: 8 , mango : 10};

let result = { ...obj1 };

for (let key in obj2) {
    result[key] = (result[key] || 0) + obj2[key];

}

console.log('14. ',result);
console.log('')

//15 find highest salary from employee object
let employees = [
    { name: "Amit", department: "IT", salary: 50000 },
    { name: "Priya", department: "HR", salary: 45000 },
    { name: "Raj", department: "IT", salary: 60000 },
    { name: "Neha", department: "IT", salary: 60000 },
    { name: "Karan", department: "HR", salary: 40000 }
];
let sortEmploees = employees.sort((a,b)=>{
  return b.salary - a.salary
})


let highSalary = employees.reduce((acc,curr)=>{
  if(!acc[curr.department]){
    acc[curr.department] = {
      salary : 0,
      name : []
    }
  }
  acc[curr.department].salary = curr.salary > acc[curr.department].salary ? curr.salary : acc[curr.department].salary;
  if(curr.salary == acc[curr.department].salary){
    acc[curr.department].name.push(curr.name)
  };
  return acc
},{})

console.log('15. ',highSalary)

//16. Compare Two Objects: Given two objects, find which keys have different values, including keys that exist in only one object.
//Example: { name: "Amit", age: 22 } and { name: "Amit", age: 23, city: "Pune" } → report age as changed and city as added.
let obj = {name: 'Amit' , age : 22}
let changedObj = { name:'Amit1' , age:23 , city:'pune' }


let changes = [...new Set([...Object.keys(obj), ...Object.keys(changedObj)])]
    .reduce((acc, key) => {
        if (!(key in obj)) {
            acc[key] = "added";
        } else if (obj[key] !== changedObj[key]) {
            acc[key] = "changed";
        }

        return acc;
    }, {});


// let set = new Set([...Object.keys(obj), ...Object.keys(changedObj)])
// console.log(set)

console.log(changes)