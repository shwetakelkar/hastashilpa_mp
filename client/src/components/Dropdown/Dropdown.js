import React from 'react'


export const Dropdown =()=>(


<div className="dropdown ml-md-auto">
        <a className="btn dropdown-toggle list" href="#" id="navbarDropdown" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false" type="button" >Language
                  
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#/action1">English</a>
          <a className="dropdown-item" href="#/action2">Hindi</a>
          <a className="dropdown-item" href="#/action3">Spanish</a>
        </div>
      </div>
);