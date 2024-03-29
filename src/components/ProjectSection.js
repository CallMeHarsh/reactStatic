import React from "react";
import ProjectCard from "./ProjectCard";
import { Consumer } from "../context";
import { Link } from "react-router-dom";
function ProjectSection() {

    return(
        <Consumer>
        {(value) => {
            const {projects} = value;
    return(
        <div className="pb">
        <div className="container text-center my-0 py-5" id="project">
                    <h1 className="font-weight-light text-light"><span className="text-warning">My</span> Projects</h1>
                    <div className="lead py-3 text-light">I build products, just like this website</div>
                    <div className="row my-5 pt-3">
                            {
                            projects.slice(0, 6).map((project) =>
                            (
                                <div key={project.id} className="col-12 col-md-4 my-2">
                                    <ProjectCard 
                                    project = {project}
                                />
                                </div>
                            )
                            )                    
                        }
        
                        
                            
                        </div>
                       
        
                    <div className="my-5">
                        <Link to="/all-projects" className="text-dark text-right">
                            <h5>
                                {/* <i className="fa fa-arrow-right align-middle"></i> */}
                            </h5>
                        </Link>
                    </div>
                </div>
                </div>
            );
        }  }
    </Consumer>
    )

   

}

export default ProjectSection;