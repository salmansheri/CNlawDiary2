import React from 'react'

const ClientModals = ({handleClick, setName, setAddress, setMobileno, setEmail, setIsClicked}) => {
  const inputStyles = "w-full my-2 border border-gray-700 p-3 rounded-md placeholder:italic focus:border-blue-300 className={inputStyles} focus:outline-none"
  return (
   


      <div className="flex items-center justify-center h-screen w-screen absolute top-0 right-4  bg-gray-100 bg-opacity-30">
      <div className="bg-white relative p-10 w-[70rem] rounded-lg shadow-lg">
      <div className="bg-black text-white w-8 h-8 rounded-full  flex justify-center items-center absolute right-0 top-0 cursor-pointer font-bold" onClick={() => setIsClicked(false)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
      </div>
      <h1 className="font-bold text-3xl mb-3">Add Clients</h1>
        <div className="w-full  gap-5 ">
         
          <div>
            <label>Client Name</label>
            <input className={inputStyles} placeholder="Enter Clients Name" onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label>Address</label>
            <textarea className={inputStyles} placeholder="Enter Address" onChange={(e) => setAddress(e.target.value)} />
          </div>
          <div>
            <label>Mobile Number</label>
            <input type="number" className={inputStyles} placeholder="Enter Client Name" onChange={(e) => setMobileno(e.target.value)} />
          </div>
          <div>
            <label>E-mail: </label>
            <input className={inputStyles} placeholder="Enter Client Status" onChange={(e) => setEmail(e.target.value)} />
          </div>
         
         
        </div>
        <div className="mt-5 flex gap-5 items-center justify-content">
            <button  className="bg-green-500 px-3 py-2 rounded-md shadow-sm text-white" onClick={handleClick}>Save</button>
         
          </div>
      </div>
      </div>
  
  )
}

export default ClientModals