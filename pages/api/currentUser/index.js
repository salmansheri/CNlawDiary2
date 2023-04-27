import getCurrentUser from "@/libs/getCurrentUser";
import { NextResponse } from "next/server";

export default async function handler(req, res) {
    const { method } = req; 

    if(method === "GET") {
        try {
            const {currentUser } = await getCurrentUser(req); 

           return res.status(200).json(currentUser)

        } catch(err) {
            return res.status(500).json(err.message)

        }
      
           

    
            
        
    }
}