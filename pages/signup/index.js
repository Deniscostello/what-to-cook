import { useRouter } from "next/router"
import { useState } from "react"
import { useContext } from "react"
import SignUpComponent from "@/components/Auth/SignUp"
import GlobalContext from "../store/globalContext"

export default function SignUp() {
  const router = useRouter()
  const globalCtx = useContext(GlobalContext)

  async function signUpHandler(enteredData) {

    const response = await fetch('/api/sign-up', {
      method: 'POST',
      body: JSON.stringify(enteredData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    if (response.ok) {
      router.push('/signin');
    }
    else {
      await globalCtx.updateGlobals({ cmd: 'signUpError', newVal: data.message })
    }
  }

  if (globalCtx.theGlobalObject.signUpError) {
    return <SignUpComponent onSignUp={signUpHandler} signUpError={globalCtx.theGlobalObject.signUpError} />

  }

  else {
    return <SignUpComponent onSignUp={signUpHandler} />
  }
}