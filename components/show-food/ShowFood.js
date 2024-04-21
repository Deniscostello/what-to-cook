import React from 'react'
import Navbar from '../navbar/Navbar';
import classes from './ShowFood.module.css';
import Head from 'next/head';
import RecipeItem from '../show-recipe/RecipeItem';

function ShowFood(props) {
  return (
    <>
      <Head>
        <title>Foods</title>
        <meta name="description" content="Recipes Created From Food Inputted" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={`${classes.webpageDisplay} ${classes.phoneDisplay}`}>
         {/* <div className={classes.display}>  */}
        <div className={classes.showFood}>
          <h1>Current foods</h1>
          <ul className={classes.usersFood}>
            {props.foods.map((food, index) => (
              <li key={index}>{food}</li>
            ))}
          </ul>
        </div>
        <div className={classes.showRecipe}>
          <h1>Favourite Recipe</h1>
          <div className={classes.fav}>
            <ul className={classes.list}>
              {props.favRecipe.map((recipe) => (
                <RecipeItem
                  key={recipe.recipeId}
                  recipeId={recipe.recipeId}
                  title={recipe.title}
                  image={recipe.image}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShowFood;