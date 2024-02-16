import Image from "next/image";
import classes from './FoodResult.module.css';

function FoodResult(props) {
    const thinking = !props.response;

    let output = null;
    if(props.response) {
        //console.log(props.response)
        output = !props.response.recognized 
        ? <p className={'${classes.output} ${classes.message}'}>Cannot recognize food item!</p>
        : <p className={'${classes.output} ${classes.message}'}>Item recognized as {props.response.name}</p>
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






//   return (
//     <div className={styles.result}>
//       <Image src={props.snapshot} alt="Preview" id="frame" width={800} height={600} />
//       { thinking && 
//         <p className={`${styles.output} ${styles.thinking}`}>🧠</p>}
//       { output }
//     </div>
//   );
// }
