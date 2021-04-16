import React from 'react';
import { Link } from 'react-router-dom';

function ProjectCard(props) {
const { id, title, excerpt, imageUrl } = props.project;
// var sectionStyle = {
//   backgroundImage: `url(${imageUrl})`
// }; 
    return (
        <div className="cardbody">
          
            <div className="item">
            <div className="box box1" style={{backgroundImage: "url(" + imageUrl + ")"}}>
          {/* <img src={ imageUrl } className="box" alt="..." /> */}
        <div className="cover">
          <h5 className="name">{ title }</h5>
          {/* <p className="title">{ excerpt }</p> */}
          <img src={ excerpt } className="title" alt="..." />
          <Link to={`/project/${id}`} className="stretched-link"></Link>
        </div>                  
            </div>
          </div>
          </div>


        
     

    );

}

export default ProjectCard;
