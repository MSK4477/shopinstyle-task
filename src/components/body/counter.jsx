import React, { useState } from "react";

let Counter = () =>{
   

    const [counter, setCount] = useState(0)

   const increment = () =>{
        setCount(counter +1)
    }
    const decrement = () =>{
    setCount(counter -1)
    }
    const clear = () => {
        setCount(0)
    }
    return(         
<div>
        <h2>Count</h2>

        <h3>{counter}</h3>
        <button onClick={increment}>+</button> {"  "} <button onClick={decrement}>-</button>
        <button onClick={clear}>Clear</button>
        </div>

    )
}
export default Counter