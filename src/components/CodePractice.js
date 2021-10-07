import React, { useState, useEffect } from 'react'

import axios from 'axios'

export default function CodePractice() {
  //setCounter is a function that let us update the count variable
  const [counter, setCounter] = useState(0)
  const [dataJSON, setDataJSON] = useState('')

  const fetchData = () => {
    return(
      axios.get('https://randomuser.me/api')
      .then(({data}) => {
        //handle success
        console.log(data);
        return JSON.stringify(data, null, 2);
      })
      .catch(err => {
        // handle error
        console.error(err);
      })
    )
  }

  useEffect(() => {
    fetchData().then(userData => {
      setDataJSON(userData || 'No user data found');
    })
   }, []);

  return (
    <>
      <p>{counter}</p>
      {/*When the user clicks, we call setCount with a new value*/}
      <button style={{padding:'10px', margin:'1rem'}} onClick={() => setCounter(counter+1)}>+</button>
      <button style={{padding:'10px', margin:'1rem'}} onClick={() => setCounter(counter-1)}>-</button>

      <br/>
      <br/>

      <pre>{dataJSON}</pre>

    </>
  )
}
