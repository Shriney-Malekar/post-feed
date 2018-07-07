import React, { Component } from 'react';

import './Blog.css';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';

import axios from 'axios';

class Blog extends Component {
    state = {
        post: []
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
    render () {
        const post = this.state.post.map(post => {
            return <Post key={post.id} title={post.title} author={post.author} />
        });
        return (
            <div>
                <section className="Posts">
                    {post}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;