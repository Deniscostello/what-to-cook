

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

    const userData = await getUserResponse.json();
    if (!getUserResponse.ok) {
      throw getUserResponse.error
    }
    req.body.userId = userData.id
    const getRecipes = await fetch('http://get-food-service:8081/food/getFoodForRecipe', {
      method: 'POST',
      body: JSON.stringify(req.body),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await getRecipes.json()
    res.json(data)
  } catch (error) {
    res.status(401).json({ message: error })
  }
}


export default handler;
