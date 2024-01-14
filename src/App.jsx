import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]=useState(5)
  //let counter=5
  const addVal=()=>{
    //counter++;
    if(counter<20)
    setCounter(counter+1)
  }
  const decVal=()=>{
    if(counter>0)
    setCounter(counter-1)
  }
  return (
    <>
      <h1>learn React</h1>
      <h2>Counter value :{counter}</h2>

      <button onClick={addVal}>Increment ({counter})</button>
      <br />
      <br />
      <button onClick={decVal}>Decrement</button>
      <div>{counter}</div>
    </>
  )
}
// document.querySelector('#inc').addEventListener('click',()=>{
//   counter++;
//   document.querySelector('h2').innerHTML=`Counter value: ${counter}`
// })

// document.querySelector('#dec').addEventListener('click',()=>{
//   counter--;
//   document.querySelector('h2').innerHTML=`Counter value: ${counter}`
// })
export default App
