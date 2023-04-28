import prisma from "@/libs/prismaDB";

const handler = async (req, res) => {
    const { method, query: { id } } = req; 
    
   
    if(method === "GET") {
        try{
            const courtCase = await prisma.cases.findUnique({
                where: {
                    id: id,
                }
            }) 
            res.status(200).json(courtCase); 

        } catch(err) {
            res.status(500).json({message:err});
            console.log(err); 

        }
       
        
    }

    if(method === "PUT") {
        try {
            const {casestatus} = req.body
            const courtCase = await prisma.cases.update({
                where: {
                    id: id
                }, 
                data: {
                    casestatus
                }
            }) 

            res.status(200).json(courtCase); 


        } catch(err) {
            res.status(500).json({message: err})
            console.log(err); 


        }
    }

    if(method === "DELETE") {
        try {
            const courtCase = await prisma.cases.delete({
                where: {
                    id: id
                }
            }) 
            res.status(200).json(courtCase); 

        } catch(err) {
            res.status(500).json({message: err}); 
            console.log(err);
        }
    }
}

export default handler; 
