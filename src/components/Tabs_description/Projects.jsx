import React, {useEffect, useState} from 'react';
import "./Projects.css";
import axios from "axios"
export default function Projects(props) {
  let projectNames = {"Apocalypse-Twins": "", "scheduler": "", "tweeter": "", "midterm": "", "Jungle": ""}
  let total = 0;
  let apLanguages = ""
  const [language, setLanguage] = useState("");
  useEffect(() => {
    async function fetchData() {
      for (let key in projectNames) {
      await axios.get(`https://api.github.com/repos/princeton98/${key}/languages`)
      .then(function (response) {
        setLanguage(response.data)
        projectNames[key] = language;
        //console.log(projectNames);
        for (let key2 in projectNames[key][0]) {
          total += projectNames[key][0][key2];
          projectNames[key][0]["total"] = total;
        }
        //console.log(projectNames[key][0]);
        for (let key2 in projectNames[key][0]) {
          projectNames[key][0][key2] = `${(100 * (projectNames[key][0][key2]/total)).toFixed(2)}%`;
        }
        console.log(projectNames[key][0]);
        total = 0;
      }
      
      )
      .catch(function (error) {
        console.log(error);
      })
    }
  }
  fetchData();
  //apLanguages = [projectNames["Apocalypse-Twins"][0]]["JavaScript"];
},[])
console.log(projectNames);
console.log(projectNames["Apocalypse-Twins"][0]);
  return (
    <div>
      <h1>Projects</h1>
      <h5>Subtext</h5>
      <h3 className="github-profile"> <a href="https://www.github.com/princeton98">github.com/princeton98 </a></h3>
      <div className="left-side">
        <section className="project">
        <h2>
          Apocalypse Twins
        </h2>
        <p>
          Cooperative text-based adventure game. Done within a group of 3.
        </p>
        <div>
          <p>Javascript</p>
          <div className="skills-container">
            <div className="skills-javascript">{projectNames["scheduler"]}
            </div>
          </div>
        </div>
        </section>
        <section className="project">
        <h2>
          Interview Scheduler
        </h2>
        <p>
          A React based site that arranges interviewers with interviewees
        </p>
        </section>
        <section className="project">
        <h2>
          Tweeter
        </h2>
        <p>
          A mini-twitter site. Done with Html, Css, Jquery
        </p>
        </section>
        <section className="project">
        <h2>
          Buy/Sell Listing Website
        </h2>
        <p>
          Basic ecommerce webiste, inspired by Ebay
        </p>
        </section>
        <section className="project">
        <h2>
          Jungle
        </h2>
        <p>
          A mini e-commerce application. Focused on adding new features to the site
        </p>
        </section>
      </div>
    </div>
  )
}