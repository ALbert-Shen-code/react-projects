import React from 'react'
import phoneImg from './images/phone.svg'
import {useGlobalContext} from "./context";
const Hero = () => {
  const {closeSubmneu} = useGlobalContext();
  return <section className="hero">
    <div className="hero-center">
      <article className="hero-info">
        <button className="btn"> Start Now</button>
      </article>
      <article className="hero-images">
        <img src={phoneImg} alt="phone" className="phone-img"/>
      </article>
    </div>
  </section>
}

export default Hero
