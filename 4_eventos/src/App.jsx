import { useState } from 'react'
import './App.css'
import EventHandlingExamples from './components/EventHandlingExamples'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <EventHandlingExamples/>
    </>
  )
}

export default App
