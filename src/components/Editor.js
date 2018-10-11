import React, { Component } from 'react';
import Frame from './Frame';
import { connect } from 'react-redux';
import { input } from '../actions';

class Editor extends Component {

  handleChange = e => {
    this.props.input(e.target.value)
  }

  render() {
    return (
      <Frame name="editor">
        <textarea onChange={this.handleChange} />
      </Frame>
    )
  }
}

export default connect(null, { input })(Editor)