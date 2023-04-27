import prisma from "@/libs/prismaDB";

export default async function handler(req, res) {
  const { method } = req;

  if (method === "GET") {
    try {
      const cases = await prisma.cases.findMany();
      console.log("successfully fetched");

      res.status(200).json(cases);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: err.message });
    }
  }

  if (method === "POST") {
    try {
      const body = req.body;

      const cases = await prisma.cases.create({
        data: body
      })

      res.status(200).json(cases)
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: err.message });
    }
  }
}
