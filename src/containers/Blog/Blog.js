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
           this.setState({ post: response.data});
        });
    }
    render () {
        const post = this.state.post.map(post => {
            return <Post key={post.id} title={post.title} />
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