import React from 'react'
import classes from './Layout.module.css'
import Navbar from './navbar/Navbar';
import { Fragment } from 'react';

function Layout(props) {
  return (
    <div>
      <Navbar />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;