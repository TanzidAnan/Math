
import './App.css'

function App() {

  return (
    <>
      <p></p>
      <Person></Person>
      <Person></Person>
      <AddPreson name= "Tanzid" age="21"></AddPreson>
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

export default App
