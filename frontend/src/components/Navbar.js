import React from "react"

function Navbar({search,setSearch}){

 return(

  <div className="navbar">

   <div className="logo">
    DevNote
   </div>

   <input
    className="search"
    placeholder="Search notes..."
    value={search}
    onChange={(e)=>setSearch(e.target.value)}
   />

  </div>

 )

}

export default Navbar