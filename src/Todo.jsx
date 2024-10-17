export default function ToDo({lastName,isDone}){
    if(isDone ===true){
        return <li>Tanzid  {lastName}</li>
    }
    else{
        return <li>No Name</li>
    }
   
}