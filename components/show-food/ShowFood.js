import React from 'react'
import Navbar from '../navbar/Navbar';
import classes from './ShowFood.module.css';
import Head from 'next/head';
import RecipeItem from '../show-recipe/RecipeItem';

function ShowFood(props) {
  console.log(props.favRecipe)
  return (
    <>
      <Head>
        <title>Foods</title>
        <meta name="description" content="Recipes Created From Food Inputted" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={classes.display}>
        <div className={classes.showFood}>
          <h1>Current foods</h1>
          <ul>
            {props.foods.map((food, index) => (
              <li key={index}>{food}</li>
            ))}
          </ul>
        </div>
        <div className={classes.showRecipe}>
          <h1>Favourite Recipe</h1>
          <div>
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