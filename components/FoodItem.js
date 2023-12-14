import classes from './FoodItem.module.css';

function FoodItem(props) {
  return (
    <div className={classes.main}>
      <div className={classes.setImageDiv}>
      <div className={classes.image}>
        <img src={props.foodImage} alt={props.name} />
      </div>
      </div>
    </div>
  );
}

export default FoodItem;
