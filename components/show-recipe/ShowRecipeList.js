import React from 'react'
import Head from 'next/head';
import classes from './ShowRecipeList.module.css';
import RecipeItem from './RecipeItem';

function ShowRecipeList(props) {
  console.log(props)
  return (
    <>
      <Head>
        <title>Recipes</title>
        <meta name="description" content="Recipes Created From Food Inputted" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <ul className={classes.list}>
        {props.recipes.map((recipe) => (
          <RecipeItem
            key={recipe.recipeId}
            recipeId={recipe.recipeId}
            title={recipe.title}
            image={recipe.image}
            description={recipe.description}
          // url = {recipe.url}
          // prepTime = {recipe.prepTime}
          // cookTime= {recipe.cookTime}
          // ingredients= {recipe.ingredients}
          // steps = {recipe.steps}
          />
        ))}
      </ul>


    </>
  )
}

export default ShowRecipeList;
