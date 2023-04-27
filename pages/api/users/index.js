import prisma from "@/libs/prismaDB";
import bcrypt from 'bcrypt'; 

export default async function handler(req, res){
    const {method} = req; 

    if(method === "GET") {
        const users = await prisma.user.findMany(); 
       if(!users) {
        return null; 
       }

       res.status(200).json(users)

    }
    if(method === "POST") {
        try {
            const {
                firstname,
                lastname,
                username, 
                email,
                password,
    
    
            } = req.body; 
    
            const salt = await bcrypt.genSalt(10); 
    
            const hashedPassword = await bcrypt.hash(password, salt)
    
            const user = await prisma.user.create({
                data: {
                    firstname,
                    lastname,
                    username,
                    email,
                    hashedPassword,
    
                }
            })

            res.status(200).json(user)
    
    

        } catch(err) {
            console.log(err)
            res.status(500).json(err.message)

        }
        
        
    }
}