import Card from '../ui/Card';
import classes from './RecipeItem.module.css';
import { useRouter } from 'next/router';

function RecipeItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push('/' + props.recipeId);
  }
  console.log(props)

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
        </div>
      </Card>
    </li>
  );
}

export default RecipeItem;
