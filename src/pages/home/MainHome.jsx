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
      <Hero/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/> 
      <Education/>
      <Contact/>
    </div>
  )
}
