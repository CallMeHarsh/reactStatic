import React from "react";
import ProfileImage from "../assets/ProfileImage.jpg";

function Title() {
    return(
        <div className="container">
        <div className="row text-center align-items-center my-5 py-5">
            <div className="col-12 col-md-6">
                <img className="image-fluid rounded-circle w-75 h-75" src={ProfileImage} />
            </div>
            <div className="col-12 col-md-6">
                <div className="font-weight-light" style={{fontSize: "50px"}}>
                Hi, I am <span className="text-info">Harsh</span>
                </div>
                <h4 className="font-weight-light">I am a webdeveloper from India</h4>
            </div>
        </div>
        </div>
    );
}

export default Title;