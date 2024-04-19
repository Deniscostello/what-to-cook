import { useRouter } from "next/router"
import { useState } from "react"
import classes from "./SignIn.module.css"
import { useRef } from 'react'
import GlobalContext from "@/pages/store/globalContext"
import { useContext } from 'react'
import Card from '../ui/Card'
import Link from 'next/link';


export default function SignInComponent(props) {
    const globalCtx = useContext(GlobalContext)
    const router = useRouter()
    const [state, setState] = useState({
        username: "",
        password: ""
    })


    function submitHandler(event) {
        event.preventDefault();

        const userData = {
            username: state.username,
            password: state.password,
        };


        props.onSignIn(userData);
    }

    function handleChange(e) {
        const copy = { ...state }
        copy[e.target.name] = e.target.value
        setState(copy)
    }





    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.title}>
                <h1>Sign in</h1>
                </div>
                <div className={classes.control}>
                    <label htmlFor='username'>Username </label>
                    <input className={classes.input} type="text" name="username" placeholder="username" value={state.username} onChange={handleChange} autoComplete="off" />
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Password </label>
                    <input className={classes.input} type="password" name="password" placeholder="password" value={state.password} onChange={handleChange} />
                    {props.error && (
                        <h3>{props.error}</h3>
                    )}
                </div>
                <div className={classes.actions}>
                    <div className={classes.signin}>
                        <button>Sign In</button>
                    </div>
                    <div className={classes.signup}>
                        <p>Don't have an account?</p>
                        <div className={classes.link}>
                            <Link href='/signup'>Sign Up For What To Cook</Link>
                        </div>
                    </div>
                </div>
            </form>
        </Card>
    );
}