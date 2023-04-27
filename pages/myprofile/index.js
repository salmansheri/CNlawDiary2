import Layout from "@/components/Layout";
import Loader from "@/components/Loader";
import useCurrentUser from "@/hooks/useCurrentUser";



const MyProfilePage = () => {
    const {data: currentUser, isLoading} = useCurrentUser(); 

    console.log(currentUser)

    if(isLoading) {
        return <Loader />
    }
   
    return(
    <Layout>
       <div className="flex justify-center items-center">

        <div className="bg-white flex flex-col gap-4 ">
            <label className="font-bold">First Name:</label>
            <span>
            {`${currentUser?.firstname} ${currentUser?.lastname}`}
            </span>
            
            <label className="font-bold">username </label>{currentUser?.username} 
            <label className="font-bold">Email </label>
            <span>  {currentUser?.email} </span>
          

          
        </div>

       </div>


    </Layout>
    )
}

export default MyProfilePage; 
