import React, {useState} from 'react';
import Tabs from './Tabs'
import Home from './Tabs_description/Home'
import Skills from './Tabs_description/Skills'

export default function Bottom(props) {
  const [transition, setTransition] = useState("Home")
  console.log(transition);
  return (
    <div>
      <Tabs transition={transition}
      setTransition={setTransition}></Tabs>
      {transition === "Home" && <Home></Home>}
      {transition === "Skills" && <Skills></Skills>}
    </div>
  )
}