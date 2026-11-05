let data: any = "Hello TypeScript";

if (typeof data === "string") {
  //  TypeScript now safely knows 'serverResponse' is a string
  console.log(data.toUpperCase()); // Outputs: "SUCCESS!"
} else {
  console.log("Data is not a string.");
}

//unknown

let newData: unknown = "Unknown type";

//console.log(newData.toUpperCase()); error : 'newData' is of type 'unknown'.

if (typeof newData === "string") {
  console.log(newData.toUpperCase());
}

//using never

function handleError(msg: string): never{
    throw new Error(msg)
}

function userName(name:string):string{
    if (name === undefined){
        handleError('user not found')
    }
    return `user name ${name}`
}

userName('kavya')