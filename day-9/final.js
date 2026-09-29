
let students = []

function submitForm(event) {

    event.preventDefault()

    try {

        // Get values from form
        let name = document.getElementById("name").value
        let email = document.getElementById("email").value
        let phone = document.getElementById("phone").value
        let dob = document.getElementById("dob").value
        let marks = Number(document.getElementById("marks").value)

//age finding
        let currentYear = new Date().getFullYear()
        let birthYear = new Date(dob).getFullYear()

        let age = currentYear - birthYear

        if (age <= 0) {
            throw new Error("Please enter valid DOB")
        }

        //check duplicates

        let duplicate = students.some(student =>
            student.email === email ||
            student.phone === phone
        )

        if (duplicate) {
            throw new Error("Student already exists.")
        }
        //calculate
        let total_marks = marks
        let percentage = calc_percentage(total_marks)
        let grade = calc_grade(percentage)
        let passOrFail = checkPassOrFail(grade)
        let student = {
            id: students.length + 1,
            name: name,
            email: email,
            phone: phone,
            dob: dob,
            age: age,
            total: total_marks,
            percentage: percentage,
            grade: grade,
            status: passOrFail
        }
        // Add student to array
        students.push(student)
        // Display students
        displayStudents()
        // Calculate statistics
        calculateStatistics()
        // Show success message
        document.getElementById("message").innerHTML =
            "Student added successfully!"

        document.getElementById("message").style.color = "green"
        // Clear form
        document.getElementById("studentForm").reset()

    }

    catch (err) {

        document.getElementById("message").innerHTML =
            err.message

        document.getElementById("message").style.color = "red"
    }
}

// Calculate Percentage

let calc_percentage = (marks) => {

    return (marks / 300) * 100

}

// Calculate Grade

let calc_grade = (perc) => {
    if (perc >= 80 && perc <= 100) {
        return "A"
    }
    else if (perc >= 70 && perc < 80) {
        return "B"
    }
    else if (perc >= 45 && perc < 70) {
        return "C"
    }
    else {

        return "D"
    }

}

// Pass or Fail

let checkPassOrFail = (grade) => {
    if (grade === "D") {
        return "Fail"
    }
    else {
        return "Pass"
    }

}

// Display Students

function displayStudents() {

    let output = ""


    students.forEach(student => {
        output +=
            "<tr>" +
            "<td>" + student.id + "</td>" +
            "<td>" + student.name + "</td>" +
            "<td>" + student.email + "</td>"+
            "<td>" + student.phone + "</td>" +
            "<td>" + student.dob + "</td>" +
            "<td>" + student.age + "</td>" +
            "<td>" + student.total + "</td>" +
            "<td>" + student.percentage.toFixed(2) + "</td>" +
            "<td>" + student.grade + "</td>" +
            "<td>" + student.status + "</td>" +
            "</tr>"
    })

    document.getElementById("studentTable").innerHTML = output

}



// Calculate Statistics

function calculateStatistics() {

    if (students.length === 0) {

        return
    }

    let totalMarks = students.reduce((sum, student) =>sum + student.total,0)


    let average = totalMarks / students.length

    let highest = Math.max(

        ...students.map(
            student => student.total
        )
    )


    let lowest = Math.min(

        ...students.map(
            student => student.total
        )
    )


    let passed = students.filter(

        student => student.status === "Pass"

    ).length


    let failed = students.filter(

        student => student.status === "Fail"

    ).length


    document.getElementById("statistics").innerHTML =

        "Total Students: " +students.length +"<br>" +
        "Average Marks: " +average.toFixed(2) +"<br>" +
        "Highest Marks: " +highest +"<br>" +
        "Lowest Marks: " +lowest +"<br>" +
        "Passed Students: " +passed +"<br>" +
        "Failed Students: " +failed
}


function sortStudents() {
    students.sort((a, b) =>b.total - a.total)
    displayStudents()
}


// Dynamic Student Generation


function generateStudent() {

    let names = [ "Rahul","Priya","Amit","Neha"]

    let randomName =names[Math.floor(Math.random() * names.length)]

    let randomMarks =Math.floor(Math.random() * 301)

    // Calculate first
    let percentage =calc_percentage(randomMarks)
    let grade =calc_grade(percentage)
    let status =checkPassOrFail(grade)

    // Create student
    let student = {
        id: students.length + 1,
        name: randomName,
        email:
            randomName.toLowerCase() +
            Date.now() +
            "@gmail.com",
        phone: String(Math.floor(9000000000 + Math.random() * 1000000000)),
        dob: "2004-01-01",
        age:
            new Date().getFullYear() -
            2004,
        total: randomMarks,
        percentage: percentage,
        grade: grade,
        status: status
    }


    students.push(student)
    displayStudents()
    calculateStatistics()

}

function* studentGenerator() {

    for (let student of students) {

        console.log(student)
        yield student

    }

}

function processStudents() {

    let generator =studentGenerator()
    let output = ""
    for (let student of generator) {
        output +="Student: " +student.name +" | Marks: " +student.total +"\n"
    }


    document.getElementById("iteratorOutput").textContent = output

}


document.getElementById("studentForm").addEventListener("submit",submitForm)


document.getElementById("sortBtn").addEventListener("click",sortStudents)


document.getElementById("generateBtn").addEventListener("click",generateStudent)


document.getElementById("processBtn").addEventListener("click",processStudents)

