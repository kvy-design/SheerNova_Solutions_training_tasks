// Create student variables and calculate total marks, percentage, and attendance.


const total_marks = 300
const totalDays = 100 
var student = {
    maths:70 , chem:80 , phy:90, attend_class_days: 90
}

var marks = student.maths + student.chem + student.phy ;
var percentage = (marks / total_marks) * 100;
var attendence = (student.attend_class_days / totalDays) * 100;

console.log(`total marks :${marks}\n total percentage: ${percentage}\n total attendence : ${attendence}`)

