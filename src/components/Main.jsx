import React from 'react'
import Navbar from './Navbar'

const Main = ({child}) => {
  return (<>
    <Navbar />
    {child}
    </>
  )
}

export default Main
