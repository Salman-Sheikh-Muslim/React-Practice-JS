import React, { useState } from 'react'
import data from './data';
export default function Accordion() {

  const [selected, setSelected] = useState(null);
  return (
    <>
   <div className='accordion'> {data.map((obj, index) => 
   <div key={index}><button onClick={() => setSelected(obj.id)}><p>{obj.question}</p></button><p>{selected === obj.id ? obj.answer : null}</p></div>
   )}</div>
    </>
  
  )
}
