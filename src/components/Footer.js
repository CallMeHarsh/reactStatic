import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return(
<footer>
        <div className="container-fluid text-center" style={{backgroundColor:"black"}}>
            <div className="py-5">
                
                    <h2 className="text-light">Intrested in working with me?</h2>
                    <Link to="/contact">
                        <button className="btn btn-outline-light bt-lg">Let's Talk!</button>
                    </Link>
                
            </div>
            <div className="row">
                <div className="col-12 col-md-4 py-3">
                    <h5 className="text-info pb-3">More Links</h5>
                    <a href="/" className="text-light d-block">Blogs</a>
                    <a href="/" className="text-light d-block">Home</a>
                    <a href="/" className="text-light d-block">Projects</a>
                    <Link to="/contact" className="text-light d-block">Contact me</Link>
                    <Link to="/write-a-recommendation" className="text-light d-block">
                        Write a recommendation <i className="fa fa-heart text-light">

                        </i>
                    </Link>

                </div>
                <div className="col-12 col-md-4 text-light text-justify py-3">
                If you are intrested feel free to contact me and tell ma about your project, I would love to hear. I am a designer too! Also if you face any errors on site, please tell me! Good day ;)
                    <p></p><p></p>
                    <p class="text-info font-bold">Special Thanks to Gaurav for Creating that cool logo in navbar!!</p>
                    <p class="text-info font-italic">Want a cool logo for your web site?<br></br>Contact Gaurav: <span><u>+91 930064 40760</u></span></p>

                </div>
                <div className="col-12 col-md-4 py-3">
                    <h5 className="text-info pb-3">Social</h5>
                    <a href="https://www.linkedin.com/in/harsh-shukla-b20bb818a/"><i className="fa fa-linkedin fa-lg text-light d-block py-1"></i></a>
                    <a href="https://github.com/CallMeHarsh"><i className="fa fa-github fa-lg text-light d-block py-1"></i></a>
                    <a href="https://twitter.com/CallMe_Harsh"><i className="fa fa-twitter fa-lg text-light d-block py-1"></i></a>

                </div>


            </div>
                <div className="text-muted py-3">
                    <p>I do not have copy rights!</p>
                </div>

            
        </div>
    </footer>
    );
}

export default Footer;