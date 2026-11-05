interface Student {
    id: number;
    name: string;
    age: number;
}

type studentOptional = {
    [K in keyof Student]?: Student[K]
}

const student1:studentOptional = {
    name : 'vats'
}

//u ? x : y