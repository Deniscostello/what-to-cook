import React from 'react'
import Navbar from './navbar/Navbar';
import Footer from './Footer';
import classes from './ShowFood.module.css';
import Head from 'next/head';

function ShowFood() {
  return (
    <>
        <Head>
        <title>Recipes</title>
        <meta name="description" content="Recipes Created From Food Inputted" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    <div>
      <Navbar />
    </div>

    <div className={classes.mainDiv}>
      <div>
          <h1>Show Recipes in DB</h1>
      </div>
    </div>
    <div>
      <Footer />
    </div>
  </>
  )
}

export default ShowFood;