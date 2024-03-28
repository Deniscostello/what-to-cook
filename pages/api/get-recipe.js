async function handler(req, res) {
    const response = await fetch('http://localhost:8081/food/getFoodForRecipe', {
        method: 'POST',
        body: JSON.stringify(req.body),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    res.json(data)
    
}

export default handler;