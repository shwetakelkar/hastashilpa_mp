import React, { useState } from 'react';
import {Link} from "react-router-dom";
import './Navibar.css'
import {Dropdown , DropdownButton,Navbar} from "react-bootstrap"

const Navibar =(props)=>{

const [state , setState] = useState({
  search:''
})

 function handleSearch(e){
  e.preventDefault();
  setState({search:e.target.value})
}

return(
    <nav role="banner" className="navbar">
     
      <a className="menu" alt="menu" href="/#"><i className="fa fa-bars"></i></a>
      <img src="../images/logo4.png" alt="logo" className="logo"></img>
     
     
      <input type='text' placeholder="search" className=" form-control search" value={state.search} onChange={handleSearch}></input>
      <a className="btn searchBtn" href={`/search/${state.search}`}>Search</a>
      

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

      {/* <Link  to= "/aboutUs" className="nav-link list aboutUsBtn" >Aboutus</Link> */}
      <Link  to= "/" className="nav-link list">Home</Link>
      
    </nav>

)
}

export default Navibar