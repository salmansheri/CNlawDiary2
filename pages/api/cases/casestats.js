import prisma from "@/libs/prismaDB";

export default async function handler(req, res) {
  const { method } = req;

  if (method === "GET") {
    try {
      const cases = await prisma.cases.count();
      

      res.status(200).json(cases);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: err.message });
    }
  }

  
}
