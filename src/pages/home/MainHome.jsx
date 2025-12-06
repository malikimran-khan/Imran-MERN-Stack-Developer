import React from 'react' 
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Experience from './Experience'
import Education from './Education'
import Contact from './Contact'
import Projects from './Projects'

export default function MainHome() {
  return (
    <div>
      <div id="Home"><Hero/></div>
      <div id="About"><About/></div>
      <div id="Skills"><Skills/></div>
      <div id="Experience"><Experience/></div>
      <div id="Projects"><Projects/></div> 
      <div id="Education"><Education/></div>
      <div id="Contact"><Contact/></div>
    </div>
  )
}
