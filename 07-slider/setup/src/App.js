import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length-1;
    if(index < 0){
      setIndex(lastIndex)
    }
    if(index > lastIndex){
      setIndex(0);
    }
  }, [index,people]);

  useEffect(() => {
    let slider = setInterval(()=>{
      setIndex(index+1);
    },3000)
    return ()=>{
      clearInterval(slider);
    }
  }, [index])
  return <section className="section">
    <h2 className="title">
      <span>/</span> reviews
    </h2>
    <div className="section-center"> 
    {people.map((person,personIndex)=>{
      const {id, image,title,quote,name} = person;
      let position = "nextSlide"
      if(personIndex === index){
        position= "activeSlide";
      }
      if(personIndex === index-1 || index === 0 && personIndex== people.length-1){
        position = "lastSlide";
      }
      return(
        <article key={id} className={position}>
          <img src={image} className='person-img'></img>
          <h4>{name}</h4>
          <p className="title">{title}</p>
          <p className="text">{quote}</p>
          <FaQuoteRight className="icon"/>
        </article>
      )
      
    })}
    </div>

    <button className="prev" onClick={()=> setIndex(index-1)}><FiChevronLeft/></button>
    <button className="next" onClick={()=>setIndex(index+1)}><FiChevronRight/></button>
  </section>
}

export default App;
