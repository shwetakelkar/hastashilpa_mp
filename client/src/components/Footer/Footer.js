import React from "react";
import "./Footer.css"

const Footer=()=>
(
    <footer className="bd-footer">
      <div className="container-fluid footer-container ">
        <div className = "row justify-content-center footer-content">
          <div className="col-sm-4 m-3 ml-md-3 mt-3 text-center card footer-card">
            Mission<hr/>
            <h6>To help artists living in different corners of the world by showcasing and selling their beautiful creations to rest of the world.</h6>
          </div>
          <div className="col-sm-4 m-3 ml-md-3 mt-3 text-center card footer-card">
            Vision<hr/>
            <h6>To become valuable platform for all the artist around the world</h6>
          </div>
        </div>
        <div className="row justify-content-center mt-3"><strong>Copyright @2020</strong></div>
      </div>
    </footer>

)
export default Footer