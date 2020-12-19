import React from 'react';
import { Link } from 'react-router-dom';

function ProjectCard(props) {
const { id, title, excerpt, imageUrl } = props.project; 
    return (
        <div className="card shadow h-100">
        <img src={ imageUrl } className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{ title }</h5>
          <p>{ excerpt }</p>
          <Link to={`/project/${id}`} className="stretched-link"></Link>
        </div>
      </div>
    );

}

export default ProjectCard;
