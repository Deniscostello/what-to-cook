import React from 'react'
import classes from './Navbar.module.css';
import { CgProfile } from 'react-icons/cg';
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  return (
    <div className={classes.App}>
    <header className={classes.HomepageHeader}>
        <div><RxHamburgerMenu /></div>
      <p>What To Cook</p>
      <div className={classes.profileDiv}><CgProfile /></div>
    </header>
  </div>
  )
}

export default Navbar;