type ApiResponse<T> = {
    success : boolean;
    data : T | null;
    error: string | null;
    timestamp : Date;
}


type PaginatedResponse<T> = ApiResponse<T> & {
    page : number;
    totalPages : number;
    totalItems : number;
    items : T[]
}

function ApiError():ApiResponse<never>{
    throw new Error('Fail to get request')
}
async function fetchData<T>(url:string):Promise<ApiResponse<T>>{
    try {
        let responce = await fetch(url)
        if(!responce.ok) ApiError()
        let data : T = await responce.json()

        return {
            data : data,
            success : true,
            error : null,
            timestamp : new Date()
        }
    }
    catch(err){
        return {
            data : null,
            success : false,
            error : err instanceof Error? err.message : 'Something went wrong',
            timestamp : new Date()
        }
    }
}

fetchData('https://jsonplaceholder.typicode.com/posts/1').then(response => console.log(response))