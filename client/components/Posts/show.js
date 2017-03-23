import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/actionCreators'
import {Editor, EditorState, RichUtils, convertToRaw} from 'draft-js';

class ShowPost extends Component {
  constructor(props) {
    super(props);
    const postId = this.props.params.id;
    console.log(postId)
    this.props.getPostAPI(postId);
  }


  render() {
    console.log('render',this.props);
    return ( <h3>show post</h3>);
  }
}

function mapStateToProps(state, ownProps) {
  return {
    posts: state.posts
  };
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispachToProps)(ShowPost);
