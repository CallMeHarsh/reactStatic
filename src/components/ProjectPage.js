import React from "react";
import { Consumer } from "../context";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import Slide from 'react-reveal/Slide';


function ProjectPage(props) {
  return (
    <Consumer>
      {(value) => {
        const { projects } = value;
        const id = props.match.params.id;
        const project = projects.filter((project) => project.id == id)[0];
        const { imageUrl, title, body, link } = project;
        return (
          <div className="container py-5 my-5 markdown ">
            <Slide left>
                <Link to="https://callmeharsh.github.io/reactStatic/">
                        <button className="btn btn-outline-warning bt-lg btn-block">
                        <i class="fa fa-arrow-circle-left fa-lg" aria-hidden="true"></i>  Go to Portfolio</button>
                    </Link></Slide>
            <h1 className="font-weight-light text-center my-5 text-warning">{title}</h1>
            <div className="justify-content-center">
              <img src={imageUrl} alt={title} className="w-25 projectpic" />
            </div>
            <p className="text-light">{body}</p>
            <h1><a href={link} target="_blank" className="font-weight-light text-info">See Detailed Repo/Website</a></h1>
          </div>
        );
      }}
    </Consumer>
  );
}

export default ProjectPage;
