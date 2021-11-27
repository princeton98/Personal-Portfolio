import React from 'react';

export default function Experience(props) {
  return (
    <div>
      <h1>Experience</h1>
      <div className="left-side">
        <div className="restaurant-jobs">
        <h3>Resturant Jobs</h3>
        <p>
            Part time jobs at Earls and Panera bread. Experienced working under pressure and working cohesively as a team.
        </p>
        </div>
        <div className="tech-jobs">
          <h3>Technology Jobs</h3>
          <p>
            Technology Manager and Full-Stack Web Developer at Tasttlig Corporation. Worked on the front-end and the back-end of the multiple web and mobile applications that were being developed: tasttlig.com, kodidi.com. </p>

            <p className="bottom-paragraph">
            Managed a team of five, done multiple pull requests and features, and worked on the QA for the website. Collaborated with multiple developers and designers to release the product in the set timeline.
            Worked in a fast paced, quick changing enviornment.
          </p>
        </div>
      </div>
      {/* <div className="right-side">
        <p>
          hello sir
        </p>
      </div> */}
    </div>
  )
}