import { useRouter } from "next/router"
import { useState } from "react"

const SignInComponent = () => {
  const router = useRouter()
    const [state, setState] = useState({
    username: "",
    password: ""
  })
  const [user, setUser] = useState()

    function handleChange(e) {
    const copy = { ...state }
    copy[e.target.name] = e.target.value
    setState(copy)
  }

  async function handleSignIn() {
    const response = await fetch('/api/sign-in', {
        method: 'POST',
        body: JSON.stringify(state),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json(); 
    if(response.ok) {
        setUser(data)
        router.push('/');
      }
    
    }

    function changeToSignout() {
       router.push('/signup');
    }
  return (
      <div >
        <h1 >Sign In</h1>
        <div >
          <input  type="text" name="username" placeholder="username" value={state.username} onChange={handleChange} autoComplete="off" />
          <input  type="password" name="password" placeholder="password" value={state.password} onChange={handleChange} />
          <button onClick={handleSignIn}>Submit</button>
        </div>
        <div>
          <h2>Don't have an account?</h2>
          <button onClick={changeToSignout}>Sign up here</button>
        </div>
      </div>
  );
};

export default SignInComponent;