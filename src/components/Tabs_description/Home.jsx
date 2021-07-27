import React from 'react';
import './Home.css';
export default function Home(props) {
  return (
    <div>
      <h1>About me</h1>
      <h5>Subtext</h5>
        <h3 className="home-text-description">Newly trained web developer</h3>
      <section className="text">
      <div className="left-side">
        <p>
          Began a direction towards Psychology, but decided to instead pursue coding and web development through a 12-week intensive bootcamp designed by Lighthouse Labs. Learned useful tech and techniques such as React and Node.js that are vital towards the web development job.
        </p>
        <h3>
          Personal Details
        </h3>
        <p>
          Overall an optimistic and enjoyable person to hang out with! My favourite hobby other than coding is playing video games with friends and hanging out with them outside. Mostly an introverted person, but enjoy the company of others, and have pretty good social skills to start off a conversation with a stranger. I am a person that likes seeing progression and improvement constantly in anything that I do, so I do a lot of self reflection to become a better person than the day prior. Never be shy to come up to me and talk, I will always enjoy communicating with others!
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