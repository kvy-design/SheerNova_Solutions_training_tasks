type subjects = {
    name: string;
    marks: number;
}

type Student = {
    id : number;
    name : string;
    age: number;
    email: string;
    subject : subjects[];
    isenrolled : boolean;
}

let kavya:Student = {
    id : 1,
    name : 'kavya',
    age : 21,
    email : 'kvy@mail.com',
    subject : [
       { name : 'Maths' , marks: 97},
       {name: 'Science', marks: 98},
       {name: 'English', marks: 90}
    ],
    isenrolled : true
}

let isha:Student = {
    id : 1,
    name : 'isha',
    age : 21,
    email : 'isha@mail.com',
    subject : [
       { name : 'Maths' , marks: 91},
       {name: 'Science', marks: 92},
       {name: 'English', marks: 100}
    ],
    isenrolled : false
}

function displayStudent(student:Student):void{
    console.log('Id: ',student.id);
    console.log('Name: ',student.name);
    console.log('Age: ',student.age);
    console.log('Email: ',student.email);
    console.log('Enrolled: ',student.isenrolled);
    console.log('Subject:');
    student.subject.forEach((sub)=>{
        console.log(`${sub.name}: ${sub.marks}`);
    });
}

function calculateAverage(student:Student): number{
    if(student.subject.length === 0){
        return 0;
    }
    const total:number = student.subject.reduce((acc,curr)=>{
        acc += curr.marks
        return acc
    },0)
    return total/student.subject.length;
}

displayStudent(kavya);
console.log('Average:',calculateAverage(kavya));

displayStudent(isha);
console.log('Average : ', calculateAverage(isha));