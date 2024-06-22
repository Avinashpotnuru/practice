export interface TodoProps{
    id:number,
    todo:string,
    isComplete:boolean
}





export interface TodoFormProps{
    addTodo: (text: string) => void;
}
