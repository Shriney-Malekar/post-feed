import React, { Component } from 'react';

import './Blog.css';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';

import axios from 'axios';

class Blog extends Component {
    state = {
        post: [],
        selectedPost: null
    };
    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(response => {
            const fetchPost = response.data.slice(0, 4);
            const updatedPosts = fetchPost.map(post => {
                return {
                    ...post,
                    author: 'Shriney'
                }
            });
            this.setState({ post: updatedPosts});
        });
    }

    selectedPostHandler = (id) => {
        this.setState({ selectedPost: id });
    }

    render () {
        const post = this.state.post.map(post => {
            return <Post 
            key={post.id} 
            title={post.title} 
            author={post.author} 
            clicked={() => this.selectedPostHandler(post.id)} />
        });
        return (
            <div>
                <section className="Posts">
                    {post}
                </section>
                <section>
                    <FullPost id={this.state.selectedPost} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;