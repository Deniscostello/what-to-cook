import Image from "next/image";
import classes from './FoodResult.module.css';
import { useRef } from "react";


function FoodResult(props) {
    const nameInputRef = useRef();
    const thinking = !props.response;

    function addClarifai() {
        console.log('Save ' + props.response.name);
    }
    
    function addText() {
        console.log('Save ' + nameInputRef.current.value);
    }


    let output = null;
    if(props.response) {
        output = !props.response.recognized 
        ? <p className={classes.output}>Cannot recognize food item!</p>
        : <div className={classes.output}> 
            <p>Item recognized as {props.response.name}</p> 
            <button onClick={addClarifai}>Confirm {props.response.name} is correct </button>
            <p>Or input the correct name </p><input  type='text' required id='name' ref={nameInputRef}></input><button onClick={addText}>Submit text</button>
        </div> 
    }

    return (
        <div className={classes.result}>
            <div className={classes.image}>
            <Image fill={true} src={props.snapshot} className={classes.image} alt="Preview" id="frame"  />
            </div>

            {thinking &&
            <p className={classes.thinking}>🧠</p>}
            {output}
        </div>
    )
}
export default FoodResult;