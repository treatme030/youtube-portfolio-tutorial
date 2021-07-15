import React from 'react';
import allBlogs from '../Components/allBlogs';
import Title from '../Components/Title';

const BlogsPage = () => {
    return (
        <div className="BlogsPage">
            <Title title={'Recent Blogs'} span={'Recent Blogs'}/>
            <div className="bolgs-container">
                {
                    allBlogs.map(blog => {
                        return <div key={blog.id} className="blog">
                                    <div className="blog-content">
                                        <img src={blog.image} alt="" />
                                        <a href={blog.link} className="blog-link">
                                            {blog.title}
                                        </a>
                                    </div>
                                </div>
                    })
                }
            </div>
        </div>
    );
};

export default BlogsPage;