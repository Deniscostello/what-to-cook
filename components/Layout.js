import React from 'react'
import classes from './Layout.module.css'
import Navbar from './navbar/Navbar';
import { Fragment } from 'react';

function Layout() {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className={classes.mainDiv}>
        <div className={classes.layout}>Hello World
          <div className={classes.carouselDiv}>Easy and convenient meals based on food you already have</div>
          <div className={classes.recipeDiv}>
          <div >Dinner Ideas</div>
          <div>Light Bites</div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Layout;