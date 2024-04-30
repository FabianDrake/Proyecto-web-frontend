import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Form from './components/Form/Form'

function App() {
  const [count, setCount] = useState(0)


  //Acomodar como si fuera lego
  return (
    <>
      <Header title="Bienvenido a Myanimelist"/>  
      <Form/>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
    </>
  )
}

export default App
