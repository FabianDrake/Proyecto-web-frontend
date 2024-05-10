import { useState } from 'react'
import './App.css'
import React from 'react'
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import TablaDatos from './components/Table/Table'

function App() {
  const [count, setCount] = useState(0)


  //Acomodar como si fuera lego
  return (
    <>
      <Router>
        <Routes>
          <Route path="/form" element={<div><Header title='my anime list'/><Form/></div>} />
          <Route path="/tabla" element={<TablaDatos/>}></Route>
        </Routes>
        
      </Router>

      {/* <Header title="Bienvenido a Myanimelist"/>  
      <Form/>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p> */}
    </>
  )
}

export default App
