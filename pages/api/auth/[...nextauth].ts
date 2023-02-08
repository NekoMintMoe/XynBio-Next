import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GH_OAUTH_ID,
      clientSecret: process.env.GH_OAUTH_SECRET,
    }),
  ],
})