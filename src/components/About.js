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
              I am fluent in programming languages like Python, C++, C, Golang, JavaScript. I work on developing applications and websites using my skills and I keep learning new things in technology.
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
              <h5>Career Goals?</h5>
              <p className="text-justify">
                I want to associate myself with an organisation which will help to grow and learn as much as possible. At the same time I would like to contribute as much as I can to society through tech in a positive way :)
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default About;