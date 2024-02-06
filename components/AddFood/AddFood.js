import React, { useRef } from 'react'
import classes from './AddFood.module.css';
import Head from 'next/head';

function AddFood(props) {
  const foodIdInputRef = useRef();
  const FoodURLInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredFoodId = foodIdInputRef.current.value;
    const enteredFoodURL = FoodURLInputRef.current.value;

    const foodData = {
      foodId: enteredFoodId,
      foodImage: enteredFoodURL,
    };

    props.onAddFood(foodData);
  }

  return (
    <>
      <Head>
        <title>Input Food</title>
        <meta name="description" content="Add Food to database" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={classes.mainDiv}>
        <div>
          <h1>Add Image</h1>
        </div>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='foodId'>Food Id</label>
            <input type='text' required id='foodId' ref={foodIdInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='foodImage'>Food Image</label>
            <input type='url' required id='foodImage' ref={FoodURLInputRef} />
          </div>
          <div className={classes.buttonDiv}>
            <button>Add Food</button>
          </div>
        </form>
      </div>
    </>

  )
}

export default AddFood;