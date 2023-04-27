import prisma from "@/libs/prismaDB";

export default async function handler(req, res) {
  const { method } = req;

  if (method === "GET") {
    try {
      const clients = await prisma.client.findMany();
      res.status(200).json(clients);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
  if (method === "POST") {
    try {
      const { name, address, mobile, email } = req.body;
      const clients = await prisma.client.create({
        data: {
          name,
          email,
          mobile,
          email,

        }
      })
      res.status(200).json(clients);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }

 
}
