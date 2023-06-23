import React, { useRef } from 'react'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import PersonalDetails from '../components/PersonalDetails'
import Skills from '../components/Skills'
import PersonalProjects from '../components/PersonalProjects'
import ContactMe from '../components/ContactMe'
import Footer from '../components/Footer'

function Home() {

  let about = useRef(null);
  let skills = useRef(null);
  let projects = useRef(null);
  let contact = useRef(null);


  const handleClick = (ref) => {
    switch (ref) {
      case 1:
        about.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 2:
        skills.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 3:
        projects.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 4:
        contact.current?.scrollIntoView({ behavior: 'smooth' });
        break;

      default: 0
        break;
    }
  };


  return (
    <div>
      <div>
        <Navbar handleClick={handleClick} />
        <HeroSection handleClick={handleClick}/>
        <PersonalDetails ref={about} />
        <Skills ref={skills}/>
        <PersonalProjects ref={projects}/>
        <ContactMe ref={contact}/>
        <Footer />
      </div>
    </div>
  )
}

export default Home
