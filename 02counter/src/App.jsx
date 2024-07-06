import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)
  const [secCounter, setSecCounter] = useState(0)


  const addValue = () => {
    setCounter(counter + 1)
    setSecCounter((setSecCounter) => setSecCounter + 1)
    setSecCounter((setSecCounter) => setSecCounter + 1)
    setSecCounter((setSecCounter) => setSecCounter + 1)
  }

  const subValue = () => {
    setCounter(counter - 1)
    setSecCounter((setSecCounter) => setSecCounter - 1)
    setSecCounter((setSecCounter) => setSecCounter - 1)
    setSecCounter((setSecCounter) => setSecCounter - 1)
  }

  const resetValue = () => {
    setCounter(0)
    setSecCounter(0)
  }

  return (
    <>
      <h1>React Counter</h1>
      <h2>Counter value : {counter}</h2>
      <h3>{counter} + 3 : {secCounter}</h3>
      <button onClick={addValue}>Add</button>
      {"  "}
      <button onClick={resetValue}>Reset</button>
      {"  "}
      <button onClick={subValue}>Sub</button>
    </>
  )
}

export default App
