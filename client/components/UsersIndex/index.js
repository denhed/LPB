import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ShowPost from './showPost';

class UsersIndex extends Component {
  componentWillMount(){
    this.props.getPostsAPI();
  }

  render() {
    if(this.props.posts.length === 0) { return <div>Loading...</div> };
    return (
      <div>
        <div className="">
          {this.props.posts.map(post => {
            return (
              <ShowPost key={post.id} post={post} />
            )
          })}
        </div>
      </div>
    )
  }
};

function mapStateToProps(state, ownProps) {
  return {
    posts: state.posts
  };
}
export default connect(mapStateToProps, null)(UsersIndex);
