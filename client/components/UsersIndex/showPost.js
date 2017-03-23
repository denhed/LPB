import React, { Component } from 'react';
import {Editor, EditorState, RichUtils, convertFromRaw} from 'draft-js';

class ShowPost extends Component {
  constructor(props) {
    super(props);

    if (this.props.post.post) {
      const blocks = convertFromRaw(JSON.parse(this.props.post.post));
      this.state = { editorState: EditorState.createWithContent(blocks) };
    }
  }

  render() {
    return (
      <div>
        <h3>{this.props.post.title}</h3>
        <Editor
          editorState={this.state.editorState}
          readOnly
        />
      </div>);
  }
}

export default ShowPost;