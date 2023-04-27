import Layout from "@/components/Layout";
import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";


const Details = () => {
  const router = useRouter();

  const { asPath } = router;
  const id = asPath.split("/")[3];
  console.log(id);

  const [caseDetails, setCaseDetails] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetch(`/api/cases/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setCaseDetails(data);
      console.log(typeof data);
    };
    fetchDetails();
  }, [id]);

  return (
    <Layout>
      <div className="flex items-center justify-center ">
        <div className=" bg-gradient-to-br from-blue-500 to-cyan-200 p-10 rounded-lg shadow-lg text-gray-900 w-[40rem]">
          <h1 className="font-medium text-3xl">Case Details</h1>
          <div className="my-5">
            <label className="font-bold text-xl">REGNo: </label>
            <span className="text-lg">{caseDetails.regno}</span>
          </div>
          <div className="my-5">
            <label className="font-bold text-xl">CNR No: </label>
            <span className="text-lg">{caseDetails.CNRno} </span>
          </div>
          <div className="my-5">
            <label className="font-bold text-xl">Client Name: </label>
            <span className="text-lg"> {caseDetails.clientname}</span>
          </div>
          <div className="my-5">
            <label className="font-bold text-xl">client status: </label>
            <span className="text-lg">{caseDetails.CNRno}</span>
          </div>
          <div className="my-5">
            <label className="font-bold text-xl">Case Name: </label>
            <span className="text-lg">{caseDetails.CNRno}</span>
          </div>

          <div className="my-5">
            <label className="font-bold text-xl">Case Status: </label>
            <span className="text-lg">{caseDetails.casestatus}</span>
          </div>

          <div className="my-5">
            <label className="font-bold text-xl">IA</label>
            {caseDetails.IA?.map((ia, index) => (
              <li key={index} className="text-lg">
                {ia}
              </li>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};


export default Details;
