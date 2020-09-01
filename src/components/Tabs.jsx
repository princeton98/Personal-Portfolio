import React from 'react';
import './Tabs.css'

export default function Tabs(props) {
  return (
    <div className="tabs">
      <button className="tabs-buttons">
        Home
      </button>
      <button className="tabs-buttons">
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