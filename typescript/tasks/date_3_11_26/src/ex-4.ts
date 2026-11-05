type click = {
    x : number;
    y : number;
}

type submit = {
    formId : string;
    data : Record<string, unknown>;
}

type resize = {
    width:number;
    height : number;
}

type error = {
    code:number;
    message:string;
}

type EventMap = {
    'click' : click;
    'error' : error;
    'resize' : resize;
    'submit' : submit;
}

type EventHandlers = {
    [K in keyof EventMap] ?: Array<(payload: EventMap[K]) => void>
}

const  handler : EventHandlers = {};

type ExtractArrayItem<T> = T extends (infer U)[]? U : never
type Result = ExtractArrayItem<string[]>

type IsString<T> = T extends string ? true : false

type CapitalizeWords = Capitalize<keyof EventMap>
type EventTemplate = `on${CapitalizeWords}`



function on<K extends keyof EventMap>(name : K , callback:(payload:EventMap[K])=>void ):void{
    if(!handler[name]){
        handler[name] = []
    }
    handler[name].push(callback)
}

function emit<K extends keyof EventMap>(name : K, payload : EventMap[K]){
    handler[name]?.forEach((callback)=>{
        callback(payload)
    })
}

on('click' , (payload) => {console.log(payload.x); 
    console.log(payload.y)})
emit('click' , {
    x : 10, y : 20
})
on('resize',(payload) => {
    console.log(payload.height)
    console.log(payload.width)
})
emit('resize',{
    height : 20 , width : 10
})
console.log(handler)