import React from "react";

function About() {
    return(
        <div className="bg-light my-5">
        <div className="container text-center py-5">
          <h1 className="text-center font-weight-light">
            <span className="text-info">About</span> me
          </h1>
          <div className="lead">I can develop websites and web apps</div>
          <div className="row">
            <div className="col-12 col-md-6 px-5 pt-5">
              <h5>What I can do?</h5>
              <p className="text-justify">
              I can make websites and web apps using a variety web technologies,I can Design proffesional looking websites and vector art using figma.
              </p>
            </div>
            <div className="col-12 col-md-6 px-5 pt-5">
              <h5>What am I doing currently?</h5>
              <p className="text-justify">
              Currently, I am doing BTech(ECE) at Thapar University.  Besides that, I work on projects related to electronics, design and the web regularly. 
              </p>
            </div>
            <div className="col-12 col-md-6 px-5 pt-5">
              <h5>What do I believe in?</h5>
              <p className="text-justify">
              I believe that a lot of things can make life better and worse at the same time, ultimately cancelling both the states and leaving us neutral.
              </p>
            </div>
            <div className="col-12 col-md-6 px-5 pt-5">
              <h5>How I can help you?</h5>
              <p className="text-justify">
                I can hep you make websites and web apps using a variety web technologies,I can manage site functionality and implement application features.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default About;