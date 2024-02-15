import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  // Clone the request headers and set a new header `x-hello-from-middleware1`
  const requestHeaders = new Headers(request.headers);
  // requestHeaders.set("x-hello-from-middleware1", "hello");

  console.log("requestHeaders", requestHeaders);

  // You can also set request headers in NextResponse.rewrite
  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  });

  // Set a new response header `x-hello-from-middleware2`
  // response.headers.set("x-hello-from-middleware2", "hello");
  return response;
}

// middleware.js
// export async function middleware(req: NextRequest) {
//   const authorization = 'your-authorization-header-value';
//   req.headers.set('authorization', authorization);
//   return NextResponse.next();
// }

// // export the middleware function
// export const config = {
//   matcher: ['/your-route-path'],
// };

// export default middleware;
