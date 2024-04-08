// /api/new-meetup

async function handler(req, res) { // can be called anything you like
  const { cookies } = req;

  const jwt = cookies.whattocook

  if (jwt) {
    try {
      const getUserResponse = await fetch('http://localhost:8080/api/auth/getUser', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Cookie': `whattocook=${jwt}`
        }
      });
      const userData = await getUserResponse.json();
      if (getUserResponse.ok) {
        req.body.userId = userData.id
        const addFoodResponse = await fetch('http://localhost:8082/food/addNewFood', {
          method: 'POST',
          body: JSON.stringify(req.body),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await addFoodResponse.json();
        console.log(data)
        res.json(data)
      }
      else {
        console.log("Not valid")
      }
    } catch (error) {
      console.error('Error validating JWT token:', error);
    }
  }
}

export default handler;
