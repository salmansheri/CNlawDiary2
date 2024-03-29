import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
// import Table from "@/components/Table";
import AddCases from "@/components/AddCases";
import CourtsTable from "@/components/tables/CourtsTable";
import { useSession } from "next-auth/react";
import Login from "../auth/login";
import EmptyState from "@/components/EmptyState";

const MyCourtsPage = () => {
  const { data: session } = useSession(); 
  const [isClicked, setIsClicked] = useState(false);
  const [courtCases, setCourtCases] = useState([]);

  useEffect(() => {
    const fetchCases = async () => {
      const response = await fetch("/api/cases", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      setCourtCases(data);
    };

    fetchCases();
  }, []);

  

  if(!session?.user?.email) {
    return <Login />
  }

  if(courtCases.length === 0) {
    return <EmptyState title="No Cases" subtitle="Looks like you dont have cases yet" />
  }


  return (
    <Layout>
      <div className="px-2">
        {/* <button className="mt-10 bg-blue-500 text-white px-3 py-2 rounded-md shadow-sm flex gap-1" onClick={() => setIsClicked(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Add Courts
        </button> */}
        <CourtsTable courtCases={courtCases} />
      </div>

      {isClicked && (
        <div>
          <AddCases courtSetIsClicked={setIsClicked} />
        </div>
      )}
    </Layout>
  );
};

// export const getServerSideProps = async () => {
//   const response = await fetch("http://localhost:3000/api/cases", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     }
//   })

//   const data = await response.json();

//   return {
//     props: {
//       courtCases: data,
//     }
//   }

// }

export default MyCourtsPage;
