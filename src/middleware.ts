import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Define paths that don't require authentication
    const publicPaths = ["/auth", "/api/auth"];

    // Check if the path is public
    const isPublicPath = publicPaths.some(path => pathname.startsWith(path));

    // Get the session token from cookies
    // better-auth uses "better-auth.session_token" by default
    const sessionToken = request.cookies.get("better-auth.session_token");

    // If the user is not authenticated and trying to access a protected route
    if (!sessionToken && !isPublicPath) {
        return NextResponse.redirect(new URL("/auth", request.url));
    }

    // If the user is authenticated and trying to access the auth page
    if (sessionToken && pathname === "/auth") {
        return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes) - we exclude all API routes to avoid issues with auth endpoints, 
         *   but we manually handled /api/auth above. 
         *   Actually, let's just exclude static files and _next.
         */
        "/((?!_next/static|_next/image|favicon.ico|public).*)",
    ],
};
