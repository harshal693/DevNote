import React,{useState,useEffect} from "react"
import axios from "axios"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import Navbar from "./components/Navbar"
import "./App.css"

function App(){

 const [notes,setNotes] = useState([])
 const [active,setActive] = useState(null)
 const [search,setSearch] = useState("")

 const fetchNotes = async()=>{

  const res = await axios.get("http://localhost:5000/notes")
  setNotes(res.data)

 }

 useEffect(()=>{
  fetchNotes()
 },[])

 const createNote = async()=>{

  const res = await axios.post("http://localhost:5000/notes",{
   title:"Untitled",
   content:""
  })

  fetchNotes()
  setActive(res.data)

 }

 const deleteNote = async(id)=>{

  await axios.delete(`http://localhost:5000/notes/${id}`)
  fetchNotes()
  setActive(null)

 }

 const updateNote = async(note)=>{

  await axios.put(`http://localhost:5000/notes/${note.id}`,note)

  fetchNotes()

 }

 const filtered = notes.filter(n =>
  n.title.toLowerCase().includes(search.toLowerCase())
 )

 return(

  <div className="app">

   <Navbar search={search} setSearch={setSearch}/>

   <div className="main">

    <Sidebar
     notes={filtered}
     active={active}
     selectNote={setActive}
     createNote={createNote}
     deleteNote={deleteNote}
    />

    <Editor
     note={active}
     updateNote={updateNote}
    />

   </div>

  </div>

 )
}

export default App