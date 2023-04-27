// import { getSession } from "next-auth/react";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "./prismaDB";
import { getServerSession } from "next-auth";

export default async function getCurrentUser() {
    // const session = await  getSession({req}); 

    const session = await getServerSession(authOptions); 

    

    

    if(!session?.user.email) {
        throw new Error("Not Logged In")

    }
    const currentUser = await prisma.user.findUnique({
        where: {
            email: session.user.email
        }
    })

    if(!currentUser) {
        throw new Error("Not found")
    }


    return { currentUser }
}