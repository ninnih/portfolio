import React, { useRef, useEffect, useState, createRef } from 'react';
import Fade from 'react-reveal/Fade';

import './AboutContent.scss';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import AboutTimeline from './AboutTimeline';
import AboutSkills from './AboutSkills';
import AboutArt from './AboutArt';


const AboutContent = ({ aboutInfo }) => {
  const ref = createRef();
  const [scroll, setScroll] = useState(true)

  useEffect(() => {
    const scrolledContent = document.getElementById('scroll');

    scrolledContent.addEventListener("scroll", () => {
      const scrollCheck = scrolledContent.scrollTop < 400
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck)
      }
    })
  })

  const handleScroll = () => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
    });
  });

  return (
    <section className="content" id="scroll">
      <section className="content__about">
        <span ref={ref}></span>
        <section className="content__about__image">
          <Fade left>
            <img 
            src={process.env.PUBLIC_URL + aboutInfo.image} 
            alt="" 
            className="content__about__image__img"/>
          </Fade>
        </section>
        <Fade right>
          <section className="content__about__wrapper">
            <article className="content__about__header">
              <h1>Hello, my name is Ninni Hagström</h1>
              <p>{aboutInfo.about}</p>
            </article>
            <article className="content__about__info">
              <article><h3>location:</h3><p>{aboutInfo.city}</p></article>
              <article><h3>skills:</h3><p> Webdevelopment, Illustration, Design</p></article>
              <article><h3>Languages:</h3><p>{aboutInfo.languages}</p></article>
              <article><h3>Interests:</h3><p>{aboutInfo.interests}</p></article>
              <article className="content__about__info--links">
                <h3>Links:</h3>
                <ul>
                  <li>
                    <a href={aboutInfo.github} className="information__header__links__link" target="_blank">
                      <GitHubIcon />
                    </a>
                  </li>
                  <li>
                    <a href={aboutInfo.linkedin} className="information__header__links__link" target="_blank">
                      <LinkedInIcon />
                    </a>
                  </li>
                </ul>
              </article>
            </article>
            <article className="information__navigation">
                <a href="#development"><button>Development</button></a>
                <a href="#design"><button>Design</button></a>
                <a href="#timeline"><button>Education</button></a>
                <a href="#illustration"><button>Illustration</button></a>
              </article>
          </section>
        </Fade>
      </section>
    <span id="development"></span>
    <AboutSkills aboutInfo={aboutInfo}/>
    <span id="timeline"></span>
    <AboutTimeline aboutInfo={aboutInfo}/>
    <span id="illustration"></span>
    <AboutArt />
    {!scroll ? 
      <article
        className="scroll"
        id="scrollbutton" 
        onClick={handleScroll}>
          <ArrowUpwardIcon/>
      </article> 
      : null
    }

    </section>
  );
}

export default AboutContent;
