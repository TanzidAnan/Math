
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
  return <h1>This is Person :{age}</h1>
}

export default App
