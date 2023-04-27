import React from "react";


const Notification = ({undatedCases}) => {
 
  return (
    <>
      <div className="mt-40 md:flex md:flex-wrap lg:flex lg:flex-wrap gap-8 lg:justify-around w-full">
        
          <div className="bg-white px-7 py-5 rounded-lg shadow-lg my-10">
            <h1 className="font-bold text-xl md:text-2xl lg:text-4xl">Undated Cases</h1>
            <div className="flex gap-1">
              <p className="font-semibold text-lg">Pending: </p>
              <span className="text-xl">{undatedCases}</span>
            </div>
          </div>
       
    
          <div className="bg-white py-5 px-5 rounded-lg shadow-lg my-10">
            <h1 className="font-bold text-xl md:text-2xl lg:text-4xl">Today Hearing</h1>
            <p className=" font-semibold text-lg md:text-xl lg:text-xl">10</p>
          </div>
      
      
          <div className="bg-white py-5 px-5 rounded-lg shadow-lg mt-10 h-[7rem]">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">Tomorrow Hearing</h1>
            <p className="text font-semibold text-lg md:text-xl lg:text-xl">10</p>
          </div>
     
      </div>
    </>
  );
};

export default Notification;
