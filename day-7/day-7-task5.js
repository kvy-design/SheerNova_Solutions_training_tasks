//Objects – Create student objects with name, course, marks, and attendance. Practice updating data, destructuring, and spread syntax.

var student = [
    {   name: "Kavya",
        course:"CSD",
        attendence:70,
        marks:{chem : 60,maths : 70,phy : 80}
    },
    {   name: "Tisha",
        course: "CP",
        attendence:50,
        marks:{chem : 90,maths : 90,phy : 80}
    },]
//updating value
student[0].marks.chem = 50
console.log(student)
//destructuring
let {name, course , attendence , marks:{chem} } = student[0]
console.log(`${name} ${course} ${attendence} ${chem}`)

//spread oprator (...)

fruits = ["Apple" , "Bannan" , "Grapes"]
veges = ["Gajar", "totmato", "Beans"]
let vegetables = [...fruits,...veges]
console.log(vegetables)