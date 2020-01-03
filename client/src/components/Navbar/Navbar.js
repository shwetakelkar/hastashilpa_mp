import React from 'react';
import {Link} from "react-router-dom";
import './Navbar.css'
import {Dropdown , DropdownButton} from "react-bootstrap"

const Navbar =(props)=>
(
    <nav className="navbar navbar-expand-lg">
      
      <a className="menu" alt="menu" href="/#"><i className="fa fa-bars"></i></a>
      <img src="../images/logo2.png" alt="logo" className="logo"></img>
     
     
      <input type='text' placeholder="search" className="search"></input>
      <button className="searchBtn">search</button>
      

      <DropdownButton id="dropdown-basic-button" title="Languges" className="ml-md-auto list">
        <Dropdown.Item href="#/action-1">English</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Hindi</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Spanish</Dropdown.Item>
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

      <Link  to= "/aboutUs" className="nav-link list" >Aboutus</Link>
      <Link  to= "/" className="nav-link list">Home</Link>
      
    </nav>

)

export default Navbar