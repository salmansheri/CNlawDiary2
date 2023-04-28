import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";

import CasesTable from "@/components/tables/CasesTable";
import CasesModal from "@/components/Modals/addModals/CasesModal";
import Search from "@/components/Search";


import { useSession } from "next-auth/react";

import {useRouter} from 'next/router'
import Login from "../auth/login";

import { getCases } from "@/libs/Cases";
const MyCases = ({cases}) => {
  
  const router = useRouter(); 
  const {data: sesssion} = useSession(); 
  const [data, setData] = useState({
    regno: 0,
    cnrno: 0,
    clientName: "",

    clientStatus: "",
    casename: "",
    date: null,

    act: "",
    oppositionParty: "",
    oppositeAdvocate: "",
    casedesc: "",
  });

  const [iaList, setIaList] = useState([]);

  const [ia, setIa] = useState("");

  const [isClicked, setIsClicked] = useState(false);

  const [searchItem, setSearchItem] = useState("");

  const [courtCases, setCourtCases] = useState(cases);

  // useEffect(() => {
  //   const fetchCases = async () => {
  //    const response = await fetch("/api/cases", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //    }); 
  //    const data = await response.json(); 
  //     setCourtCases(data);
      
  //   };

  //   fetchCases();
  // }, []);

  if(!sesssion?.user?.email) {
    return <Login />
  }

  

  return (
    <Layout>
      <div className=" h-auto   px-2">
        <button
          className="flex gap-1 mb-7 bg-blue-500 px-2 py-2 rounded-md text-white hover:bg-blue-700 active:bg-blue-900"
          onClick={() => setIsClicked(true)}
        >
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
          Add Cases
        </button>
        <Search searchItem={searchItem} setSearchItem={setSearchItem} />
        <CasesTable courtCases={courtCases} searchItem={searchItem} />
      </div>

      {isClicked && (
        <CasesModal
          setIsClicked={setIsClicked}
          setData={setData}
          data={data}
          ia={ia}
          setIa={setIa}
          cases={courtCases}
          setIaList={setIaList}
          iaList={iaList}
        />
      )}
    </Layout>
  );
};


export const getServerSideProps = async () => {
  const cases = await getCases(); 

  return {
    props: {
      cases: cases
    }
  }
}


export default MyCases;
