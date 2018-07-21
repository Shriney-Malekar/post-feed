import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../../components/Post/Post';

import './Posts.css';

class Posts extends Component {
    state = {
        post: []
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
        this.props.history.push({pathname: '/' + id});
        //this.props.history.push('/' + id);
    }

    render () {
        let post = <p>Something Went Wrong!</p>;
        if(!this.state.errorFound) {
            post = this.state.post.map(post => {
                return (
                    <Post  
                        key={post.id}
                        title={post.title} 
                        author={post.author} 
                        clicked={() => this.selectedPostHandler(post.id)} />
                );
            });
        }
        
        return(
            <section className="Posts">
                {post}
            </section>
        );
    }
}

export default Posts;