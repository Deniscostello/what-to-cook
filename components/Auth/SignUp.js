import { useRouter } from "next/router"
import { useState } from "react"
import { useContext } from "react"
import classes from "./SignUp.module.css"
import Card from '../ui/Card'
import Link from 'next/link';

export default function SignUpComponent(props) {
    const router = useRouter()

    const [state, setState] = useState({
        username: "",
        email: "",
        password: ""
    })

    function handleChange(e) {
        const copy = { ...state }
        copy[e.target.name] = e.target.value
        setState(copy)
    }

    function submitHandler(event) {
        event.preventDefault();

        // Validation 
        if (state.password.length < 6 || state.password.length > 40) {
            alert('Password must be between 6 and 40 characters long.');
            return;
        }
        if (state.username.length < 1 || state.email.length < 1 || state.password.length < 1) {
            alert('Please enter username.');
            return;
        }
        if (state.email.length < 1) {
            alert('Please enter email.');
            return;
        }
        if (state.password.length < 1) {
            alert('Please enter password.');
            return;
        }

        const userData = {
            username: state.username,
            email: state.email,
            password: state.password,
        };


        props.onSignUp(userData);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.title}>
                    ABC
                </div>
                <div className={classes.control}>
                    <label htmlFor='username'>Username </label>
                    <input className={classes.input} type="text" name="username" placeholder="username" value={state.username} onChange={handleChange} autoComplete="off" />
                </div>
                <div className={classes.control}>
                    <label htmlFor='email'>Email </label>
                    <input className={classes.input} type="text" name="email" placeholder="email" value={state.email} onChange={handleChange} autoComplete="off" />
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Password </label>
                    <input className={classes.input} type="password" name="password" placeholder="password" value={state.password} onChange={handleChange} />
                </div>
                {props.signUpError && (
                    <h3>{props.signUpError}</h3>
                )}
                <div className={classes.actions}>
                    <div className={classes.signup}>
                        <button>Sign Up</button>
                    </div>
                    <div className={classes.signin}>
                        <p>Already have an account?</p>
                        <div className={classes.link}>
                            <Link href='/signin'>Sign In</Link>
                        </div>
                    </div>
                </div>
            </form>
        </Card>
    )
}
