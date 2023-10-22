import React, { useState } from 'react'

const Increase = () => {
 const [count,setcount] = useState(0);

  return (
    <>
    <p>{count}</p>

    <button onClick={() => setcount(count+1)}>
    Increase
    </button>


    <button onClick={()   =>  setcount(count-1)}>
    Decrease
    </button>

    <button onClick={()   =>  setcount(0)}>
    set to 0 
    </button>

    
    </>
  )
}

export default Increase