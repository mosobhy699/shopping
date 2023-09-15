// important component in application help us to made route for content and fix navbar or header , footer, etc
// we will do it with tricky thing using children props
import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
const Layout = ({ children }) => {
  return (
    <div className='layout' >
      <Head>
        <title>MoSobhy Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className='main-container'>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout