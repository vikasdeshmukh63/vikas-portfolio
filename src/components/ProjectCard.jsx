import React from 'react'
import "../stylesheets/projectcard.css"
import { Link } from 'react-router-dom'


function ProjectCard({ name, link,src }) {
    return (
        <div className='project-card'>
            <div className="container-card">
                <img src={src} alt="img" />
                <div className="overlay">
                    <Link to={link} target="_blank" rel="noopener noreferrer">{name}</Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
