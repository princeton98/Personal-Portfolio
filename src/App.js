import React, {useEffect} from 'react';
import Buttons from './components/Buttons'
import './App.css';
import Information from './components/Information'
import Bottom from './components/Bottom'
import axios from "axios";

function App() {
  let projectNames = [{"Apocalypse-Twins": "", "scheduler": "", "tweeter": "", "midterm": "", "Jungle": ""}]
  let total = 0;
  let apLanguages = ""
  useEffect(() => {
    async function fetchData() {
      for (let key in projectNames[0]) {
      await axios.get(`https://api.github.com/repos/princeton98/${key}/languages`)
      .then(function (response) {
        projectNames[0][key] = response.data;
        //console.log(projectNames);
        for (let key2 in projectNames[0][key]) {
          total += projectNames[0][key][key2];
          projectNames[0][key]["total"] = total;
        }
        //console.log(projectNames[key][0]);
        for (let key2 in projectNames[0][key]) {
          projectNames[0][key][key2] = `${(100 * (projectNames[0][key][key2]/total)).toFixed(2)}`;
        }
        console.log(projectNames[0][key]);
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
  return (
    <div className="App">
      <div className="Top">
      <Information></Information>
      <Buttons></Buttons>
      </div>
      <div className="Bottom">
      <Bottom projectNames={projectNames}></Bottom>
      </div>
    </div>
  );
}

export default App;
