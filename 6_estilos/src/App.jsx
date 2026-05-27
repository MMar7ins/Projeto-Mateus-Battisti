import { useState } from 'react'
import './App.css'
import StylesExamples from './components/StylesExamples'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Teste</h1>
        <StylesExamples />
      </div>
    </>
  )
}

export default App
