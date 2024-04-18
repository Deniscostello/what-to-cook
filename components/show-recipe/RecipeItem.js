import Card from '../ui/Card';
import classes from './RecipeItem.module.css';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react'
import GlobalContext from '../../pages/store/globalContext'

function RecipeItem(props) {
  const router = useRouter();
  const globalCtx = useContext(GlobalContext)
  const [favText, setFavText] = useState('Add to favourites')

  function showDetailsHandler() {
    router.push('/' + props.recipeId);
  }
  const favHandleClick = () => { 
    setFavText(favText === 'Add to favourites' ? 'Remove from favourites' : 'Add to favourites'); 
      if (favText == 'Add to favourites') {
        globalCtx.updateGlobals({ cmd: 'addFavRecipe', newVal: {recipeId:props.recipeId} })
      } else {
        globalCtx.updateGlobals({ cmd: 'removeFavRecipe', newVal: props.recipeId })
      }
  }; 

  return (
    <li className={classes.item}>
      <Card>
      {/* <div>
      <img src={props.image}  alt={props.title} />
      </div> */}
      <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h1>{props.title}</h1>
          <h3>{props.description}</h3>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Recipe</button>
          <button className={classes.button}  onClick={favHandleClick}> {favText}</button>
        </div>
      </Card>
    </li>
  );
}

export default RecipeItem;
