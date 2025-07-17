import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

const Tabs = () => {
  return (
    <div className='block'>
      <div class="tabs is-toggle is-toggle-rounded has-background-transparent">
        <ul>
          <li class="is-active ">
            <a className="has-background-grey-darker inherit">
              <span class="icon is-small">
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> 
              </span>
               <span>General Info</span>
            </a>
          </li>
          <li>
            <a>
              <span class="icon is-small">

                <FontAwesomeIcon icon={faLightbulb}></FontAwesomeIcon> 
              </span>
              <span>Skills</span>
            </a>
          </li>
          <li>
            <a>
              <span class="icon is-small">
                <FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon> 
              </span>
              <span>Education</span>
            </a>
          </li>
          
        </ul>
      </div>
      
    </div>
  )
}

export default Tabs
   
