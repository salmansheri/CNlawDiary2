import prisma from "./prismaDB";

export async function getClients() {
    const clients = await prisma.client.findMany();

    if(!clients) {
        return; 
    }

    return clients; 
}