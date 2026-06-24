import React from 'react'
import { useState } from 'react'
import axios from "axios";


const App = () => {

  const [notes , setnotes] = useState([
    {
  title:"test title",
  desc : "test desc"
  },
   {
  title:"test title",
  desc : "test desc"
  },
   {
  title:"test title",
  desc : "test desc"
  },
   {
  title:"test title",
  desc : "test desc"
  },
   {
  title:"test title",
  desc : "test desc"
  },
   {
  title:"test title",
  desc : "test desc"
  }
])

axios.get('http://localhost:3000/api/notes')
.then((res)=>{
  setnotes(res.data.notes)
  // console.log(res.data.notes);
})
  return (
    <div>
    <div className="notes">
      {notes.map((note,index)=>{
        return <div className="note" key={index}>
        <h3>{note.title}</h3>
        <h5>{note.desc}</h5>
      </div>
      })}
      </div> 
    </div>
  )
}

export default App
