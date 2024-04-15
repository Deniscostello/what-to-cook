import React from 'react'
import Navbar from '../navbar/Navbar';
import classes from './ShowFood.module.css';
import Head from 'next/head';

function ShowFood(props) {
  console.log(props)
  return (
    <>
        <Head>
        <title>Foods</title>
        <meta name="description" content="Recipes Created From Food Inputted" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

    <div className={classes.mainDiv}>
      <h1>Current foods</h1>
      <ul>
      {props.foods.map((food, index) => (
        <li key={index}>{food}</li>
      ))}
      </ul>
    </div>
  </>
  )
}

export default ShowFood;