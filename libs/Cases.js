import prisma from "./prismaDB";

export async function getCases() {
    const cases = await prisma.cases.findMany(); 

    return cases; 
}

export async function getCase(id) {
    const courtCase = await prisma.cases.findUnique({
        where: {
            id: id
        }
    })

    return courtCase; 
}