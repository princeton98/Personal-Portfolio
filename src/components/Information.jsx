import React from 'react';
import Photo from '../Image/profile.png'
import './Information.css'

export default function Information(props) {
  return (
    <section className="content">
      <img className="headshot" src={Photo} alt="Profile Photo">
      </img>
      <h2>Princeton Arulnesan</h2>
      <h4>Junior Web Developer</h4>
      <p className="description">
        Recent graduate from Lighthouse Labs Bootcamp, with a diploma in Web Development. Specializing in front-end development, with a focus on React.js. Enjoy gaming, hanging out with friends, and having a good time with others.
      </p>
    </section>
  )
}