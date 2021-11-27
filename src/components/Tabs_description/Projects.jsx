import React from 'react';
import "./Projects.css";
import ProgressBar from 'react-bootstrap/ProgressBar';
import "bootstrap/dist/css/bootstrap.css"

export default function Projects(props) {
console.log(props.projectNames);
//console.log(props.projectNames[0]["Apocalypse-Twins"]);
  return (
    <div>
      <h1>Projects</h1>
      <h3 className="github-profile"> <a href="https://www.github.com/princeton98">github.com/princeton98 </a></h3>
      <div className="left-side">
        <section className="project">
        <h2>
          <a href="https://github.com/princeton98/Apocalypse-Twins">
          Apocalypse Twins
          </a>
        </h2>
        <p>
          Cooperative text-based adventure game. Done within a group of 3.
        </p>
        <div className="stacked-bar">
          <ProgressBar>
            <ProgressBar striped variant="success" now={Number(props.projectNames[0]["Apocalypse-Twins"]["JavaScript"])} key={1} />
            <ProgressBar variant="warning" now={Number(props.projectNames[0]["Apocalypse-Twins"]["CSS"])} key={2} />
            <ProgressBar striped variant="danger" now={Number(props.projectNames[0]["Apocalypse-Twins"]["HTML"])} key={3} />
            </ProgressBar>
            <div className="labels">
              <div className="javascript">
                <p>Javascript</p>
                <div className="label-color green"></div>
              </div>
              <div className="javascript">
                <p>Css</p>
                <div className="label-color yellow"></div>
              </div>
              <div className="javascript">
                <p>HTML</p>
                <div className="label-color red"></div>
              </div>
            </div>
        </div>
        </section>
        <section className="project">
        <h2>
          <a href="https://github.com/princeton98/scheduler">
          Interview Scheduler
          </a>
        </h2>
        <p>
          A React based site that arranges interviewers with interviewees
        </p>
        <div className="stacked-bar">
          <ProgressBar>
            <ProgressBar striped variant="success" now={Number(props.projectNames[0]["scheduler"]["JavaScript"])} key={1} />
            <ProgressBar variant="warning" now={Number(props.projectNames[0]["scheduler"]["CSS"])} key={2} />
            <ProgressBar striped variant="danger" now={Number(props.projectNames[0]["scheduler"]["HTML"])} key={3} />
          </ProgressBar>
          </div>
          <div className="labels">
              <div className="javascript">
                <p>Javascript</p>
                <div className="label-color green"></div>
              </div>
              <div className="javascript">
                <p>Css</p>
                <div className="label-color yellow"></div>
              </div>
              <div className="javascript">
                <p>HTML</p>
                <div className="label-color red"></div>
              </div>
            </div>
        </section>
        <section className="project">
        <h2>
          <a href="https://github.com/princeton98/tweeter">
          Tweeter
          </a>
        </h2>
        <p>
          A mini-twitter site. Done with Html, Css, Jquery
        </p>
        <div className="stacked-bar">
        <ProgressBar>
            <ProgressBar striped variant="success" now={Number(props.projectNames[0]["tweeter"]["JavaScript"])} key={1} />
            <ProgressBar variant="warning" now={Number(props.projectNames[0]["tweeter"]["CSS"])} key={2} />
            <ProgressBar striped variant="danger" now={Number(props.projectNames[0]["tweeter"]["HTML"])} key={3} />
          </ProgressBar>
          </div>
          <div className="labels">
              <div className="javascript">
                <p>Javascript</p>
                <div className="label-color green"></div>
              </div>
              <div className="javascript">
                <p>Css</p>
                <div className="label-color yellow"></div>
              </div>
              <div className="javascript">
                <p>HTML</p>
                <div className="label-color red"></div>
              </div>
            </div>
        </section>
        <section className="project">
        <h2>
          <a href="https://github.com/princeton98/midterm">
          Buy/Sell Listing Website
          </a>
        </h2>
        <p>
          Basic ecommerce webiste, inspired by Ebay
        </p>
        <div className="stacked-bar">
        <ProgressBar>
            <ProgressBar striped variant="success" now={Number(props.projectNames[0]["midterm"]["JavaScript"])} key={1} />
            <ProgressBar variant="warning" now={Number(props.projectNames[0]["midterm"]["CSS"])} key={2} />
            <ProgressBar striped variant="danger" now={Number(props.projectNames[0]["midterm"]["HTML"])} key={3} />
            <ProgressBar striped variant="info" now={Number(props.projectNames[0]["midterm"]["TSQL"])} key={3} />
          </ProgressBar>
          </div>
          <div className="labels">
              <div className="javascript">
                <p>Javascript</p>
                <div className="label-color green"></div>
              </div>
              <div className="javascript">
                <p>Css</p>
                <div className="label-color yellow"></div>
              </div>
              <div className="javascript">
                <p>HTML</p>
                <div className="label-color red"></div>
              </div>
              <div className="javascript">
                <p>PSQL</p>
                <div className="label-color cyan"></div>
              </div>
            </div>
        </section>
        <section className="project">
        <h2>
          <a href="https://github.com/princeton98/Jungle">
          Jungle
          </a>
        </h2>
        <p>
          A mini e-commerce application. Focused on adding new features to the site
        </p>
        <div className="stacked-bar">
        <ProgressBar>
            <ProgressBar striped variant="success" now={Number(props.projectNames[0]["Jungle"]["JavaScript"])} key={1} />
            <ProgressBar variant="warning" now={Number(props.projectNames[0]["Jungle"]["CSS"])} key={2} />
            <ProgressBar striped variant="danger" now={Number(props.projectNames[0]["Jungle"]["HTML"])} key={3} />
            <ProgressBar striped variant="violet" now={Number(props.projectNames[0]["Jungle"]["Ruby"])} key={3} />
          </ProgressBar>
          </div>
          <div className="labels">
              <div className="javascript">
                <p>Javascript</p>
                <div className="label-color green"></div>
              </div>
              <div className="javascript">
                <p>Css</p>
                <div className="label-color yellow"></div>
              </div>
              <div className="javascript">
                <p>HTML</p>
                <div className="label-color red"></div>
              </div>
              <div className="javascript">
                <p>Jungle</p>
                <div className="label-color blue"></div>
              </div>
            </div>
        </section>
      </div>
    </div>
  )
}