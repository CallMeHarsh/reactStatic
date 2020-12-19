import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

export class Provider extends Component {
    handler = (action, newObject) => {
        switch(action) {
            case "ADD_PROJECT":
                this.setState({
                    projects: [newObject, ...this.state.projects],
                });
                break;

            case "ADD_BLOG":
                this.setState({
                    blogs: [newObject, ...this.state.blogs],
                });
                break;

            case "ADD_RECOMMENDATION":
                this.setState({
                    recommendations: [newObject, ...this.state.recommendations],
                });
                break;

        }
        
    };
    state = {
        handler: this.handler,
        projects: [
            {
                id:1,
                title: "Project 1",
                imageUrl: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                excerpt: "this project is about..",
                body: "Body 1",
            },
            {
                id:2,
                title: "Project 2",
                imageUrl: "https://images.pexels.com/photos/1037996/pexels-photo-1037996.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                excerpt: "this project is about..",
                body: "Body 2",
            },
            {
                id:3,
                title: "Project 3",
                imageUrl: "https://images.pexels.com/photos/3280211/pexels-photo-3280211.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                excerpt: "this project is about..",
                body: "Body 3",
            },
        ],

        blogs: [
            {
                id:1,
                title: "Blog 1",
                imageUrl: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                excerpt: "this Blog is about..",
            },
            {
                id:2,
                title: "Blog 2",
                imageUrl: "https://images.pexels.com/photos/1037996/pexels-photo-1037996.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                excerpt: "this Blog is about..",
            },
            {
                id:3,
                title: "Blog 3",
                imageUrl: "https://images.pexels.com/photos/3280211/pexels-photo-3280211.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                excerpt: "this Blog is about..",
            },
        ],

        recommendations: [
            {
                id: 1,
                name: "This is default recommendation",
                company: "There is an error",
                designation: "If you are seeing this",
                message: "Plese Check"
            },
        ],

        skills: [
            {
                id: 1,
                name: "HTML5",
                imageUrl: "https://www.w3.org/html/logo/downloads/HTML5_Logo_256.png",
                starsTotal: 3,
                starsActive: 3,
            },
            {
                id: 2,
                name: "CSS3",
                imageUrl: "data:image/png;base64,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",
                starsTotal: 3,
                starsActive: 3,
            },
            {
                id: 3,
                name: "Javascript",
                imageUrl: "https://cdn.iconscout.com/icon/free/png-256/javascript-2038874-1720087.png",
                starsTotal: 3,
                starsActive: 2,
            },
            {
                id: 4,
                name: "Bootstrap",
                imageUrl: "https://s28309.pcdn.co/wp-content/themes/321-web-marketing/assets/images/bootstrap-logo-256.png",
                starsTotal: 3,
                starsActive: 3,
            },
            {
                id: 5,
                name: "Jquery",
                imageUrl:"https://basicweb.ru/images/jquery2.png",
                starsTotal: 3,
                starsActive: 1,
            },
            {
                id: 6,
                name: "Jquery",
                imageUrl:"https://basicweb.ru/images/jquery2.png",
                starsTotal: 3,
                starsActive: 3,
            },{
                id: 7,
                name: "Jquery",
                imageUrl:"https://basicweb.ru/images/jquery2.png",
                starsTotal: 3,
                starsActive: 3,
            },{
                id: 8,
                name: "Jquery",
                imageUrl:"https://basicweb.ru/images/jquery2.png",
                starsTotal: 3,
                starsActive: 3,
            },
        ],

    
    };

    async componentDidMount() {

        const [responseRecommendations, responseSkills, responseProjects, responseBlogs] = await Promise.all([
            axios.get("http://127.0.0.1:9000/api/recommendations"),
            axios.get("http://127.0.0.1:9000/api/skills"),
            axios.get("http://127.0.0.1:9000/api/projects"),
            axios.get("http://127.0.0.1:9000/api/blogs"),
        ]);

        const newState = {};
        if (
            responseRecommendations.data.isSuccessful && 
            responseRecommendations.data.results.length !== 0
        ) {
            newState.recommendations = responseRecommendations.data.results;
        }


        if (
            responseSkills.data.isSuccessful && 
            responseSkills.data.results.length !== 0
        ) {
            newState.skills = responseSkills.data.results;
        }
        
        if (
            responseProjects.data.isSuccessful && 
            responseProjects.data.results.length !== 0
        ) {
            newState.projects = responseProjects.data.results;
        }
        
        if (
            responseBlogs.data.isSuccessful && 
            responseBlogs.data.results.length !== 0
        ) {
            newState.blogs = responseBlogs.data.results;
        }
        
        this.setState(newState);      
        // let response = await axios.get("http://127.0.0.1:9000/api/recommendations");
        // console.log(response)
        // if (response.data.isSuccessful && response.data.results.length != 0) {
        //     this.setState({
        //         recommendations: response.data.results,
        //     });
        // }


        // response = await axios.get("http://127.0.0.1:9000/api/projects");
        // console.log(response)
        // if (response.data.isSuccessful && response.data.results.length != 0) {
        //     this.setState({
        //         skills: response.data.results,
        //     });
        // }


        // response = await axios.get("http://127.0.0.1:9000/api/projects");
        // console.log(response)
        // if (response.data.isSuccessful && response.data.results.length != 0) {
        //     this.setState({
        //         projects: response.data.results,
        //     });
        // }

        // response = await axios.get("http://127.0.0.1:9000/api/blogs");
        // console.log(response)
        // if (response.data.isSuccessful && response.data.results.length != 0) {
        //     this.setState({
        //         blogs: response.data.results,
        //     });
        // }
        
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}
export const Consumer = Context.Consumer;