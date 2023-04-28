


const Search = ({searchItem, setSearchItem}) => {
    return(
        <>
        
        <div className="md:flex justify-end my-5 gap-2 items-center">
            <label className="text-lg ">Search: </label>
            <input onChange={(e) =>setSearchItem(e.target.value)} value={searchItem} className="p-2 w-60 border border-blue-500 rounded-full" type="text" />
        </div>
        </>
    )
}

export default Search; 