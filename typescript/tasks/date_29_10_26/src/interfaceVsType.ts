interface Student {
    id : number;
    name : string;
    age : number;
}

type StudentType = {
    id : number;
    name : string;
    age : number;
}

interface StudentDetails extends Student {
    course: string
}

type StudentDetailsType = StudentType & {
    course : string;
}

interface Employee {
    id : number;
    name : string
}

interface Employee {
    salary : number;
}

const employee: Employee = {
    id : 1,
    name : 'rahul',
    salary : 50000
}

interface Calculate {
    (a : number, b : number) : number;
}

const add : Calculate = (a,b) => a + b

type CalculateType = (a : number , b : number) => number;

const multiply: CalculateType = (a,b) => a * b

type ID = number | string;

let studentId :ID = 101
studentId = 'ST101';

type Subject = 'Math' | 'Science' | 'English'

type Marks = {
    [K in Subject] : number
}

const marks : Marks = {
    Math : 89,
    Science : 90,
    English : 90
}