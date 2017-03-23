import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/actionCreators'
import {Editor, EditorState, RichUtils, convertToRaw} from 'draft-js';


class EditPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      editorState: EditorState.createEmpty()
    };
    this.handleTitle = this.handleTitle.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleTitle(event){
    console.log(event.target.value);
      this.setState({title: event.target.value});
  }

  onChange(editorState) {
    this.setState({editorState});
  }

  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }

  _onSaveClick() {
    const description = JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent()));
    console.log(this.state);
    const postObj = {
      post: description,
      title: this.state.title
    };


      this.props.updatePostAPI(postObj);
    //this.props.updatePostAPI(description);
  }

  render() {
    return (
      <div>
        <h3>edit post</h3>
        <input type="text" value={this.state.title} onChange={this.handleTitle}/>
        <button onClick={this._onBoldClick.bind(this)}>Bold</button>
        <button onClick={this._onSaveClick.bind(this)}>Save</button>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}

          />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    users: state.users
  };
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispachToProps)(EditPost);
