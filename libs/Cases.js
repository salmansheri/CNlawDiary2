import prisma from "./prismaDB";

export async function getCases() {
    const cases = await prisma.cases.findMany(); 

    return cases; 
}