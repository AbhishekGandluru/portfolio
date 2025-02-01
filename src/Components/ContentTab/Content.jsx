import React, {forwardRef} from 'react'
import './Content.css'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Education from './Education'
import ContactMe from './ContactMe'
import Experience from './Experience'
import Awards from './Awards'

const Content = forwardRef(({setActiveItem},ref) => {
  return (
    <div id='ContentTab' ref={ref}>
      <AboutMe setActiveItem={setActiveItem}/>
      <Skills/>
      <Experience/>
      <Education/>
      <Awards/>
      <ContactMe/>
    </div>
  )
});

export default Content