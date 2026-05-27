import { useState } from 'react'
import './App.css'
import UseEffectExample from './components/UseEffectExample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UseEffectExample />
    </>
  )
}

export default App
