import React from "react";
import { Consumer } from "../context";
import ReactMarkdown from "react-markdown";

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
            <h1 className="font-weight-light text-center my-5">{title}</h1>
            <div className="justify-content-center">
              <img src={imageUrl} alt={title} className="w-50 projectpic" />
            </div>
            
            <ReactMarkdown source={body} />
            <h1><a href={link} target="_blank" className="font-weight-light text-info">Take a look!</a></h1>
          </div>
        );
      }}
    </Consumer>
  );
}

export default ProjectPage;
