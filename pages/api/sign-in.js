import { serialize } from "cookie";

async function handler(req, res) {
  const response = await fetch('http://security-service:8080/api/auth/signin', {
    method: 'POST',
    body: JSON.stringify(req.body),
    headers: {
      'Content-Type': 'application/json'
    },
  });
  const data = await response.json();
  if (response.ok) {
    const cookieHeader = response.headers.get('Set-Cookie')
    const serialised = serialize(cookieHeader)
    res.setHeader("Set-Cookie", serialised);
    res.status(200).json(data)
  }
  else {
    res.status(401).json({ message: "Invalid credentials!" })
  }
}
export default handler;
