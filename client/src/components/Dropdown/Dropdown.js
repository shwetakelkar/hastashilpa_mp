import React from 'react'
import {Dropdown , DropdownButton,Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";


const DropDown =(props)=>(

  <>

      <DropdownButton id="dropdown-basic-button" title="English" className="ml-md-auto list">
          <Dropdown.Item href="#/action-2">Hindi</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Spanish</Dropdown.Item>
          <Dropdown.Item href="#/action-1">Chinese</Dropdown.Item>
        </DropdownButton>
        {props.currentUser ?
        (

        <DropdownButton id="dropdown-basic-button" title={props.currentUser.name} className="list">
          <Dropdown.Item href="/orders">Your orders</Dropdown.Item>
          <DropdownButton id="dropdown-basic-button" title="As Seller"className="list ml-3">
            <Dropdown.Item href="/seller">Sell on HastaShilpa</Dropdown.Item>
            <Dropdown.Item href="/sellerOrders">Orders Received</Dropdown.Item>
          </DropdownButton><hr/>
          <Dropdown.Item href="/logout">Log out</Dropdown.Item>
        </DropdownButton>)
        :(<Link to ="/signin" className="nav-link list">Log in</Link>)}
      </>
);

export default DropDown;