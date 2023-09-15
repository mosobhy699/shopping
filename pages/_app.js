import Layout from '../components/Layout'
import '@/styles/globals.css'
import React from 'react'
import { StateContext } from '@/context/StateContext'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }) {
  return (

    // you can use a diffrent way  but there is this way too
    /*  
    <>
    <Layout
      {/* <Navbar /> */
    //  < Component {...pageProps} />
    /* <Footer />  */
    // </> 

    <>
      {/* we must need to pass all state inside StateContext to all components of application */}
      <StateContext  >
        <Layout >
          {/* // toast is the pop-up Notification will be apper when we add something to the cart , remove it or finish the order*/}
          <Toaster />
          < Component {...pageProps} />
        </Layout>
      </StateContext>
    </>


  )


}
