let mathametics, chemistry , physics
let student = [];

// function getCham(){
//     Chem = document.getElementById('chem').value
// }
// function getPhy(){
//     Phy = document.getElementById('physics').value
// }
// function getMaths(){
//     Maths = document.getElementById('maths')
// }

function submitForm(event){
    try{

         event.preventDefault();
    mathametics = Number(document.getElementById('maths').value)
    chemistry = Number(document.getElementById('chem').value)
    physics = Number(document.getElementById('physics').value)
    
    let total_marks = calc_marks(mathametics , chemistry , physics)
    let percentage = calc_percentage(total_marks)
    let grade = calc_grade(percentage)
    let passOrFail = checkPassOrFail(grade)
    
    let student1 = {
        name : document.getElementById('name').value,
        marks :
        {
            maths : mathametics,
            chemistry : chemistry,
            physics : physics 
        },
        percentage : percentage,
        grade : grade , 
        status : passOrFail
    }
    student.push(student1)

    document.getElementById('description').innerHTML = 
    "Total Marks: " + total_marks + "<br>" +
    "Percentage :"+ percentage + "<br>" + 
    "Your Grade :"+ grade + "<br>" +
    "Status :" + passOrFail

    }
    catch(err){
        document.getElementById('description').innerHTML = err
    }
   

}
let calc_marks = (math,chem,phy) => {
    return math + chem + phy
}



let calc_percentage = (marks) => {
    return marks / 300 * 100
}



let calc_grade = (perc) => {
    if (perc >= 80 && perc <= 100){
        return "A"
    } 
    else if (perc >= 70 && perc < 80){
        return "B"
    }

    else if(perc>= 45 && perc<70){
        return "C"
    }
    else if (perc >= 0 && perc < 45){
        return "D"
    }
}


let checkPassOrFail = (grade) => {
    if (grade == "D"){
        return "Fail"
    }
    else{
        return "Pass"
    }
}




console.log(Chem)
console.log(Maths)
console.log(Phy)