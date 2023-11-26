import React from 'react'
import classes from './Layout.module.css'
import Navbar from './navbar/Navbar';

function Layout() {
  return (
    <div className={classes.mainDiv}>
    <Navbar />
    </div>
    
  )
}

export default Layout;