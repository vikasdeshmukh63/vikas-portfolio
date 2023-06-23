import React from 'react'
import "../stylesheets/card.css"

function Card({text}) {
  return (
    <div className='card'>
        <h4 className='text-md'>{text}</h4>
    </div>
  )
}

export default Card
