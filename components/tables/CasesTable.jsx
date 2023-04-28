import React, {useState} from 'react'; 
import Link from 'next/link';
import { useRouter } from 'next/router';
import { serialize } from 'cookie';

const CasesTable = ({courtCases, searchItem}) => {
    const router = useRouter(); 

 

    

   

    const handleUndated = async (id) => {
        try {
            const response = await fetch(`/api/cases/${id}`, {
                method: "PUT", 
                headers: {
                    'Content-Type': 'application/json', 
                }, 
                body: JSON.stringify({
                    casestatus: "undated", 
                })
            })

            if(response.status === 200) {
                alert("success")
            }

        }catch(err) {
            alert("something went wrong")
            console.log(err); 
            
        }
        
        
    }

    const handleDecided = async (id) => {
        try {
            const response = await fetch(`/api/cases/${id}`, {
                method: "PUT", 
                headers: {
                    'Content-Type':'application/json', 
                }, 
                body: JSON.stringify({
                    casestatus: "decided"
                })
            })

            if(response.status === 200) {
                alert("success")
            }

            

            

           

        }catch(err) {
            console.log(err); 
            
        }
        
    }

    


  return (
  


        <div className="bg-white w-full rounded-lg shadow-md overflow-auto">
         <table className="border  w-full text-xs md:text-base text-center rounded-lg">
            <thead className="h-10 bg-black text-white">
                <tr>
                    <th>S.no</th>
                    <th>ID</th>
                    <th>Reg No</th>
                    <th>Client Name</th>
                    <th>Date</th>
                    <th>Client Status</th>
                    <th>Case Name</th>
                   
                   
                    
                    <th>ACT</th>
                    <th>Opposite Party</th>
                    <th>Opposite Advocate</th>
                    <th>Case Description</th>
                    <th>Set Case Status</th>
                    <th>Details</th>
                    
                </tr>
            </thead>

         {courtCases?.filter((cases) => cases.regno === searchItem ||
                                        cases.CNRno=== searchItem ||
                                        cases.clientname?.toLowerCase().includes(searchItem.toLowerCase()) ||
                                       
                                        cases.casename?.toLowerCase().includes(searchItem.toLowerCase()) 
                                     
                                      
                                      
            ).map((courtCase, index) => (
                 <tbody key={courtCase.id} index={index}>
          
            <tr className="h-10">
                
                    <td>{index + 1}</td>
                    <td>{courtCase._id}</td>
                    <td>{courtCase.regno}</td>
                    <td>{courtCase.clientname}</td>
                    <td>{courtCase.date}</td>
                    <td>{courtCase.clientstatus}</td>
                    <td>{courtCase.casename}</td>
               
                  
                   
                    <td>{courtCase.act}</td>
                    <td>{courtCase.oppositionparty}</td>
                    <td>{courtCase.oppositionadvocate}</td>
                    <td>
                       akfljasdkfjdsklfjsdkl
                    </td>
                    <td className="flex gap-2 ml-10">
                        <button className="bg-red-500 px-2 py-1 rounded-md text-white shadow-sm" onClick={() => handleUndated(courtCase.id)}>Undated</button>
                        <button className="bg-blue-500 px-2 py-1 rounded-md text-white shadow-sm" onClick={() => handleDecided(courtCase.id)}>Decided</button>
                    </td>
                    <td><Link className="text-blue-500 hover:underline" href={`/mycases/details/${courtCase.id}`}>Details</Link></td>
                    
                 
                   
                </tr>
            </tbody>


            ))}
            
           {/* {courtCases.map((courtCase, index) => (
            // <tbody key={courtCase._id} index={index}>
          
            // <tr className="h-10">
                
            //         <td>{index + 1}</td>
            //         <td>{courtCase._id}</td>
            //         <td>{courtCase.regno}</td>
            //         <td>{courtCase.clientname}</td>
            //         <td>{courtCase.date}</td>
            //         <td>{courtCase.clientstatus}</td>
            //         <td>{courtCase.casename}</td>
               
                  
                   
            //         <td>{courtCase.act}</td>
            //         <td>{courtCase.oppositionparty}</td>
            //         <td>{courtCase.oppositionadvocate}</td>
            //         <td>
            //            akfljasdkfjdsklfjsdkl
            //         </td>
            //         <td className="flex gap-2 ml-10">
            //             <button className="bg-red-500 px-2 py-1 rounded-md text-white shadow-sm" onClick={() => handleUndated(courtCase._id)}>Undated</button>
            //             <button className="bg-blue-500 px-2 py-1 rounded-md text-white shadow-sm" onClick={() => handleDecided(courtCase._id)}>Decided</button>
            //         </td>
            //         <td><Link className="text-blue-500 hover:underline" href={`/mycases/details/${courtCase._id}`}>Details</Link></td>
                    
                 
                   
            //     </tr>
            // </tbody>

            
           ))} */}
               
               
              
            
         </table>
    
        </div>
       
  )
}

export default CasesTable