import React from 'react';
import Frame from './Frame';
import { connect } from 'react-redux';
import marked from 'marked';

const Previewer = props => {
  const output = marked(props.input)
  return (
    <Frame name="previewer">
      <div className="conversion" dangerouslySetInnerHTML={{__html: output}}></div>
    </Frame>
  );
}

const mapStateToProps = state => ({ input: state.input });

export default connect(mapStateToProps)(Previewer);