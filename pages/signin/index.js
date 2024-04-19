import { useRouter } from "next/router"
import { useState, useContext } from "react"
import SignInComponent from "@/components/Auth/SignIn"
import GlobalContext from "../store/globalContext"

const SignIn = () => {
  const globalCtx = useContext(GlobalContext)
  const router = useRouter()

  async function signInHandler(enteredData) {

    const response = await fetch('/api/sign-in', {
      method: 'POST',
      body: JSON.stringify(enteredData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    if (response.ok) {
      router.push('/');
    }
    else {
      await globalCtx.updateGlobals({ cmd: 'signInError', newVal: data.message })
    }
  }
  
  if (globalCtx.theGlobalObject.signInError) {
    return <SignInComponent onSignIn={signInHandler} error={globalCtx.theGlobalObject.signInError} />

  }

  else{
    return <SignInComponent onSignIn={signInHandler} />
  }
  
};

export default SignIn;