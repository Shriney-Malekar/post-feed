import React, { Component } from 'react';

import './Blog.css';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';

import axios from 'axios';

class Blog extends Component {
    state = {
        post: [],
        selectedPost: null,
        errorFound: false
    };
    componentDidMount() {
        axios.get('/posts')
        .then(response => {
            const fetchPost = response.data.slice(0, 4);
            const updatedPosts = fetchPost.map(post => {
                return {
                    ...post,
                    author: 'Shriney'
                }
            });
            this.setState({ post: updatedPosts});
        })
        .catch(error => {
            //console.log(error);
            this.setState({errorFound: true});
        });
    }

    selectedPostHandler = (id) => {
        this.setState({ selectedPost: id });
    }

    render () {
        let post = <p>Something Went Wrong!</p>;
        if(!this.state.errorFound) {
            post = this.state.post.map(post => {
                return <Post 
                key={post.id} 
                title={post.title} 
                author={post.author} 
                clicked={() => this.selectedPostHandler(post.id)} />
            });
        }
        
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