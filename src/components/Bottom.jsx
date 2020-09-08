import React, {useState} from 'react';
import Tabs from './Tabs'
import Home from './Tabs_description/Home'
import Skills from './Tabs_description/Skills'
import Experience from './Tabs_description/Experience'
import Projects from './Tabs_description/Projects'
import Education from './Tabs_description/Education'

export default function Bottom(props) {
  const [transition, setTransition] = useState("Home")
  console.log(transition);
  return (
    <div>
      <Tabs transition={transition}
      setTransition={setTransition}></Tabs>
      {transition === "Home" && <Home></Home>}
      {transition === "Skills" && <Skills></Skills>}
      {transition === "Experience" && <Experience></Experience>}
      {transition === "Projects" && <Projects></Projects>}
      {transition === "Education" && <Education></Education>}
    </div>
  )
}