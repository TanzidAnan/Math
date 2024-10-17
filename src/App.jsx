
import Actor from './Actor';
import './App.css'
import Singer from './Singer';

function App() {
  const actors = ['tanzid', 'anan', 'marzan', 'Milon'];
  const singers = [
    { id: 1, name: 'Tanzid', age: 20 },
    { id: 2, name: 'Marzan', age: 20 },
    { id: 3, name: 'Anan', age: 20 },
  ]

  return (
    <>
      <p>Tanzid</p>

      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }

      <Actor name="Raj"></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }

      {/* <ToDo lastName="Anan" isDone={true}></ToDo>
      <ToDo lastName="Anan" isDone={false}></ToDo>
      <ToDo lastName="Anan" isDone={true}></ToDo>
      <ToDo lastName="Anan" isDone={false}></ToDo>
      <ToDo lastName="Anan" isDone={true}></ToDo> */}
      <Person></Person>
      <Person></Person>
      {/* <AddPreson name= "Tanzid" age="21"></AddPreson>
      <AddPreson name= "marzan" age="30"></AddPreson>
      <Devloper yera={2021} name="web developer"></Devloper> */}
    </>
  )
}

function Person() {
  const age = 20;
  const mony = 30;
  const person = { name: 'Tanzid ', address: 'Daka' }
  return <h1>This is {person.name} with  :{age + mony}</h1>
}

// function AddPreson(props){
//   console.log(props)
//   return (
//     <div>
//       <h1>This is {props.name} and age {props.age}</h1>
//     </div>
//   )
// }

// function Devloper({yera , name}){
//   return(
//     <div>
//       <h3>Fast Developer {yera} Name {name}</h3>
//     </div>
//   )
// }

export default App
