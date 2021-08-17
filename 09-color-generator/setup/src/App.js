import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('');
  const [error, seterror] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(10));

  const handleSubmit = (e)=>{
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      seterror(true);
      console.log(error);
    }
    
  }
  return (
    <>
    <section className="container">
      <h4>Color generator</h4>
      <form onSubmit={handleSubmit}>
          <input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder="#15025" 
          className={`${error ? 'error' : null}`}/>
        <button className="btn" type="submit">
          Change color
        </button>
      </form>
    </section>
    <section className="colors">
        {list.map((color,index)=>{
          const hex = color.hex;
          return (
            <SingleColor key={index} {...color} index={index} hexColor={hex}/>
          )
          
        })}
      </section>
    </>
    
  )
}

export default App
