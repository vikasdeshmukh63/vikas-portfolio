import React from 'react'
import "../stylesheets/personalprojects.css";
import ProjectCard from './ProjectCard';
import bus from "../assets/BUSAPP.png";
import analog from "../assets/analog.png";
import calender from "../assets/calender.png"
import mmtHome from "../assets/mmthome.png"
import mbaChaiwala from "../assets/mbachaiwala.png"
import netflix from "../assets/netflix.png"
import textUtils from "../assets/textutils.png"
import todo from "../assets/todo.png"
import calculator from "../assets/calculator.png"
import snake from "../assets/snake.png"
import tac from "../assets/tictac.png"
import drum from "../assets/drum.png"
import { Link } from 'react-router-dom'
import "../stylesheets/githubbutton.css"

const PersonalProjects=React.forwardRef((props, ref) =>  {
    return (
        <div id='projects' ref={ref}>
            <h1 className='text-3xl'>Personal Projects</h1>
            <p className='text-lg'>These are some of my selective projects. You can get a brief idea about my work.</p>

            <div className="project-slot">
                <ProjectCard name="Bus booking app" link="https://exquisite-donut-e684f2.netlify.app/" src={bus} />
                <ProjectCard name="Analog Clock" link="https://vikasdeshmukh63.github.io/Analog-Clock/" src={analog} />
                <ProjectCard name="Calender" link="https://vikasdeshmukh63.github.io/Dynamic-Calender/" src={calender} />
                <ProjectCard name="MMT Homepage" link="https://vikasdeshmukh63.github.io/MAKE-MY-TRIP-Clone/" src={mmtHome} />
                <ProjectCard name="MBA Chaiwala" link="https://jovial-marigold-657666.netlify.app/" src={mbaChaiwala} />
                <ProjectCard name="Netflix Clone" link="https://quiet-faloodeh-ddd8f8.netlify.app/" src={netflix} />
                <ProjectCard name="Text Utils" link="https://delicate-froyo-658962.netlify.app/" src={textUtils} />
                <ProjectCard name="Todo" link="https://lustrous-puffpuff-d8a23a.netlify.app/" src={todo} />
                <ProjectCard name="Calculator" link="https://vikasdeshmukh63.github.io/Calculator/" src={calculator} />
                <ProjectCard name="Snake game" link="https://vikasdeshmukh63.github.io/Snake-game/" src={snake} />
                <ProjectCard name="Tic Tac Toe" link="https://vikasdeshmukh63.github.io/TIc-Tac-Toe/" src={tac} />
                <ProjectCard name="Drum Kit" link="https://vikasdeshmukh63.github.io/drum-kit/" src={drum} />
            </div>
            <div className='buttoncontainer'>
                <Link className="text-lg githubButton" to="https://github.com/vikasdeshmukh63" target="_blank" rel="noopener noreferrer">Visit Github <i className="ri-github-fill"></i></Link>
            </div>
        </div>
    )
});

export default PersonalProjects
