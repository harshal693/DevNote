import React from "react"

function Sidebar({notes,active,selectNote,createNote,deleteNote}){

 return(

  <div className="sidebar">

   <button className="new-btn" onClick={createNote}>
    + New Note
   </button>

   <div className="notes">

    {notes.map(note =>(

     <div
      key={note.id}
      className={`note-card ${active && active.id===note.id ? "active":""}`}
      onClick={()=>selectNote(note)}
     >

       <h4>{note.title}</h4>

       <p>{note.content.substring(0,50)}</p>

       <button
        className="delete"
        onClick={(e)=>{
         e.stopPropagation()
         deleteNote(note.id)
        }}
       >
        Delete
       </button>

     </div>

    ))}

   </div>

  </div>

 )

}

export default Sidebar