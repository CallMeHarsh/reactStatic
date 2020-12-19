import React from 'react';
import { v4 } from 'uuid';

function Skill(props) {
    const { name,imageUrl,starsTotal,starsActive } = props.skill;
   
    const starsList = [];

    for (let i = 0; i < starsTotal; i++){
        if(i<starsActive){
            starsList.push(<span key={v4()} className="text-info">★</span>);
        }
        else {
            starsList.push(<span key={v4()}>★</span>);
        }
    }

    return (
        <div>
            <img className=""
            src={imageUrl}
            alt={name}
            style={{width: "75px", height: "75px"}}
             />
             <div className="text-center">
                 {starsList}
             </div>
            <div className="text-center">
                {/*<span class="text-info">★</span>
                <span class="text-info">★</span>
                <span class="text-info">★</span>*/}
            </div>
        </div>
    )
}

export default Skill;