import prisma from "@/libs/prismaDB";

const handler = async (req, res) => {
  const {
    method,
    query: { id },
  } = req;

  if (method === "GET") {
    try {
      const client = await prisma.client.findUnique({
        where: {
          id: id,
        },
      });
      res.status(200).json(client);
    } catch {
      res.status(500).json({ message: err });
      console.log(err);
    }
  }

  if (method === "PUT") {
    try {
      const client = await prisma.client.update({
        where: {
          id: id,
        },
        data: req.body,
      });

      res.status(200).json(client);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }

  if (method === "DELETE") {
    try {
      const client = await prisma.client.delete({
        where: {
          id: id,
        },
      });
      res.status(200).json(client);
      console.log(`Client with id: ${id} has been deleted successfully`);

      res.status(200).json("Deleted  successfully");
      console.log(` Deleted Sucess`);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }
};

export default handler;
