import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class PostsIndex extends Component {

  // lifecycle method: a function on a React class that is automatically called by React
  // componentDidMount() will be called immediately AFTER this component is rendered in the DOM
  // automatically called one time
    // perfect place to fetch data
      // async operations
  // componentWillMount() is called immediately BEFORE this component is rendered

  componentDidMount(){
    this.props.fetchPosts();
  }

  renderPosts(){
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>{post.title}</li>
      );
    });
  }

  // Link tag has Listeners that prevent the default behavior from the browser
    // to issue a HTTP request to fetch a document from a server
    // React Router prevents this by using the Link tag

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">Add a Post</Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

// we use this function whenever we want to consume from application level state we use this function

function mapStateToProps(state){
  return { posts: state.posts };
}



// Action Creator shortcut syntax instead of using mapDispatchToProps function
  // there are times where mapDispatchToProps is preferred, gives more insight of what is going on behind the scenes
  // do some computation on how you would want to call the Action Creator ahead of time
// another way to wireup an Action Creator
  // "null" because we arent passing in mapStateToProps
  // Pass in the Action Creator itself inside of an object
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);