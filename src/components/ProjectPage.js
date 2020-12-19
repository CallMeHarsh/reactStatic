import Axios from 'axios';
import React, { Component } from 'react'
import ReactMarkdown from "react-markdown";
import axios from "axios";


class ProjectPage extends Component {
    state = {
        imageUrl: "",
        title: "",
        body: "",
    };

    async componentDidMount() {
        const response = await Axios.get(
            `http://127.0.0.1:9000/api/project?id=${this.props.match.params.id}`
            );

            const isSuccessful = response.data.isSuccessful;

            if (isSuccessful) {
                this.setState({
                    imageUrl: response.data.result.imageUrl,
                    title: response.data.result.title,
                    body: response.data.result.body,
                });
            }
    }
    render() {
        const { imageUrl, title, body } = this.state;
        return (
            <div className="container py-5 my-5 markdown">
                <div className="justify-content-center">
                <img src={imageUrl} alt={title} className="img-fluid w-100" />
                </div>
                <h1 className="font-weight-light text-center my-5">
                {title}
                </h1>
                <ReactMarkdown source={body} />                    
                </div>
        );
    }


    
               
}

export default ProjectPage;