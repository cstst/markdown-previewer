import React from 'react';
import Frame from './Frame';
import converter from '../converter'
import { connect } from 'react-redux';

const Previewer = props => {

  const { input } = props;
  const newInput = converter(input);
  return (
    <Frame name="previewer">
      <div className="conversion" dangerouslySetInnerHTML={{__html: newInput}}></div>
    </Frame>
  );
}

const mapStateToProps = state => ({ input: state.input });

export default connect(mapStateToProps)(Previewer);