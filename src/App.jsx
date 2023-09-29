// import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import{BrowserRouter, Route, Routes} from "react-router-dom"



function App() {
  return (
      <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path='/'exact/>
            </Routes> 
      </BrowserRouter>
  )
}
export default App
