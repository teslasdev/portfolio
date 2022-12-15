import React from 'react'
import Navigation from './views/Navigation/Navigation'
import './App.css'
import Banner from './views/Banner/Banner'
import Sections from './views/section/Sections'
import Blog from './views/Blog/Blog'
import Footer from './views/Footer/Footer'
import './views/Responsive/Tablet.css';

const App = () => {
  return (
    <div>
      <Navigation/>
      <Banner />
      <Sections />
      <Blog />
      <Footer />
    </div>
  )
}

export default App