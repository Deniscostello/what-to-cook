import { serialize } from "cookie";

async function handler(req, res) {
  const response = await fetch('http://localhost:8080/api/auth/signin', {
    method: 'POST',
    body: JSON.stringify(req.body),
    headers: {
      'Content-Type': 'application/json'
    },
  });
  if (response.ok) {
    const data = await response.json();
    //console.log(data)
    const cookieHeader = response.headers.get('Set-Cookie')


    const serialised = serialize(cookieHeader)

    res.setHeader("Set-Cookie", serialised);

    res.status(200).json(data)
  }
  else {
    res.json({ message: "Invalid credentials!" })
  }
}
export default handler;
