import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios";


const App = () => {

  const [notes, setnotes] = useState([]);
  function fetchNotes() {
    axios.get('http://localhost:3000/api/notes')
      .then((res) => {
        setnotes(res.data.notes);
        
        
      })

  }
  useEffect(() => {
    fetchNotes();

  }, [])

  function submitHandler(e){
    e.preventDefault();

    const title = e.target.title.value; 
    const desc = e.target.desc.value ;

    console.log(title,desc)
    // here we are calling the api to create the notes
    axios.post('http://localhost:3000/api/notes',{
      title : title ,
      desc:desc
    }).then((res)=>{
      console.log(res.data)
      fetchNotes();
       // Clear input fields
    e.target.reset();
    })

}

function submitDelete(id){
  console.log(id);
  axios.delete('http://localhost:3000/api/notes/' + id)
  .then((res)=>{
      console.log(res.data.message)
      fetchNotes();
  })

}
function submitUpdate(id){
  console.log(id)
  const newDesc = prompt("Enter new desc");

  axios.patch('http://localhost:3000/api/notes/' + id,{
    desc : newDesc
  }).then((res)=>{
      console.log(res.data.message)
      fetchNotes();
  })
}

  return (
    <div>
      <form className='note-create-form' onSubmit={submitHandler}>
        <input name='title' type='text' placeholder='Enter Title'/>
        <input name='desc' type="text" placeholder='Enter Description'/>
        <button >Create Notes</button>
      </form>
      <div className="notes">
        {notes.map((note, index) => {
          return <div className="note" key={index}>
            <h3>{note.title}</h3>
            <h5>{note.desc}</h5>
            <div className="btns">
              <button onClick={()=>{submitDelete(note._id)}}>Delete</button>
              <button onClick={()=>{submitUpdate(note._id)}}>Update</button>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default App
