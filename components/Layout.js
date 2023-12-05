import React from 'react'
import classes from './Layout.module.css'
import Navbar from './navbar/Navbar';
import { Fragment } from 'react';
import Footer from './Footer';

function Layout() {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className={classes.mainDiv}>
        <div className={classes.carouselDiv}>
          Easy and convenient meals based on food you already have
          <div className={classes.imageDiv}>
              carousel Image goes here
          </div>
        </div>
        <div className={classes.recipeDiv}>
          <div>Dinner Ideas</div>
          <div className={classes.dinnerDiv} >
            Dinner Images go here 
          </div>
          <div>Light Bites</div>
          <div className={classes.lightBites}>
            Light Images
          </div>
        </div>
      </div>


      <div>
        <Footer />
      </div>
    </>
  )
}

export default Layout;