import React from 'react'
import Header from '../components/header/Header.jsx'
import Routing from '../router/Routing'
import Footer from '../components/footer/Footer'
const Layout = () => {
  return (
    <>
        <Header/>
        <Routing/>
        <Footer/>
    </>
  )
}

export default Layout