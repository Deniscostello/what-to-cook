import classes from './RecipeDetail.module.css'

function RecipeDetail(props) {
  return (
    <section >
    {/* <section> */}
      <div className={`${classes.webpageRecipe} ${classes.phoneRecipe}`}>
        <h1> {props.title} </h1>
        <div className={classes.detailDiv}>
          <div className={classes.imgDesc}>
            <img src={props.image} alt={props.title} />
            <h2> {props.description} </h2>
            <a href={props.url}>Move information available here</a>
          </div>
          <div className={classes.instructions}>
            <h2>Time</h2>
            <p>Prep Time: {props.prepTime}</p>
            <p>Cook Time: {props.cookTime} </p>
            <h2>Ingredients: </h2>
            <ul>
              {props.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <h2>Steps</h2>
            <ul>
              {props.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RecipeDetail
