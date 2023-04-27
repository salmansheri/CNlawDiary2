import Layout from "@/components/Layout";

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import getProfile from "@/libs/getProfile";


export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions)
  if(!session.user.email) {
    throw new Error("not signed in")
  }

  const { profile} = await getProfile(session?.user?.email)
  

  return {
    props: {
      currentUser: profile
    }
  }
}





const MyProfilePage = ({currentUser}) => {
  console.log(currentUser)


  


  return (
    <Layout>
      <div className="flex justify-center items-center">
        <div className="bg-white flex flex-col gap-4 w-96 p-10 rounded-lg shadow-md">
          <div>
            <h1 className="text-center text-2xl font-bold">My Profile</h1>
          </div>
          <div className="flex gap-5">
            <label className="font-bold">First Name:</label>
            <span>{`${currentUser?.firstname} ${currentUser?.lastname}`}</span>
          </div>
          <div>
            <label className="font-bold">username </label>
            {currentUser?.username}
          </div>
          <div className="flex gap-5">
            <label className="font-bold">Email </label>
            <span> {currentUser?.email} </span>
          </div>
        </div>
      </div>
    </Layout>
  );
};




export default MyProfilePage;
