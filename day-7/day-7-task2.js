//Take marks for multiple students and calculate grade and pass/fail status using conditions and loops.
const total_marks = 300
var students_marks = [
    {name:"Rohan", maths:70 , chem:80 , phy:90 },
    { name:"Krisha" , maths:40 , chem:60 , phy:20 },
    { name:"Vishwa" , maths:50 , chem:80 , phy:90 },
    { name:"Yashvi", maths:70 , chem:90 , phy:50 },
    { name:"Rishi" , maths:50 , chem:50 , phy:50 },
]
var marks , percentage , grade;
for(i in students_marks){
    console.log(`student name: ${students_marks[i].name}`)
    marks= students_marks[i].chem + students_marks[i].maths + students_marks[i].phy
    percentage = marks / total_marks * 100 ;
    console.log(`percentage : ${percentage}`)

    if (percentage >= 90 && percentage <= 100){
        grade = "A"
        console.log("Grade : A")
    }
    else if (percentage >= 70 && percentage < 90)
    {
        grade = "B"
        console.log("Grade : B")
    }
    else if (percentage >= 45 && percentage < 70)
    {
        grade = "C"
        console.log("Grade : C")
    }
    else if (percentage >= 0 && percentage < 45)
    {
        grade = "D"
        console.log("Grade : D")
    }

    if (grade == "D"){
        console.log("Result : Fail \n")
    }
    else{
        console.log("Result : Pass \n")
    }
    
}
