import GoogleProvider from "next-auth/providers/google";
import connectDB from "@/lib/db";
import AllowedUser from "@/models/AllowedUser";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/",
    error: "/",
  },
  session: {
    strategy: "jwt",
  },
  jwt: {
    maxAge: 60 * 60 * 24,
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user?.email) {
        await connectDB();
        const allowedUser = await AllowedUser.findOne({ email: user.email });
        if (!allowedUser) {
          throw new Error("Unauthorized user");
        }
        token.email = user.email;
        token.name = user.name;
        token.picture = user.image;
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.email) {
        session.user.email = token.email;
        session.user.name = token.name;
        session.user.image = token.picture;
      } else {
        session.user = null;
      }
      return session;
    },
  },
};
