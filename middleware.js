import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";

export default withAuth(
    function middleware() {
        return NextResponse.next();
    },
    {
        callbacks: {
            authorized({ token }) {
                return !!token?.email;
            },
        },
        pages: {
            signIn: "/?error=unauthorized",
            error: "/?error=unauthorized",
        },
    }
);

export const config = {
    matcher: [
        "/admin/:path*"
    ],
};