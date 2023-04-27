import prisma from "./prismaDB";

export default async function getProfile(email) {
    const profile = await prisma.user.findUnique({
        where: {
            email: email

        }
    })

    if(!profile) {
        throw new Error("Not found")
    }


    return {profile}; 

}