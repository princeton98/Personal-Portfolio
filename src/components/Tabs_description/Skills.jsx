import React from 'react';
import './Skills.css';
import JS from '../../Image/js.png'
import Ruby from '../../Image/ruby.png'
import Java from '../../Image/java.png'
import PostgreSQL from '../../Image/postgreSQL.png'
import HTML from '../../Image/html.png'
import CSS from '../../Image/css.png'
import react from '../../Image/react.png'
import Rails from '../../Image/rails.png'

export default function Skills(props) {
  return (
    <div>
      <h1>Skills</h1>
      <section className="text">
      <div className="left-side-skills">
      <div className="container-skills">
        <img className="skills-picture" src={JS} alt="JavaScript"></img>
          <div className="overlay">
            <div className="text-skills">JavaScript</div>
          </div>
          </div>
          <div className="container-skills">
        <img className="skills-picture" src={Ruby} alt="Ruby"></img>
          <div className="overlay">
            <div className="text-skills">Ruby</div>
          </div>
          </div>
          <div className="container-skills">
        <img className="skills-picture" src={Java} alt="Java"></img>
          <div className="overlay">
            <div className="text-skills">Java</div>
          </div>
          </div>
          <div className="container-skills">
        <img className="skills-picture" src={PostgreSQL} alt="postgreSQL"></img>
          <div className="overlay">
            <div className="text-skills">PostgreSQL</div>
          </div>
          </div>
      </div>
      <div className="right-side-skills">
        <div className="container-skills">
        <img className="skills-picture" src={HTML} alt="HTML"></img>
          <div className="overlay">
            <div className="text-skills">HTML</div>
          </div>
          </div>
        <div className="container-skills">
        <img className="skills-picture" src={CSS} alt="CSS"></img>
          <div className="overlay">
            <div className="text-skills">CSS</div>
          </div>
          </div>
          <div className="container-skills">
        <img className="skills-picture" src={react} alt="react"></img>
          <div className="overlay">
            <div className="text-skills">ReactJs</div>
          </div>
          </div>
          <div className="container-skills">
        <img className="skills-picture" src={Rails} alt="Rails"></img>
          <div className="overlay">
            <div className="text-skills">Rails</div>
          </div>
          </div>
      </div>
      </section>
    </div>
  )
}