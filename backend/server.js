const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

let notes = []

// GET ALL NOTES
app.get("/notes",(req,res)=>{
 res.json(notes)
})

// CREATE NOTE
app.post("/notes",(req,res)=>{

 const newNote = {
  id: Date.now(),
  title: req.body.title,
  content: req.body.content
 }

 notes.unshift(newNote)

 res.json(newNote)
})

// UPDATE NOTE
app.put("/notes/:id",(req,res)=>{

 const id = parseInt(req.params.id)

 notes = notes.map(note =>
  note.id === id
   ? { ...note, title:req.body.title, content:req.body.content }
   : note
 )

 res.json({message:"updated"})
})

// DELETE NOTE
app.delete("/notes/:id",(req,res)=>{

 const id = parseInt(req.params.id)

 notes = notes.filter(n => n.id !== id)

 res.json({message:"deleted"})
})

app.listen(5000,()=>{
 console.log("Server running on port 5000")
})