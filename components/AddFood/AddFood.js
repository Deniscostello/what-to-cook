import React, { useRef, useCallback, useState, useEffect } from 'react'
import classes from './AddFood.module.css';
import Head from 'next/head';
import { FoodRecognitionResponse } from '@/types'
import { postFoodRecognition } from '@/utils/postFoodRecognition';
import FoodResult from './FoodResult';
import GlobalContext from '@/pages/store/globalContext';

function AddFood(props) {
  const foodIdInputRef = useRef();
  const FoodURLInputRef = useRef();
  const cameraPreviewEl = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [response, setResponse] = useState()
  const [snapshot, setSnapshot] = useState()
  const [selectedImage, setSelectedImage] = useState(null)
  const [streamValue, setStreamValue] = useState()
  const [foodName, setFoodName] = useState()
  const [showCamera, setShowCamera] = useState(false)
  const [showFile, setShowFile] = useState(false)
  const [cameraErr, setCameraErr] = useState()

  const beginCapture = useCallback(
    async () => {
      if (!cameraPreviewEl.current) {
        return;
      }
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ 
          video: {
            facingMode: {
              ideal: 'enviroment'
            }
          } });
        setStreamValue(stream)
        cameraPreviewEl.current.srcObject = stream;
        cameraPreviewEl.current.play();
        setCapturing(true);
      } catch (error) {
        console.log('Error accessing camera: ', error);
        setCameraErr('Cannot access the camera')
      }
    },
    [cameraPreviewEl],
  );

  function endCapture() {
    streamValue.getTracks().forEach((track) => {
      if (track.readyState == 'live' && track.kind === 'video') {
        track.stop();
      }
    });
    setCapturing(false);
  }

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

  async function addFoodNameHandler(enteredFoodName) {
    setFoodName(enteredFoodName)
  }

  useEffect(() => {
    if (response && foodName) {
      const foodData = {
        foodName: foodName
      };
      setSnapshot(false)
      props.onAddFood(foodData);
    }
  }, [foodName]);

  function openCamera() {
    if (showFile == true) {
      setShowFile(false)
    }
    setShowCamera(prevState => !prevState)
    
    if (capturing == true) {
      setShowCamera(false)
    }
    beginCapture()

  }
  function openFile() {
    if (showCamera == true) {
      setShowCamera(false)
    }
    setShowFile(prevState => !prevState)

  }



  return (
    <>
      <Head>
        <title>Input Food</title>
        <meta name="description" content="Add Food to database" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={classes.mainDiv}>
        <div className={classes.title}>
          <h1>Add a food image by selecting one of the option below!</h1>
        </div>
        <div className={classes.description}>
          {/* <h1 onClick={openCamera} style={{ cursor: 'pointer' }} > Take picture with camera</h1>
          <h1 onClick={openFile} style={{ cursor: 'pointer' }} > Upload a File</h1> */}
          {/* <button onClick={beginCapture}> <h2>Take picture with camera </h2></button> */}
          <button onClick={openCamera}> <h2>Take picture with camera </h2></button>
          <button onClick={openFile} > <h2>Upload a File </h2></button>
        </div>
        <div className={classes.image}>
        {showCamera && (
          <div className={classes.inputImage}>
            <div className={classes.options}>
                <button onClick={beginCapture}>Click here open the camera</button>
              </div> 
            <div className={classes.videoDiv}>
              <video className={classes.video} ref={cameraPreviewEl} />
            </div>
            <div className={classes.takePicture}>
              {capturing &&
                (
                  <div>
                    <button onClick={takeSnapshot}>
                      Click To Take Picture
                    </button>
                    <button onClick={endCapture}>Stop Camera</button>
                  </div>
                )
              }
              {cameraErr && (
                <div>
                {cameraErr}
                </div>
              )}
            </div>
          </div>

          )} 

          {showFile && (
            <div className={classes.inputImage}>
              <h1 > Click to upload an image</h1>
              <input
              className={classes.fileButton}
                type="file"
                name="myImage"
                onChange={(event) => {
                  setSelectedImage(event.target.files[0]);
                }}
              />
              {selectedImage && (
                 <button onClick={uploadHandler}> Submit</button>
              )}
             
            </div>
          )}


        </div>
        <div className={classes.result}>
          {snapshot &&
            <FoodResult response={response} snapshot={snapshot} onAddFoodName={addFoodNameHandler} />
          }
        </div>
      </div>
    </>

  )
}
export default AddFood;