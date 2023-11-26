import React from 'react'
import Navbar from './navbar/Navbar';
import Footer from './Footer';
import classes from './AddFood.module.css';
import Head from 'next/head';

function AddFood() {
  return (
    <>
        <Head>
        <title>Input Food</title>
        <meta name="description" content="Add Food to database" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <Navbar />
      </div>

      <div className={classes.mainDiv}>
        <div>
            <h1>Add Image</h1>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>

  )
}

export default AddFood;