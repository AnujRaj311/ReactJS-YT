import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {

  return (
    <div className="card">
        <div className="top">
          <img className='logo' src={props.logo} alt="amazon logo" />
          <button className='btn'>Save <Bookmark size={12}/></button>
        </div>

        <div className="center">
          <h3>{props.company} <span>{props.posted}</span></h3>
          <h2>{props.position}</h2>
          <div className='tags'>
            <h4>{props.role}</h4>
            <h4>{props.level}</h4>
          </div>

        </div>
        <div className="border"></div>

        <div className="bottom">
          <div>
              <h3>{props.salary}</h3>
              <p>{props.location}</p>
          </div>
          <button>Apply Now</button>

        </div>

      </div>
  )
}

export default Card
