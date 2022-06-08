import { useState } from "react"


const useCounter = (InicialState=10) => {
    
 const [State, setState] = useState(InicialState)

 const increment = (factor)=>{
     setState(State+factor);
 }
 const decrement = (factor)=>{
    setState(State-factor);
}

const reset = ()=>{
    setState(InicialState)
}

return {
    State,
    increment,
    decrement,
    reset
}
}

export default useCounter