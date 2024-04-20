async function handler(req, res) {
    try {
        const { cookies } = req;
        const jwt = cookies.whattocook
        if (!jwt) {
          throw "No valid jwt"
        }
        const getUserResponse = await fetch('http://localhost:8080/api/auth/getUser', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Cookie': `whattocook=${jwt}`
          }
        });
        const userData = await getUserResponse.json();
        if (!getUserResponse.ok) {
          throw getUserResponse.error
        }
        res.json(data)
    } catch (error) {
      res.status(401).json({ message: error })
    }
}

export default handler;