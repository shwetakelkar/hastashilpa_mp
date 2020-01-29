import React, { useState } from 'react';
import {Link} from "react-router-dom";
import './Navibar.css'
import {Dropdown , DropdownButton} from "react-bootstrap";

const Navibar =(props)=>{

const [state , setState] = useState({
  search:''
})

function handleSearch(e){
  e.preventDefault();
  setState({search:e.target.value})
}

function Capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}

return(
    <nav role="banner" className="navbar"> 
      <a href="/"><img src="../images/logo4.png" 
        alt="logo" 
        className="logo"></img></a>
       <input type='text' 
        placeholder="search" 
        className="form-control search" 
        value={state.search} 
        onChange={handleSearch}></input>
      <a className="btn searchBtn" 
        href={`/search/${state.search}`}><span className="fa fa-search form-control-feedback"></span></a>
     
      {props.currentUser ?
      (
        <>
      <DropdownButton id="dropdown-basic-button" title="English" className="ml-md-auto list">
        <Dropdown.Item href="#/action-2">Hindi</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Spanish</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Chinese</Dropdown.Item>
      </DropdownButton>  

      <DropdownButton id="dropdown-basic-button" title={Capitalize(props.currentUser.name)} className="list">
        <Dropdown.Item href="/" className="home_mob">Home</Dropdown.Item>
        <Dropdown.Item href="/orders">Your orders</Dropdown.Item>
        <Dropdown.Item href="/settings">Settings</Dropdown.Item>
       <hr/>
        <Dropdown.Item href="/logout">Log out</Dropdown.Item>
      </DropdownButton>

      <DropdownButton id="dropdown-basic-button" title="Seller"className="mr-md-5 pr-md-5 list">
          <Dropdown.Item href="/seller">Sell on HastaShilpa</Dropdown.Item>
          <Dropdown.Item href="/sellerOrders">Orders Received</Dropdown.Item>
          <Dropdown.Item href="/editItms">Edit Products</Dropdown.Item>
      </DropdownButton>
      </>)
      :(<Link to ="/signin" className="ml-md-auto nav-link list mr-md-5">Log in</Link>)}

      {/* <Link  to= "/aboutUs" className="nav-link list aboutUsBtn" >Aboutus</Link> */}
       {/* <Link  to= "/" className="nav-link list home">Home</Link> */}
       <div className="col-sm-12 category">
         <a href="/categories/Jewelry & Accessories" className="btn col-2 cat-btn">Jewelry & Accessories</a>
         <a href="/categories/Home Decore" className="btn col-2 cat-btn">Home Decore</a>
         <a href="/categories/Clothing" className="btn col-2 cat-btn">Clothing</a>
         <a href="/categories/Fabrics" className="btn col-2 cat-btn">Fabrics</a>
         <a href="/categories/Kitchen" className="btn col-2 cat-btn">Kitchen</a>
         <a href="/categories/Stationary" className="btn col-2 cat-btn">Stationary</a>
       </div>
  </nav>
  
  
  
)
}

export default Navibar