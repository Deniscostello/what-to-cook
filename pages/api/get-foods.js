async function handler(req, res) {
  try {
    const { cookies } = req;
    const jwt = cookies.whattocook
    if (!jwt) {
      throw "No valid jwt"
    }
    const getUserResponse = await fetch('http://security-service:8080/api/auth/getUser', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Cookie': `whattocook=${jwt}`
      }
    });
    const userData = await getUserResponse.json()
    if (!getUserResponse.ok) {
      console.log('here' + userData.error)
      throw getUserResponse.error
    }
    req.body.userId = userData.id
    const getFood = await fetch('http://get-food-service:8081/food/getAllFood', {
      method: 'POST',
      body: JSON.stringify(req.body),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await getFood.json()
    res.json(data)
    console.log('get food API '+ JSON.stringify(data))

  } catch (error) {
    res.status(401).json({ message: error })
  }
}


export default handler;