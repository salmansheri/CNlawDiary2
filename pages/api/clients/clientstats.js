import prisma from "@/libs/prismaDB";

export default async function handler(req, res) {
  const { method } = req;

  if (method === "GET") {
    try {
      const clients = await prisma.client.count();
      res.status(200).json(clients);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
}
