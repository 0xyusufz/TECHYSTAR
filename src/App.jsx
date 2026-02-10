import React from 'react'
import {BrowserRouter , Route,Routes,} from 'react-router-dom'


// importing components
import Header from './components/Header'
import Home from './components/Home'


// import all scss file
import './styles/App/App.scss'
import './styles/Header/header.scss'
import './styles/Home/home.scss'

const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
