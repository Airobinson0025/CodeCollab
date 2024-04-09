import { CredentialsProvider } from "next-auth/providers";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "./db";
import { compare } from "bcrypt";

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    secret: process.env.AUTH_SECRET,
    session: {
        strategy: 'jwt'
    },
    pages: {
        signIn: '/sign-in',
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if(!credentials?.username || !credentials?.password) {
                    return null
                }
                const existingUser = await prisma.user.findUnique({
                    where: {
                        email: credentials?.email
                    }
                })
                if(!existingUser) {
                    return null
                }

                const passwordMatch = await compare(credentials.password, existingUser.password)

                if(!passwordMatch) {
                    return null
                }

                return {
                    id: `${existingUser.id}`,
                    email: existingUser.email,
                    username: existingUser.username
                }
            }
        }),
        
    ],
    callbacks: {
        async jwt({ token, user, session}) {
            console.log('jwt callback', { token, user, session })

            //pass id, email, username, and active status to the token
            if(user) {
                return {
                    ...token,
                    id: user.id,
                    email: user.email,
                    username: user.username
                }
            }
            return token
        },
        async session({ session, token, user }) {
            console.log('session callback', { session, token, user })

            //pass id, email, username, and active status to the session
            if(token) {
                return {
                    ...session,
                    user: {
                        id: token.id,
                        email: token.email,
                        username: token.username
                    }
                }
            }
        }
    }
}