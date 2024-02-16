import React, { useRef, useCallback, useState , useEffect} from 'react'
import classes from './AddFood.module.css';
import Head from 'next/head';
import { FoodRecognitionResponse } from '@/types'
import { postFoodRecognition } from '@/utils/postFoodRecognition';
import FoodResult from './FoodResult';

function AddFood(props) {
  const foodIdInputRef = useRef();
  const FoodURLInputRef = useRef();
  const cameraPreviewEl = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [response, setResponse] = useState();
  const [snapshot, setSnapshot] = useState();
  const [selectedImage, setSelectedImage] = useState(null);



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
        if (snapshot) {
          URL.revokeObjectURL(snapshot)
        }
        setSnapshot(URL.createObjectURL(blob))


        const resp = await postFoodRecognition(blob);
        setResponse(resp);
      });
    },
    []
  );

  async function uploadHandler() {
    setSnapshot(URL.createObjectURL(selectedImage))
    const resp = await postFoodRecognition(selectedImage);
    setResponse(resp);    
  }

  useEffect(() => {
    if (response && response.name) {
      const enteredName = response.name;
      const enteredImage = selectedImage;
      console.log(snapshot.blob)
      const foodData = {
        name: enteredName,
        image: snapshot,
      };
  
      props.onAddFood(foodData);
    }
  }, [response]);

  return (
    <>
      <Head>
        <title>Input Food</title>
        <meta name="description" content="Add Food to database" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={classes.mainDiv}>
        <div className={classes.capture}>
          <div className={classes.description}>
            <button onClick={beginCapture}>Click Open Camera</button>
          </div>
          <div className={classes.videoDiv}>
            <video className={classes.video} ref={cameraPreviewEl} />
          </div>
          <div className={classes.takePicture}>
            {capturing &&
              (
                <button onClick={takeSnapshot}>
                  Click To Take Picture
                </button>
              )
            }
          </div>
        </div>
        <div className={classes.inputImage}>
          <h1 > Click to upload an image</h1>
          <input
            type="file"
            name="myImage"
            onChange={(event) => {
              setSelectedImage(event.target.files[0]);
            }}
          />
          <button onClick={uploadHandler}> Submit</button>
        </div>
        <div className={classes.result}>
          {snapshot && <FoodResult response={response} snapshot={snapshot}/>}
        </div>
      </div>
    </>

  )
}
export default AddFood;