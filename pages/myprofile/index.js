import Layout from "@/components/Layout";
import Loader from "@/components/Loader";
import useCurrentUser from "@/hooks/useCurrentUser";

const MyProfilePage = () => {
  const { data: currentUser, isLoading } = useCurrentUser();

  console.log(currentUser);

  if (isLoading) {
    return <Loader />;
  }

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
