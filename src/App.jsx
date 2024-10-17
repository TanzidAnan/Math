
import './App.css'

function App() {

  return (
    <>
      <p></p>
      <Person></Person>
      <Person></Person>
      <AddPreson name= "Tanzid" age="21"></AddPreson>
      <AddPreson name= "marzan" age="30"></AddPreson>
      <Devloper yera={2021} name="web developer"></Devloper>
    </>
  )
}

function Person() {
  const age = 20;
  const mony =30;
  const person ={name:'Tanzid ', address: 'Daka'}
  return <h1>This is {person.name} with  :{age + mony}</h1>
}

function AddPreson(props){
  console.log(props)
  return (
    <div>
      <h1>This is {props.name} and age {props.age}</h1>
    </div>
  )
}

function Devloper({yera,name}){
  return(
    <div>
      <h3>Fast Developer {yera} Name {name}</h3>
    </div>
  )
}

export default App
