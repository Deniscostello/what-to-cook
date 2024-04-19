import { serialize } from "cookie";
import { useRouter } from "next/router"
async function handler(req, res) {
  const { cookies } = req;

   const jwt = cookies.whattocook

  const serialised = serialize('whattocook', jwt, {
    httpOnly: true,
    expires: new Date(0),
    path: '/',
  })
  res.setHeader("Set-Cookie", serialised)
  res.status(200).json({ message: 'Successfully signed out' });

}
export default handler;
