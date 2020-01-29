import React from "react";
import Jumbotron from "../../components/Jumbotron/Jumbotron";

const NoMatch = () => (
  <div className="container-fluid" >
    <div className="row">
      <div className="col-md-12">
        <Jumbotron>
          <h1>404 Page Not Found</h1>
          <h1>
            <span role="img" aria-label="Face With Rolling Eyes Emoji">
              🙄
            </span>
          </h1>
        </Jumbotron>
      </div>
    </div>
  </div>
);

export default NoMatch;
