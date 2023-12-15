async function handler(req, res) {
    const response = await fetch('http://localhost:8080/user/getUser', {
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