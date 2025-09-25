import React from 'react'
import { useState } from 'react';

const App = () => {
  const [formData, setformData] = useState({id:date.now(), title:,description:, dueDate:, isCompleted:false});
  
  const [storedData, setStoredData] = useState([])


  const handleChange = (e) => {
    e.target = {title,description,dueDate}
    
    setStoredData({...storedData, name:[value] })
    
    
  }
  
  const handleSubmit = (e) => {
    
    e.preventdefault();
    
    setStoredData({
      title:"",
      description:"",
      dueDate:"",
    })
    
  }
  

  const handleDelete = (id) => {
      
    if(id!==formData.id){
      return formData;
    }

  }


  return (
    <div>

        <form action="">
          <input type="text" value={formData.title} onChange={handleChange} />
          <input type="text" value={formData.description} onChange={handleChange} />
          <input type="date" value={formData.dueDate} onChange={handleChange} />
          
          <button onSubmit={handleSubmit}>submit Task</button>
        </form>

    <div>
      <h2>form data</h2>

    </div>
    {
          storedData.map( (task) => (
              <div key={task.id}>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <p>{task.dueDate}</p>
                <button>status: { (task.isCompleted ? "Completed" : "pending" ) }</button> 
                <button onClick={handleDelete(task.id)}>Delete Task</button>
              </div>

          ))
    }

    </div>
  )
}

export default App
