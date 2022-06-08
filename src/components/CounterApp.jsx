import React, { useState } from 'react'
import './Counter.css'
const CounterApp = () => {
    
   const [State, setState] = useState({
       counter1:10,
       counter2:20
   })

   const {counter1,counter2}=State;

console.log(counter1,counter2);
  return (
    <>
    <div className='container'>
    <h1>CounterApp {counter1}</h1>
    <h1>CounterApp {counter2}</h1>
    <hr />
    <button className='btn btn-primary'
     onClick={()=> setState( {...State, counter1 : counter1+ 1} )}>
       +1
    </button>
    </div>
    </>
  )
}

export default CounterApp