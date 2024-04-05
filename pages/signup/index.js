import { useRouter } from "next/router"
import { useState } from "react"
import { useContext } from "react";

export default function SignUp() {
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

  async function handleSubmit()  {
    console.log(state)
    await globalCtx.updateGlobals({cmd: 'signup', newVal: state})
    // router.push("/signin")
}

  return (

      <div >
        <h1 >Sign Up</h1>
        <div >
          <input type="text" name="username" placeholder="username" value={state.username} onChange={handleChange} autoComplete="off" />
          <input  type="text" name="email" placeholder="email" value={state.email} onChange={handleChange} autoComplete="off" />
          <input type="password" name="password" placeholder="password" value={state.password} onChange={handleChange} />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
  )
}