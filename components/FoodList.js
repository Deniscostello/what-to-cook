import FoodItem from './FoodItem';
import classes from './FoodList.module.css';
import Card from './ui/Card';
import Link from 'next/link';
import Head from 'next/head';

function FoodList(props) {
    return (
        <>
        <Head>
        <title>Home</title>
        <meta name="description" content="Recipes Created From Food Inputted" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
            <div className={`${classes.webpageMain} ${classes.phoneMain}`}>
                {/* <div className={classes.mainDiv}> */}
                <div className={classes.title}>
                    <h1>Welcome to What To Cook. Your one stop shop for recipes you can make with your ingredients and reduce food waste</h1>
                    <h1>Add your food to get started</h1>
                </div>
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

                <div className={classes.about}>
                    <div className={classes.aboutTitle}>
                        <h1>A little bit about What To Cook</h1>
                    </div>
                    <div className={classes.aboutDesc}>
                        <p>What To Cook is a full-stack web application, developed as part of my final year project.</p>
                        <p>What To Cook is your own personal pocket-sized cookbook.</p>
                        <p> The goal of this project is to create a simple and convenient way for you to cook a wide range of nutritious meals based on food they have</p>
                    </div>
                    <div className={classes.posterImage}>
                        <h2>What To Cook Project Poster</h2>


                        <img src="WTCPoster.jpg" alt="posterImage" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default FoodList;
