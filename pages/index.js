import Head from "next/head";

import Layout from "@/components/Layout";
import { useEffect, useState } from "react";

import Notification from "@/components/Notification";
// import dynamic from "next/dynamic";
// const Graph = dynamic(() => import("../components/Graph"), { ssr: false });
// import { useSelector } from 'react-redux';
import { useRouter } from "next/router";
import Login from "./auth/login";
import { useSession } from "next-auth/react";
import axios from "axios";
import { getCases } from "@/libs/Cases";
// import useCourtCase from "@/hooks/useCourstCase";

export default function Home({ cases }) {
  // const user = useSelector(state => state.user);
  

  const [courtCases, setCourtCases] = useState(cases);
  const router = useRouter();

  const { data: session } = useSession();

  // const {email} = user;

  // const {data: courtCases} = useCourtCase();
  // console.log(courtCases)

  
  const undatedCases = courtCases.filter(
    (cases) => cases.casestatus === "undated"
  );

  if (!session?.user?.email) {
    return <Login />;
  }

  return (
    <>
      <Head>
        <title>C N Law Diary</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header  */}

      <Layout>
        <div>
          <div>
            <Notification undatedCases={undatedCases.length} />
          </div>
         
        </div>
      </Layout>
    </>
  );
}

export const getServerSideProps = async () => {
  const cases = await getCases();

  return {
    props: {
      cases: cases,
    },
  };
};
