import React, { useState } from "react";
// import { Label, TextInput, Checkbox, Button } from "flowbite-react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
// import { useDispatch } from 'react-redux'; 
// import { loggedUser } from "@/redux/userSlice";
import { signIn } from "next-auth/react";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); 
  // const dispatch = useDispatch(); 

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    // const user = await fetch("http://localhost:3000/api/auth/login", {
    //   method: "POST", 
    //   headers: {
    //     "Content-Type":"application/json",
    //   }, 
    //   body: JSON.stringify({
    //     email: email, 
    //     password:password,
    //   })

    // })

    // const data = await user.json(); 
    // console.log(data)

    
    // if(data.email === email) {
    //   dispatch(loggedUser({email: data.email,username: data.username, id: data._id, photo: data.photo})); 
    //   router.push("/")
     

    // } 
    // if(data.message) {
    //   alert("Wrong Credentials")
    // }
    signIn("credentials", {
      email, 
      password
    })

   

    
  }

  return (
    <div className="px-10 md:flex justify-center items-center">
      <div className="bg-white shadow-md p-5 mt-40 w-96">
        <div className="my-5">
          <h1 className="text-center text-2xl font-semibold ">Login</h1>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label>Email</label>
            <input
              placeholder="Enter Email .."
              className="w-full my-2 border p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password</label>
            <input 
              placeholder="Enter Password..."
              className="w-full my-2 border p-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button className="py-2 px-4 bg-blue-500 rounded-md text-white hover:bg-opacity-80" type="submit">Submit</button>
          </div>

          <div>
            <p>New to C N Law Diary?
              <span onClick={() => router.push("/auth/register")} className="ml-2 hover:underline text-blue-600">Register</span>
            </p>

          </div>

        </form>
      </div>
    </div>
  );
};

export default Login;
