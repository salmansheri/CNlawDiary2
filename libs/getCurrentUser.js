import { getSession } from "next-auth/react";
import prisma from "./prismaDB";

export default async function getCurrentUser(req) {
    const session = await  getSession({req}); 

    

    if(!session?.user?.email) {
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