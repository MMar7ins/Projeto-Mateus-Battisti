import { useState } from 'react'
import JsxExamples from './components/JsxExamples'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>JSX</h1>
      <JsxExamples />
    </>
  )
}

export default App
