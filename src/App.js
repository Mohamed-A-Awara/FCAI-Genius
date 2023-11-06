import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Project-Data/Header/Header';
import Home from './Project-Data/Home/Home'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Project-Data/Register/Register';
import StartDay from './Project-Data/Let\'sGo/Let\'sgo';
function App() {
  return (
    <>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/letsgo' element={<StartDay/>}/>
          </Routes>
        </BrowserRouter>
      {/* <Header/>
      <Home/> */}
    </>
  )
}

export default App
