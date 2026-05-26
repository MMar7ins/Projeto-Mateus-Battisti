import { useState } from 'react'
import './App.css'
import UseStateComponent from './components/UseStateComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <UseStateComponent />
    </>
  )
}

export default App
