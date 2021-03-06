import React, { Component } from 'react';
import { Link } from 'react-router';
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
    const { id, title } = this.props.post;
    return (
      <div className="show-post">
        <h3><Link to={`/show/${id}`}>{title}</Link></h3>
        <Editor
          editorState={this.state.editorState}
          readOnly
          className="show-post-editor"

        />
      </div>);
  }
}

export default ShowPost;
