// import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Home from './pages/Home'
import{BrowserRouter, Route, Routes} from "react-router-dom"
import Services from './pages/Services'
import Products from './pages/Products'
import SignUp from './pages/SignUp'


function App() {
  return (
      <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path='/'exact Component={Home}/>
            </Routes> 
            <Routes>
              <Route path='/Services'Component={Services}/>
            </Routes> 
            <Routes>
              <Route path='/Products' Component={Products}/>
            </Routes> 
            <Routes>
              <Route path='/SignUP'Component={SignUp}/>
            </Routes> 
      </BrowserRouter>
  )
}
export default App
