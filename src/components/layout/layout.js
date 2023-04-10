import React from 'react'
import Header from '../navbar'
import Footer from '../footer'

const Layout = ({children}) => {
  return (
   <>
   <Header />
   {children}
   <Footer />
   </>
  )
}

export default Layout