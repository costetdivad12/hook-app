import React from 'react'
import useCounter from '../hooks/useCounter'

import '../components/Counter.css'
const CounterWhithCoustomHook = () => {

 const {State,increment,decrement,reset}=useCounter(20);


  return (
    <>
    <h1>Counter With hook {State}</h1>
    <hr />
    <button className='btn' onClick={()=>increment(2)}>+1</button>
    <button className='btn' onClick={()=>decrement(2)}>-1</button>
    <button className='btn' onClick={reset}>Reset</button>
    </>
  )
}

export default CounterWhithCoustomHook