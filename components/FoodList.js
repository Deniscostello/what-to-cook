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
            {/* <div className={classes.carouselDiv}>
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
            </div> */}
            <div className={classes.recipeDiv}>
                <div>Dinner Ideas</div>
                <div className={classes.dinnerDiv} >
                    <img src="https://realfood.tesco.com/media/images/1400x919-OneTrayRoastDinner-17b80fd0-8071-474e-84e5-f19eb03da1b5-0-1400x919.jpg" alt="Dinner" />
                </div>
                <div>Light Bites</div>
                <div className={classes.lightBites}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVY9nyp-kFy5of2Bid2gbOj_Lz1pqH-OX-HcwYx2wfsA4bLijJqW8R4l0geWRg5JaemEw&usqp=CAU" alt="LightBite" />
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
