import React from "react";
import ProfileImage2 from "../assets/ProfileImage2.jpg";

function Title() {
    return(
        <div className="container">
        <div className="row text-center align-items-center my-5 py-5">
            <div className="col-12 col-md-6">
                <img className="image-fluid rounded-circle w-75 h-75" src={ProfileImage2} />
            </div>
            <div className="col-12 col-md-6">
                <div className="font-weight-light" style={{fontSize: "50px"}}>
                Hi, I am <span className="text-info">Harsh</span>
                </div>
                <h4 className="font-weight-light">I am a webdeveloper and a curious primate</h4>
            </div>
        </div>
        </div>
    );
}

export default Title;