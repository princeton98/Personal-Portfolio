import React from 'react';
import './Buttons.css';
import LinkedIn from '../Image/linkedin-logo.png';
import Github from '../Image/GitHub-logo.png';
import Gmail from '../Image/gmail-logo.png';
import Facebook from '../Image/facebook-logo.png';

export default function Buttons(props) {
  return (
    <section className="socials">
      <button type="submit" onclick="location.href='www.linkedin.com/in/princeton-arulnesan';">
        <img src={LinkedIn} alt="LinkedIn">
        </img>
      </button>
      <button>
        <img src={Github} alt="Github">
        </img>
        </button>
      <button>
        <img src={Gmail} alt="Email">
        </img>
        </button>
      <button>
        <img src={Facebook} alt="Facebook">
        </img>
        </button>
    </section>
  )
}