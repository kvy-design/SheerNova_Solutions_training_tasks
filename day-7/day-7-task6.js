//Modern JavaScript – Refactor the previous tasks using ES6+ features such as let/const, arrow functions, template literals, destructuring, spread/rest, and modules.

const total_marks = 300
var students_marks = [
    {name:"Rohan", maths:70 , chem:80 , phy:90 },
    { name:"Krisha" , maths:40 , chem:60 , phy:20 },
    { name:"Vishwa" , maths:50 , chem:80 , phy:90 },
    { name:"Yashvi", maths:70 , chem:90 , phy:50 },
    { name:"Rishi" , maths:50 , chem:50 , phy:50 },
]
var marks, percentage , grade , grade1 , avg
let calc_marks = (a,b,c) => {
    avg = calc_avg(a,b,c)
    return a + b + c
}

let calc_perctg = (marks) => {
    return (marks/300) * 100
}

let calc_grade = (percentage) => {
    if (percentage >= 90 && percentage <= 100){
        grade = "A"
    }
    else if (percentage >= 70 && percentage < 90)
    {
        grade = "B"
    }
    else if (percentage >= 45 && percentage < 70)
    {
        grade = "C"
    }
    else if (percentage >= 0 && percentage < 45)
    {
        grade = "D"
    }
}

let calc_avg = function(a, b, c) {
    return (a + b + c) / 3
}

for(i in students_marks){
    marks = calc_marks(students_marks[i].chem,students_marks[i].maths, students_marks[i].phy)
    percentage = calc_perctg(marks)
    calc_grade(percentage)
    console.log(`student name : ${students_marks[i].name}`)
    console.log(`Percentage : ${percentage}%`)
    console.log(`Grade : ${grade}`)
    console.log(`Average Marks : ${avg} \n`)


}