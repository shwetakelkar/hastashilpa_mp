import React, { useState } from 'react';
import {Link} from "react-router-dom";
import './Navibar.css'
import {Dropdown , DropdownButton} from "react-bootstrap"

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
            
        
      <img src="../images/logo4.png" alt="logo" className="logo"></img>
     
     
      <input type='text' placeholder="search" className=" form-control search" value={state.search} onChange={handleSearch}></input>
      <a className="btn searchBtn" href={`/search/${state.search}`}>Search</a>
      
      {props.currentUser ?
      (
        <>
      <DropdownButton id="dropdown-basic-button" title="English" className="ml-md-auto ml-sm-0 list">
        <Dropdown.Item href="#/action-2">Hindi</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Spanish</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Chinese</Dropdown.Item>
      </DropdownButton>
      

      <DropdownButton id="dropdown-basic-button" title={props.currentUser.name} className="list">
        <Dropdown.Item href="/orders">Your orders</Dropdown.Item>
       <hr/>
        <Dropdown.Item href="/logout">Log out</Dropdown.Item>
      </DropdownButton>

      <DropdownButton id="dropdown-basic-button" title="Seller"className="list">
          <Dropdown.Item href="/seller">Sell on HastaShilpa</Dropdown.Item>
          <Dropdown.Item href="/sellerOrders">Orders Received</Dropdown.Item>
          <Dropdown.Item href="/editItms">Edit Products</Dropdown.Item>
      </DropdownButton>
      </>)
      :(<Link to ="/signin" className=" ml-md-auto nav-link list">Log in</Link>)}

      {/* <Link  to= "/aboutUs" className="nav-link list aboutUsBtn" >Aboutus</Link> */}
      <Link  to= "/" className="nav-link list home">Home</Link>
      
    </nav>

)
}

export default Navibar