import { NextRequest, NextResponse } from "next/server"


export async function middleware(req, res ) {

  const jwt = req.cookies.get('whattocook')?.value
  let verifiedJwt = null
  if(jwt){
    try {
        const response = await fetch('http://localhost:8080/api/auth/getUser', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Cookie': `whattocook=${jwt}`
            }
          });
          if (response.ok)
          {
            const data = await response.json();
            verifiedJwt = "valid"
          }
          else {
            console.log("Not valid")
          }
      } catch (error) {
        console.error('Error validating JWT token:', error);
      }
  }

  if(req.nextUrl.pathname.startsWith('/signin') && !verifiedJwt){
    return
  }

  if(req.nextUrl.pathname.startsWith('/signup') && !verifiedJwt){
    return
  }

  

  if (!verifiedJwt){
    return NextResponse.redirect(new URL('/signin', req.url))
  }

  if (req.url.includes('/signin') && verifiedJwt) {
    return NextResponse.redirect(new URL('/', req.url))
  }
    
}

export const config = {
    matcher: ['/show-food', '/signin', '/signout', '/input-food', '/show-recipe', '/' , '/globalContext']
    // matcher: ['/api']
}