import Layout from '@/components/Layout'
import React, { useEffect, useState } from 'react'; 
import Table from '@/components/Table';
import AddCases from '@/components/AddCases';
import UndatedTable from '@/components/tables/UndatedTable';
import Search from '@/components/Search';
import { useSession } from 'next-auth/react';
import Login from '../auth/login';

const UndatedCases  = () => {
  const {data: session} = useSession(); 
  const [courtCases, setCourtCases] = useState([])
  const [isClicked, setIsClicked] = useState(false); 
  const [searchItem, setSearchItem] = useState(""); 


  useEffect(() => {
    const fetchCases = async () => {
      const response = await fetch("/api/cases", {
        method: "GET", 
        headers: {
          'Content-Type': 'application/json', 
        }
    
      })
    
      const data = await response.json(); 
      setCourtCases(data)
  

    }

    fetchCases(); 
   

  }, []); 

  if(!session?.user?.email) {
    return <Login />
  }

 
  return (
    <Layout>
      <div className="mt-10 px-2">
      <div>
        <button className="flex gap-1 mb-6 bg-blue-500  px-3 py-2 rounded-md text-white shadow-sm" onClick={() => setIsClicked(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
 Add Hearing

        </button>
      </div>
      <Search searchItem={searchItem} setSearchItem={setCourtCases} />
        <UndatedTable courtCases={courtCases} searchItem={searchItem} />
      </div>
      {isClicked && (
        <div>
        <AddCases undatedSetIsClicked={setIsClicked} />
      </div>

      )}
   
    </Layout>
  )
}


// export const getServerSideProps = async () => {
//   const response = await fetch("http://localhost:3000/api/cases", {
//     method: "GET", 
//     headers: {
//       'Content-Type': 'application/json', 
//     }

//   })

//   const data = await response.json(); 

//   return {
//     props: {
//       courtCases: data, 

//     }
//   }
// }

export default UndatedCases; 