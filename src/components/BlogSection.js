import React from "react";
import BlogCard from "./BlogCard";
import { Consumer } from "../context";

function BlogSection() {
    return (
        <Consumer>
            {(value) => {
                const { blogs } = value;
                return(
                    <div className="container text-center my-5">
                        <h1 className="font-weight-light"><span className="text-info">My</span> Blogs</h1>
                        <div className="lead py-3">I write blogs related to some cool stuff</div>
                        <div className="row my-5 pt-3">
                                {
                                blogs.slice(0, 3).map((blog) =>
                                (
                                    <div key={blog.id} className="col-12 col-md-4 my-2">
                                        <BlogCard 
                                        blog = {blog}
                                    />
                                    </div>
                                )
                                )                    
                            }
            
                            
                                
                            </div>
                           
            
                        <div className="my-5">
                            <a href="#" className="text-dark text-right">
                                <h5>See my Blogs
                                    <i className="fa fa-arrow-right align-middle"></i>
                                </h5>
                            </a>
                        </div>
                    </div>
                );
            }}
        </Consumer>
    )

}

export default BlogSection;