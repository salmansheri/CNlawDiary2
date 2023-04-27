import prisma from "@/libs/prismaDB";


export default async function handler(req, res){
    const {method} = req; 

    if(method === "GET") {
        const users = await prisma.user.count(         
        ); 
      

       res.status(200).json(users)

    }
   
}