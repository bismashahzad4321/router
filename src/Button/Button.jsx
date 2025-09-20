import React, { useState } from 'react'

const Button = () => {
  const [data, setData] = useState("")
  const [array, setArray] = useState([])
  const [message, setMessage] = useState("")
  const addBtn = () => {
    setArray([...array, data])
    setMessage("Your Task Has Been Added")
    setData("")
  }
  const editTask = () => {

  }  
  const reset=()=>{
    setArray([])
    setMessage("All Task ")
  }
  return (
    <div>
      <input type="text" placeholder=' Enter Your Name'
        value={data} onChange={(e) => setData(e.target.value)} />
      <button onClick={addBtn}>Add Task</button>
      {
        array.map((item, index) => (
          <div key={index}>
            {item}
          </div>
        ))
      }
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Button