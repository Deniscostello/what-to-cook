import React from 'react'
import classes from './Layout.module.css'
import Navbar from './navbar/Navbar';
import { Fragment } from 'react';
import Footer from './Footer';

function Layout(props) {
  return (
    <div>
      <Navbar />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;