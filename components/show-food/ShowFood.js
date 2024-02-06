import React from 'react'
import Navbar from '../navbar/Navbar';
import Footer from '../Footer';
import classes from './ShowFood.module.css';
import Head from 'next/head';

function ShowFood() {
  return (
    <>
        <Head>
        <title>Recipes</title>
        <meta name="description" content="Recipes Created From Food Inputted" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

    <div className={classes.mainDiv}>
        
    <div className={classes.titleDiv}> Chicken</div>
      <div className={classes.list}>
        <div className={classes.selectionOne}>
        <img src="https://images.immediate.co.uk/production/volatile/sites/30/2021/08/One-pot-spiced-roast-chicken-05079e9.jpg?quality=90&resize=556,505" alt="Chicken 1" />
        </div>
        <div className={classes.selectionTwo}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKbBZievLmfewogbiBeEgxuQ0J-Sc48SF_eg&usqp=CAU" alt="Chicken 2" />
        </div>
        
        <div className={classes.selectionThree}>
        <img src="https://hips.hearstapps.com/hmg-prod/images/tomatobutterroastchicken-2-1669133641.jpeg?crop=0.8333333333333334xw:1xh;center,top&resize=980:*" alt="Chicken 3" />
        </div>
      </div>
      <div className={classes.titleDiv}> Fruit</div>
      <div className={classes.list}>
      <div className={classes.selectionOne}>
        <img src="https://hips.hearstapps.com/clv.h-cdn.co/assets/15/22/1432664914-strawberry-facts1.jpg?resize=980:*" alt="Strawberry" />
        </div>
        <div className={classes.selectionTwo}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxC9FcFk83sBCv04WHzK1iku8Sh6vSBeI39A&usqp=CAU" alt="Orange" />
        </div>
        <div className={classes.selectionThree}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTuyNaFq7H-lT1-myUjy5CQFRENziP07QnBg&usqp=CAU" alt="Apple" />
        </div>
      </div>
      <div className={classes.titleDiv}> Pasta</div>
      <div className={classes.list}>
      <div className={classes.selectionOne}>
        <img src="https://rainbowplantlife.com/wp-content/uploads/2021/06/sausage-pasta-lazy-meals-1-of-3-scaled.jpg" alt="Pasta 1" />
        </div>
        <div className={classes.selectionTwo}>
        <img src="https://images.immediate.co.uk/production/volatile/sites/30/2021/03/Cacio-e-Pepe-e44b9f8.jpg?quality=90&resize=556,505" alt="Pasta 2" />
        </div>
        <div className={classes.selectionThree}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhEuEhFzajHFGiIM9KHPeaXgO6MefQSCYliQ&usqp=CAU" alt="Pasta 3" />
        </div>
      </div>
    </div>
  </>
  )
}

export default ShowFood;