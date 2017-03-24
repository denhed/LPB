import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/actionCreators'
import {Editor, EditorState, RichUtils, convertToRaw} from 'draft-js';

import Section from '../UsersIndex/ShowPost';

class ShowItem extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    const postId = this.props.params.id;
    this.props.getPostAPI(postId);
  }

  render() {
    const post = this.props.post;
    return (
      <div>
          <h3></h3>
          <Section post={post}/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    post: state.post
  };
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispachToProps)(ShowItem);
