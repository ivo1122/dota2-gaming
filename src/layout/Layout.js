import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Routers from '../routes/Routers'

const Layout = () => {
  return (
    <div>
        <Header/>
        <main>
            <Routers/>
        </main>
        <Footer/>
    </div>
  )
}

export default Layout