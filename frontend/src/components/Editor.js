import React,{useState,useEffect} from "react"

function Editor({note,updateNote}){

 const [title,setTitle] = useState("")
 const [content,setContent] = useState("")
 const [saved,setSaved] = useState(true)

 useEffect(()=>{

  if(note){
   setTitle(note.title)
   setContent(note.content)
   setSaved(true)
  }

 },[note])

 if(!note){

  return(
   <div className="editor empty">
    Create or select a note
   </div>
  )

 }

 const save = ()=>{

  updateNote({
   ...note,
   title,
   content
  })

  setSaved(true)

 }

 return(

  <div className="editor">

   <input
    className="title"
    value={title}
    onChange={(e)=>{
     setTitle(e.target.value)
     setSaved(false)
    }}
   />

   <textarea
    value={content}
    onChange={(e)=>{
     setContent(e.target.value)
     setSaved(false)
    }}
   />

   <div className="editor-footer">

    <button className="save-btn" onClick={save}>
     Save Note
    </button>

    <span className="status">
     {saved ? "Saved" : "Unsaved changes"}
    </span>

   </div>

  </div>

 )

}

export default Editor