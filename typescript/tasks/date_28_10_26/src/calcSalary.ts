type Salary = {
  name: string;
  basic: number;
  allowance: number;
  deduction: number;
  hra?: number;
  bonus?: number;
};

type PermanentEmployee = Salary & {
  category: "permanent";
};

type Manager = Salary & {
  category: "Manager";
};

type Contract = Salary & {
  category: "Contract";
};


let employee1: PermanentEmployee[] = [
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

let employee2:Manager[] = [
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
]

function handleError(error:string):never{
    throw new Error(error)
}
function calculateSalary(emp: PermanentEmployee[]): number;
function calculateSalary(emp: Manager[]):number;
function calculateSalary(emp: Contract[]): number;

function calculateSalary(
  emp: PermanentEmployee[] | Manager[] | Contract[],
): number {
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
console.log(calculateSalary(employee2))
console.log(calculateSalary(employee1));
