export default function ToDo({name,isDone}){
    if(isDone ===true){
        return <li>Last Name {name}</li>
    }
    else{
        return <li>No Name {name}</li>
    }
   
}