import React from 'react';
import './Buttons.css';
import LinkedIn from '../Image/linkedin-logo.png';
import Github from '../Image/GitHub-logo.png';
import Gmail from '../Image/gmail-logo.png';
import Facebook from '../Image/facebook-logo.png';

export default function Buttons(props) {
  return (
    <section className="socials">
      <button type="button" className="social-buttons" onClick={(e) => {
        e.preventDefault();
        window.location.href='http://linkedin.com/in/princeton-arulnesan';
      }}>
        <img className="socials-pictures" src={LinkedIn} alt="LinkedIn">
        </img>
      </button>
      <button type="button" className="social-buttons" onClick={(e) => {
        e.preventDefault();
        window.location.href='https://github.com/princeton98';
      }}>
        <img className="socials-pictures" src={Github} alt="Github">
        </img>
        </button>
        <button type="button" className="social-buttons" onClick={(e) => {
        e.preventDefault();
        window.open('mailto:princeton.arul@gmail.com')
      }}>
        <img className="socials-pictures" src={Gmail} alt="Email">
        </img>
        </button>
        <button type="button" className="social-buttons" onClick={(e) => {
        e.preventDefault();
        window.location.href='https://www.facebook.com/prince.arul/';
      }}>
        <img className="socials-pictures" src={Facebook} alt="Facebook">
        </img>
        </button>
    </section>
  )
}