import React from 'react'
import Link  from 'next/link';
import { useRouter } from 'next/router'; 
// import { useDispatch, useSelector } from 'react-redux'; 
// import { reset } from '@/redux/userSlice';
import { signOut } from 'next-auth/react';

const Sidebar = () => {
    const router = useRouter();
   
    const {pathname} = router;
    // const dispatch = useDispatch();
    // const user = useSelector(state => state.user)  
    // const { id } = user; 
    
    const isMyCases = pathname.includes("mycases")
    const isMyCalender = pathname.includes("mycalender")
    const isMyCourts = pathname.includes("mycourts");
    const isHearing = pathname.includes("hearing"); 
    const isUndatedCases = pathname.includes("undatedcases")
    const isDecidedCases = pathname.includes("decidedcases")
    const isMyProfile = pathname.includes("myprofile")
    const isMyClients = pathname.includes("myclients"); 
    const isHome = pathname === "/"; 

    const handleLogout = () => {
      signOut(); 
    }
   
    



    const Active = "font-semibold  text-sm md:text-md lg:text-lg xl:text-xl bg-blue-500 p-2 rounded-md text-white"

    const NonActive = "font-semibold  text-sm md:text-md lg:text-lg xl:text-xl hover:bg-blue-300 p-2 rounded-md rounded-md  cursor-pointer"
  return (
    <div className="px-5  shadow-lg h-full text-lg md:text-xl lg:text-2xl">
        <div>
            <h1 className="font-bold mt-5  text-gray-500 mb-10">Dashboard</h1>
            <Link href="/">
           
            <div className={ isHome ? Active : NonActive}>Home</div>
            
            </Link>
            <Link href="/mycases">
           
            <div className={ isMyCases ? Active : NonActive}>My Cases</div>
            
            </Link>
            <Link href="/myclients">
           
            <div className={ isMyClients ? Active : NonActive}>My Clients</div>
            
            </Link>

           
      
              
            <Link href="/mycalender">

            <div className={isMyCalender ? Active : NonActive}>My Calender</div>
            </Link>
            <Link href="/mycourts">

            <div className={isMyCourts ? Active : NonActive}>My courts</div>
            </Link>
            <Link href="/hearing">

            <div className={isHearing ? Active : NonActive}>Hearing</div>
            </Link>
            <Link href="/undatedcases">

            <div className={isUndatedCases ? Active : NonActive}>Undated Cases</div>
            </Link>
            <Link href="/decidedcases">

            <div className={isDecidedCases ? Active : NonActive}>Decided Cases</div>
            </Link>
            <Link href={`/myprofile`}>
            <div className={isMyProfile ? Active:  NonActive}>My Profile</div>
              
            </Link>
         
            <Link href="/ecourtswebsite">

            <div className={NonActive}>E-Courts Website</div>
            </Link>
            <div className={NonActive} onClick={handleLogout}>Logout</div>

        </div>
    </div>
  )
}

export default Sidebar