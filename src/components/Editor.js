import React, { Component } from 'react';
import Frame from './Frame';
import { connect } from 'react-redux';
import { input } from '../actions';

class Editor extends Component {

  state = {
    input: `# This is an h1 heading
## This is an h2 heading
**This is bold text**

[This is a link](http://www.google.com)

This \`isInlineCode();\`

    function codeBlock() {
      return 'This is a code block';
    }

1. This is a list item
2. this is another list item 

> This is a block quote
>> This one is nested

![This is an image](https://www.gettingstamped.com/wp-content/uploads/2016/02/Things-to-do-in-El-Nido-Philippines-Simizu-Island-El-Nido-Tour-A-1.jpg)`
  }
  componentDidMount() {
    this.props.input(this.state.input)
  }
  
  handleChange = e => {
    const input = e.target.value;
    this.setState({input});
    this.props.input(input);
  }

  render() {
    return (
      <Frame name="editor">
        <textarea id="editor" value={this.state.input} onChange={this.handleChange} />
      </Frame>
    )
  }
}

export default connect(null, { input })(Editor)