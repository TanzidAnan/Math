
import './App.css'

function App() {

  return (
    <>
      <p></p>
      <Person></Person>
      <Person></Person>
    </>
  )
}

function Person() {
  const age = 20;
  const mony =30;
  const person ={name:'Tanzid ', address: 'Daka'}
  return <h1>This is {person.name} with  :{age + mony}</h1>
}

export default App
