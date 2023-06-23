import React from 'react'
import "../stylesheets/skills.css"
import Card from './Card'

const Skills = React.forwardRef((props, ref) =>  {
  return (
    <div id='skills' ref={ref}>
      <h1 className='text-3xl'>Skills</h1>
      <p className='text-lg'>My mix of tools, including the most up-to-date UX/UI Software and as well as the tried-and-true pen and paper</p>
      <div className="card-container">
        <Card text="html 5"/>
        <Card text="css 3"/>
        <Card text="javascript es6"/>
        <Card text="sass"/>
        <Card text="react"/>
        <Card text="tailwind css"/>
        <Card text="jquery"/>
        <Card text="nodejs"/>
        <Card text="express js"/>
        <Card text="ejs"/>
        <Card text="rest api"/>
        <Card text="sql"/>
        <Card text="npm"/>
        <Card text="monogdb"/>
        <Card text="mongoose"/>
        <Card text="web 3"/>
        <Card text="firebase"/>
        <Card text="authentication"/>
      </div>
    </div>
  )
});

export default Skills
