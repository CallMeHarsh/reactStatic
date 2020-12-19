import React from 'react';
import RecommendationCard from './RecommendationCard';
import {v4} from 'uuid';
import { Consumer } from '../context';

function RecommendationSection() {
    return (
        <Consumer>
            {(value) => {
                const { recommendations } = value;
                return (
                    <div className="container-fluid my-5">
                    <div className="row text-center py-5 d-flex flex-nowrap overflow-auto scroll">
                        { recommendations.map((recommendation) => (
                            <RecommendationCard key={v4()} recommendation={recommendation} />
                        )) }
                    </div>
                    </div>
                        /*<div className="col-12 col-md-4">
                            <div className="card shadow h-100">
                                <div className="card-body">
                                    <h4 className="card-text">
                                        He is a good developer
                                    </h4>
                                    <p className="card-text text-secondary mb-0">Random guy 1</p>
                                    <p className="card-text text-secondary">CEO at ABC company</p>  
                                </div>
                            </div>
                </div></div>*/
                )
            }}
        </Consumer>
    )

    
}

export default RecommendationSection;