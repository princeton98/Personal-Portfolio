import React from 'react';
import './Tabs.css'
import Home from './Tabs_description/Home';

export default function Tabs(props) {

  return (
    <div className="tabs">
      <button className="tabs-buttons" onClick={() => props.setTransition("Home")}>
        Home
      </button>
      <button className="tabs-buttons" onClick={() => props.setTransition("Skills")}>
        Skills
      </button>
      <button className="tabs-buttons">
        Experience
      </button>
      <button className="tabs-buttons">
        Projects
      </button>
      <button className="tabs-buttons">
        Education
      </button>
    </div>
  )
}