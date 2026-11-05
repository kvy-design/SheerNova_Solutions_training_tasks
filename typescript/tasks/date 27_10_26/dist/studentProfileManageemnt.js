"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let kavya = {
    id: 1,
    name: 'kavya',
    age: 21,
    email: 'kvy@mail.com',
    subject: [
        { name: 'Maths', marks: 97 },
        { name: 'Science', marks: 98 },
        { name: 'English', marks: 90 }
    ],
    isenrolled: true
};
let isha = {
    id: 1,
    name: 'isha',
    age: 21,
    email: 'isha@mail.com',
    subject: [
        { name: 'Maths', marks: 91 },
        { name: 'Science', marks: 92 },
        { name: 'English', marks: 100 }
    ],
    isenrolled: false
};
function displayStudent(student) {
    console.log('Id: ', student.id);
    console.log('Name: ', student.name);
    console.log('Age: ', student.age);
    console.log('Email: ', student.email);
    console.log('Enrolled: ', student.isenrolled);
    console.log('Subject:');
    student.subject.forEach((sub) => {
        console.log(`${sub.name}: ${sub.marks}`);
    });
}
function calculateAverage(student) {
    if (student.subject.length === 0) {
        return 0;
    }
    const total = student.subject.reduce((acc, curr) => {
        acc += curr.marks;
        return acc;
    }, 0);
    return total / student.subject.length;
}
displayStudent(kavya);
console.log('Average:', calculateAverage(kavya));
displayStudent(isha);
console.log('Average : ', calculateAverage(isha));
//# sourceMappingURL=studentProfileManageemnt.js.map