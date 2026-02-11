import React from 'react'
import {BrowserRouter , Route,Routes,} from 'react-router-dom'



// importing components
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import Service from './pages/Service'

// import all scss file
import './styles/App/App.scss'
import './styles/Header/header.scss'
import './styles/Home/home.scss'
import './styles/Footer/Footer.scss'
import './styles/Media Query/mediaquery.scss'


const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact />} />
      <Route path='/services' element={<Service/>} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
