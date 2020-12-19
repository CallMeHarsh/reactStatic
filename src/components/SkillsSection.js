import React from 'react';
import Skill from './Skill';
import {v4} from 'uuid';
import { Consumer } from '../context';

function SkillsSection() {
    return(
        <Consumer>
            {(value) => {
                        const { skills } = value;
                        const finalSkillRow = [];
                        for(let i=0;i<skills.length/4;i++){
                            let skillRow=skills.slice(i*4,(i+1)*4);
                            console.log(skillRow);
                            finalSkillRow.push(
                                <div key={v4()} className="d-flex justify-content-around py-3 ">
                                    {
                                        skillRow.map((skill) => (
                                            <Skill key={v4()} skill={skill} />
                                        ))
                                    }
                                
                                </div>
                            );
                           
                        }
                return (
                    <div className="bg-light w-100">
                    <div className="container text-center py-5">
                    <h1 className="font-weight-light"><span className="text-info">Technology</span> Stack</h1>
                    <div className="lead py-3">I design, develop and deliver with these weapons</div>
                </div>
                {finalSkillRow}
                
                </div>
                );
            }}
        </Consumer>
    );




}

export default SkillsSection;