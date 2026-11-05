//Partial - makes optionals 

interface Student {
    id: number;
    name : string;
    age: number;
}

type OptionalStudent = Partial<Student>;

interface Student {
    id : number;
    name : string;
    age: number;
    email : string;
}

//Required 

type requiredStudent = Required<Student>

const s : requiredStudent = {
    age : 21,
    name : 'kavya',
    id : 47,
    email : 'kvy@mail.com'
}

//picked

type StuentPreview = Pick<Student, 'name' | 'age'>
const preview:StuentPreview = {
    'name' : 'Vishwa',
    'age' : 20
}

//Omit

type newStudent = Omit<Student, 'age'>

const ns : newStudent = {
    'id' : 20,
    'name' : 'jay',
    'email' : '23@mail.com'
}

//Record

type Subject = 'Maths' | 'Science' | 'English'

const marks: Record<Subject,number> = {
    Maths : 90,
    Science : 89,
    English : 78
}

//Return type
function getStudentName() {
    return "Vatsal";
}
type StudentName = ReturnType<typeof getStudentName>;

//Parameters

function addStudent(name: string, age: number, course: string) {
    console.log(name, age, course);
}
type StudentParams = Parameters<typeof addStudent>;
const studentDetails:StudentParams = [
    'krish' , 22, 'ce'
]

//Exclude
type Status = "pending" | "approved" | "rejected";
type ActiveStatus = Exclude<Status, "rejected">;
const status1:ActiveStatus = 'pending';
const status2:ActiveStatus = 'approved';

//Extract

type ApprovedStatus = Extract<Status,'approved'>
const status3 : ApprovedStatus = 'approved'

//nonNullable 

type UserName = string | null | undefined;

type validUsername = NonNullable<UserName>

const name1: validUsername = 'Vats' ;