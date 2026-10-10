let student = []

async function submitForm(event){
    event.preventDefault();
    try{

        let sname= document.getElementById('name').value;
        let semail= document.getElementById('email').value;
        let sphone= Number(document.getElementById('phone').value);
        // let smarks= Number(document.getElementById('marks').value);
        let scity= document.getElementById('city').value;
        // let spercentage = calc_percentage(smarks)
        // let sgrade = calc_grade(spercentage);
        // let passOrFail = calc_status(sgrade);

        let duplicate = student.some(value =>{
           return value.phone === sphone || value.email === semail
        })
        if(duplicate){
            throw new Error("Student exist alredy")
        }
        let response = await fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                body: JSON.stringify({
                    name: sname,
                    email: semail,
                    phone: sphone,
                    address: {
                            city: scity
                        }
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    },
                })
        let json = await response.json()
        console.log("json+++",json)
        
        student.push(json);
        displayStudents();
                
            
        
    
        // let studentObj = {
        //     id : student.length +1,
        //     name : sname,
        //     email : semail,
        //     phone : sphone,
        //     city : scity,
        // }
        // student.push(studentObj)
        

        document.getElementById('msg').innerHTML = "Student Added successfully"
        document.getElementById('msg').style.color = "green" ;

        document.getElementById("submitform").reset();
    }
    catch(err){
        document.getElementById('msg').innerHTML = err.message;
        document.getElementById('msg').style.color = "red" ;
    }

}

function deleteStudent(event){
    try{
        event.preventDefault();
        let id = Number(document.getElementById('no').value);
        let index = student.findIndex(value =>{
            return value.id == id
        })
        if(index !== -1){
            student.splice(index,1);
        }
        else{
            throw new Error('id is not found')
        }
        document.getElementById('msg1').innerHTML = "Deleted successFully";
        document.getElementById('msg1').style.color = "green";
        displayStudents();
    }
    catch(err){
        document.getElementById('msg1').innerHTML = err.message;
        document.getElementById('msg1').style.color = "red";

    }
}



function displayStudents() {

    let output = ""

console.log("student",student)
    student.forEach(student => {
        
        output +=
            "<tr>" +
            "<td>" + student.id + "</td>" +
            "<td>" + student.name + "</td>" +
            "<td>" + student.email + "</td>"+
            "<td>" + student.phone + "</td>" +
            "<td>" + student.address.city + "</td>" +
            "<td><button onclick=\"document.getElementById('modify-model').showModal();\" class='action-btn' data-id='" + student.id + "'>&#8942;</button></td>"+
            "</tr>"
    })

    document.getElementById("studentTable").innerHTML = output

}

async function loaduser(){
    let response = await fetch("https://jsonplaceholder.typicode.com/users")
    let data = await response.json()

    console.log("data", data)
     student = data
    displayStudents();
}
loaduser();

function modifyModel(){

}

document.getElementById("submitform").addEventListener("submit",submitForm);
document.getElementById('delete-form').addEventListener("submit",deleteStudent);