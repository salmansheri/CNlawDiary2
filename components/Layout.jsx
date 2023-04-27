import React, { useState } from 'react'; 
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

const Layout = ({children, user}) => {
  const [isClicked, setIsClicked] = useState(false)
  return (
    <>
     <Header user={user} setIsClicked={setIsClicked} isClicked={isClicked} />

{/* Side bar  */}
<main className="flex">
{isClicked && (
  <div className="w-96 h-screen fixed top-28 bg-white z-40">
<Sidebar />

</div>

)}


<div className="w-full px-5 md:mx-auto lg:mx-auto mt-40">
    {children}
</div>

</main>

    </>
   
   
  )
}

export default Layout