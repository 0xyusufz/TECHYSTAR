import React from 'react'
import {BrowserRouter , Route,Routes,} from 'react-router-dom'


// importing components
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Contact from './pages/Contact'

// import all scss file
import './styles/App/App.scss'
import './styles/Header/header.scss'
import './styles/Home/home.scss'
import './styles/Footer/Footer.scss'

const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
