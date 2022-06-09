import React, { useEffect, useState } from 'react'

const Message = () => {

  const [coor, setcoor] = useState({
    x:0,y:0
  })
  const {x,y} = coor
   
useEffect(() => {
  console.log('componente montado')

  const mouseMove = (e)=>{
    const coors={x:e.x,y:e.y}
    const {x,y}=coors;
    setcoor({x:x,y:y});
   
  }

  window.addEventListener('mousemove', mouseMove);
  
  return () => {
    console.log('componente desmontado')
    window.removeEventListener('mousemove',mouseMove);
  }
}, [])


  return (
    <div>
        <h3>Eres genial</h3>
        <p>x:{x} y:{y}</p>
    </div>
  )
}

export default Message