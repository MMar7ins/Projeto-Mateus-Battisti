//Componente pai
import { useState } from 'react'
//Importar componente filho
import FunctionalComponent from './componets/FunctionalComponent'
import ClassComponent from './componets/ClassComponent'
import PropsExample from './componets/PropsExample'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello World React!</h1>
      {/* Usado para comentar dentro de jsx */}
      {/* Utilizando o componente importado no jsx */}
      <FunctionalComponent />
      <ClassComponent/>
      <PropsExample nome="Marcelo" idade={23} />
    </>
  )
}

export default App
