async function handler(req, res) { // can be called anything you like
    const response = await fetch('http://security-service:8080/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify(req.body),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    if (response.ok) {
      res.status(200).json(data)
    }
    else {
      res.status(401).json({ message: "Username or email already taken!" })
    }
  }
  
  export default handler;