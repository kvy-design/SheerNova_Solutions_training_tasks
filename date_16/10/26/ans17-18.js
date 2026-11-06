// 17. Group Data Using a Field: Given a list of students, group them by their class. Each class should contain the names of its students.
// Example: [{name:"Amit",class:"A"},{name:"Priya",class:"B"},{name:"Raj",class:"A"}] → { A: ["Amit", "Raj"], B: ["Priya"] }

let data = [{name:"Amit",classs:"A"},{name:"Priya",classs:"B"},{name:"Raj",classs:"A"}]
let devideClass = data.reduce((acc,key)=>{
    if(!acc[key.classs]){
            acc[key.classs] = []
    }
    acc[key.classs].push(key.name)
    return acc 
},{})
console.log(devideClass)

// 18. Find Duplicate Emails: Find email addresses that belong to multiple users. Ignore uppercase/lowercase differences and extra spaces.
// Example: ["amit@gmail.com", " AMIT@gmail.com ", "raj@gmail.com"] → ["amit@gmail.com"]
let value = []
let emails = ["amit@gmail.com", " AMIT@gmail.com ", "raj@gmail.com"]
let duplicateEmail = emails.reduce((acc,curr)=>{
    let email = curr.trim().toLowerCase();
    if(acc.seen.includes(email)){
        acc.duplicate.push(email)
    }else{
        acc.seen.push(email)
    }
    return acc
},{seen : [] , duplicate : []})
console.log(duplicateEmail.duplicate);