import React from "react";
import ProfileImage1 from "../assets/ProfileImage1.png";
import Typewriter from "typewriter-effect";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import RubberBand from 'react-reveal/RubberBand';




function Title() {
    return(
        <div className="container">
        <div className="row text-center align-items-center my-5 py-5">
            <Zoom left>
            <div className="col-12 col-md-6">
                <img className="image-fluid rounded-circle w-75 h-75" src={ProfileImage1} />
            </div>
            </Zoom>
            <div className="col-12 col-md-6">
                <RubberBand>
                <div className="font-weight-light text-light" style={{fontSize: "50px"}}>
                Hi, I am <span className="text-warning">Harsh</span>
                </div>
                </RubberBand>
                <h2 className="font-weight-light text-warning">
                I am a <span classname="text-warning">
                  <Typewriter
                    options={{
                        
                        strings: ['Engineer', 'Web Developer', 'Problem Solver', 'Designer'],
                        autoStart: true,
                        loop: true,
                    }}
                   
                />
                </span>
                </h2>

                <div className="col-12 py-3">
                    <a href="https://www.linkedin.com/in/harsh-shukla-b20bb818a/"><i className="fa fa-linkedin fa-3x text-light d-block py-1"></i></a>
                    <a href="https://github.com/CallMeHarsh"><i className="fa fa-github fa-3x text-light d-block py-1"></i></a>
                    <a href="https://twitter.com/CallMe_Harsh"><i className="fa fa-twitter fa-3x text-light d-block py-1"></i></a>

                </div>
            </div>

        </div>
        </div>
    );
}

export default Title;