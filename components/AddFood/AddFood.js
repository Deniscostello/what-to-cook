import React, { useRef, useCallback, useState } from 'react'
import classes from './AddFood.module.css';
import Head from 'next/head';
import { FoodRecognitionResponse } from '@/types'
import { postFoodRecognition } from '@/utils/postFoodRecognition';

function AddFood(props) {
  const foodIdInputRef = useRef();
  const FoodURLInputRef = useRef();
  const cameraPreviewEl = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [response, setResponse] = useState();

  const beginCapture = useCallback(
    async () => {
      if (!cameraPreviewEl.current) {
        return;
      }
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      cameraPreviewEl.current.srcObject = stream;
      cameraPreviewEl.current.play();
      setCapturing(true);
      } catch (error) {
        console.log('Error accessing camera: ', error);
      }
    },
    [cameraPreviewEl],
  );

  const takeSnapshot = useCallback(
    () => {
      if (!cameraPreviewEl.current) {
        return;
      }
      const canvas = document.createElement('canvas');
      canvas.width = 800;
      canvas.height = 600;
  
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        return;
      }
      ctx.drawImage(cameraPreviewEl.current, 0, 0, canvas.width, canvas.height);
      canvas.toBlob(async (blob) => {
        if (!blob) {
          return null;
        }
        const resp = await postFoodRecognition(blob);
        setResponse(resp);
        console.log(resp);
      });
    },
    []
  );


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
        <div className={classes.description}>
          <a onClick={beginCapture}>Click to take a photo</a>
        </div>
        <video className={classes.video} ref={cameraPreviewEl} />
        {capturing &&
          (
            <button className={classes.snapshot} onClick={takeSnapshot}>
              📸
            </button>
          )}
        {/* <form className={classes.form} onSubmit={submitHandler}>
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
        </form> */}
      </div>
    </>

  )
}

export default AddFood;