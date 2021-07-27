import React from 'react';
import Photo from '../Image/profile.png'
import './Information.css'

export default function Information(props) {
  return (
    <section>
    <img className="headshot" src={Photo} alt="Profile Photo">
      </img>
      <section className="content">
      <h1>Princeton Arulnesan</h1>
      <h4>Junior Web Developer</h4>
      <div className="description">
        <p>
         Graduated from Lighthouse Labs Bootcamp with a diploma in Web Development.
      </p>
      <p>
      Specializing in front-end and back-end, with a focus on React.js.
      </p>
      <p>
      Enjoy gaming and hanging out with friends.
      </p>
      </div>
    </section>
    </section>
  )
}