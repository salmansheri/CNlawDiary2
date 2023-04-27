import prisma from "@/libs/prismaDB";

export default async function handler(req, res) {
  const { method, query: {id} } = req; 

  if(method === "DELETE") {
    try {
      const user = await prisma.user.delete({
        where: {
          id: id,
        }
      })

      res.status(200).json(user)

    } catch(err) {
      res.status(500).json(err.message)
    }
   

    

  }
  if(method === "PUT") {
    try {
      const body = req.body; 
      const user = await prisma.user.update({
        where: {
          id: id,
        }, 
        data: body,
      })

      res.status(200).json(user)

    } catch(err) {
      res.status(500).json(err.message)
    }
   

    

  }


}