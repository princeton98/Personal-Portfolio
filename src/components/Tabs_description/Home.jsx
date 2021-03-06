import React from 'react';
import './Home.css';
export default function Home(props) {
  return (
    <div>
      <h1>About me</h1>
      <h5>Subtext</h5>
        <h3 className="text-description">Newly trained web developer</h3>
      <section className="text">
      <div className="left-side">
        <p>
          Began a direction towards Psychology, but decided to instead pursue coding and web development through a 12-week intensive bootcamp designed by Lighthouse Labs. Learned useful tech and techniques such as React and Node.js that are vital towards the web development job.
        </p>
      </div>
      <div className="right-side">
        <p>
          Outside of coding, I have had experiences with team settings through sports, such as volleyball, and through my highschool band. I understand the importance of practice and working as a team through these activites, which gives me an edge of understanding team dynamics and roles.
        </p>
      </div>
      </section>
    </div>
  )
}