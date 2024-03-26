import Image from "next/image";
import classes from './FoodResult.module.css';
import { useRef, useState } from "react";


function FoodResult(props) {
    const nameInputRef = useRef();
    const [inputText, setInputText] = useState (false)
    const [correctName, setCorrectName] = useState ('')
    let output, textbox = null;

    function submitHandler(event) {
        event.preventDefault();
        setInputText(false)
        props.onAddFoodName(correctName);
      }
      
      if(props.response) {
          textbox = !inputText ?  <p></p> : <div className={classes.output}> <input  type='text' required id='name' ref={nameInputRef}></input><button onClick={ () => setCorrectName((nameInputRef.current.value))}>Submit text</button></div> 
      }
    
    if(props.response) {
        output = !props.response.recognized ?<div className={classes.output}> <p className={classes.output}>Cannot recognize food item!</p>  <input  type='text' required id='name' ref={nameInputRef}></input><button onClick={ () => setCorrectName((nameInputRef.current.value))}>Submit text</button></div> 
        : <div className={classes.output}> 
            <p>Item recognized as {props.response.name}</p> 
            <button onClick={ () => setCorrectName((props.response.name))}>Confirm {props.response.name} is correct </button> <button onClick={ () => setInputText(true)}>Or input the correct name</button>
        </div> 
    }

    return (
        <div className={classes.result}>
            <div className={classes.image}>
            <Image fill={true} src={props.snapshot} className={classes.image} alt="Preview" id="frame"  /> </div>
            <form onSubmit={submitHandler}> {output} {textbox} </form>
        </div>
    )
}
export default FoodResult;