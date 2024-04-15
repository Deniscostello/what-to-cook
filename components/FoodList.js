import FoodItem from './FoodItem';
import classes from './FoodList.module.css';
import Card from './ui/Card';
import Link from 'next/link';

function FoodList(props) {
    return (
<div className={classes.mainDiv}>
            <div className={classes.title}>
                <img src="https://static6.depositphotos.com/1014511/575/i/450/depositphotos_5755752-stock-photo-healthy-eating.jpg" alt="image" />
                <h1>Welcome to what to cook. Your one stop shop for recipes you can make with your ingredients and reduce food website</h1>
            </div>
 
            <div className={classes.explore}>
                <h2>Explore</h2>
                <div className={classes.options}>
                    <div className={classes.card}>
                        <Card >
                            <div className={classes.image}>
                                <img src="https://static6.depositphotos.com/1014511/575/i/450/depositphotos_5755752-stock-photo-healthy-eating.jpg" alt="image" />
                            </div>
                            <div className={classes.content}>
                                <p>Add your ingredients here</p>
                            </div>
                            <div className={classes.actions}>
                                <Link href='/input-food'> Add Food</Link>
                            </div>
                        </Card>
                    </div>
 
                    <div className={classes.card}>
                        <Card className={classes.card}>
                            <div className={classes.image}>
                                <img src="https://static6.depositphotos.com/1014511/575/i/450/depositphotos_5755752-stock-photo-healthy-eating.jpg" alt="image" />
                            </div>
                            <div className={classes.content}>
                                <p>View foods that you've added</p>
                            </div>
                            <div className={classes.actions}>
                                <Link href='/show-food'> Show Food </Link>
                            </div>
                        </Card>
                    </div>
 
                    <div className={classes.card}>
                        <Card className={classes.card}>
                            <div className={classes.image}>
                                <img src="https://static6.depositphotos.com/1014511/575/i/450/depositphotos_5755752-stock-photo-healthy-eating.jpg" alt="image" />
                            </div>
                            <div className={classes.content}>
                                <p>Find recipes from foods added</p>
                            </div>
                            <div className={classes.actions}>
                                <Link href='/show-recipe'> Show Recipes </Link>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
 
            <div className={classes.about}>
                <h2>A little bit about What To Cook</h2>
                <img src="https://static6.depositphotos.com/1014511/575/i/450/depositphotos_5755752-stock-photo-healthy-eating.jpg" alt="image" />
            </div>
        </div>
 


    );
}

export default FoodList;
