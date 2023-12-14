import FoodItem from './FoodItem';
import classes from './FoodList.module.css';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'

function FoodList(props) {
    return (
        // <div>
        //      {props.foods.map((food) => (
        //             <FoodItem 
        //             key={food.id}
        //             foodId={food.id}
        //             foodImage={food.foodImage}
        //             name={food.foodName}
        //             />
        //      ))}
        // </div>
        <div className={classes.mainDiv}>
            <div className={classes.carouselDiv}>
                <h2>Easy and convenient meals based on food you already have</h2>
                <Carousel className={classes.carouselStyle} >
                    {props.foods.map((food) => (
                         <Paper key={food.id}>
                            <FoodItem
                                key={food.id}
                                foodId={food.id}
                                foodImage={food.foodImage}
                                name={food.foodName}
                            />
                         </Paper> 
                    ))}
                </Carousel>
            </div>
            <div>
            </div>
            <div className={classes.recipeDiv}>
        <div>Dinner Ideas</div>
        <div className={classes.dinnerDiv} >
            Dinner Images go here
        </div>
        <div>Light Bites</div>
        <div className={classes.lightBites}>
            Light Images
        </div>
    </div>
        </div>


    );
}

export default FoodList;


<div className={classes.mainDiv}>
    <div className={classes.carouselDiv}>
        Easy and convenient meals based on food you already have
        <div className={classes.imageDiv}>
            carousel Image goes here
        </div>
    </div>
    <div className={classes.recipeDiv}>
        <div>Dinner Ideas</div>
        <div className={classes.dinnerDiv} >
            Dinner Images go here
        </div>
        <div>Light Bites</div>
        <div className={classes.lightBites}>
            Light Images
        </div>
    </div>
</div>
