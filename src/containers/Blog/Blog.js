import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import './Blog.css';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

import Posts from './Posts/Posts';

class Blog extends Component {
    render () {
        
        return (
            <div className="Blog">
                <header>
                    <ul>
                        <li>
                            <NavLink to="/" exact>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/new-post">New Post</NavLink>
                        </li>
                    </ul>
                </header>
                <Route path="/" exact component={Posts} />
                <Switch>
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/:id" component={FullPost} />
                </Switch>
                {/* <section>
                    <FullPost id={this.state.selectedPost} />
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;