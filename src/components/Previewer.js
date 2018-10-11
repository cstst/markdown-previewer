import React from 'react';
import Frame from './Frame';
import converter from '../Converter'
import { connect } from 'react-redux';

const Previewer = props => {

  const { input } = props;
  const newInput = converter(input);
  console.log(newInput);
  return (
    <Frame name="previewer">
      <div className="conversion" dangerouslySetInnerHTML={{__html: newInput}}></div>
    </Frame>
  );
}

const mapStateToProps = state => ({ input: state.input });

export default connect(mapStateToProps)(Previewer);