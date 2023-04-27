import bcrypt from 'bcrypt'; 

import NextAuth from 'next-auth/next';
import CredentiaslProvider from 'next-auth/providers/credentials'; 

import prisma from '@/libs/prismaDB';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    
    providers: [
        CredentiaslProvider({
           name: "credentials",
           credentials: {
            email: { label: "email", type: "email"},
            password: { label: "password", type: "password"}
           }, 
           async authorize(credentials) {
            if(!credentials?.email || !credentials?.password) {
                throw new Error("Invalid Credentials")
            }

          

          const user = await prisma.user.findUnique({
            where: {
                email: credentials.email,
            }
          })

            if(!user || !user.hashedPassword) {
                throw new Error("Invalid Credentials")
            }

            const isCorrectPassword = await bcrypt.compare(
                credentials.password, user.hashedPassword
            )

            if(!isCorrectPassword) {
                throw new Error("Wrong Credentials")
            }

            return user; 
           }
        })
    ], 
    pages: {
        signIn: "/"
    },
    debug: process.env.NODE_ENV === "development",
    session: {
        strategy: "jwt"
    },
    jwt: {
        secret: process.env.NEXTAUTH_JWT_SECRET,
    }, 
    secret: process.env.NEXTAUTH_SECRET

}

export default NextAuth(authOptions); 