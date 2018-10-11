import React from 'react';
import Frame from './Frame';
import { connect } from 'react-redux';

const Previewer = props => {

  const { input } = props;
  const newInput = "<p>" + input + "</p>";
  const newerInput = 
    newInput.split("")
            .map(char => char.charCodeAt(0) === 10 ? "<br>" : char)
            .join("")
            .replace(/\s\s+/g, '<br>')
            .replace(/<br><br>/g, '</p><p>')
            .replace(/<p><\/p>/g, '');
  console.log(newerInput);
  return (
    <Frame name="previewer">
      <div className="conversion" dangerouslySetInnerHTML={{__html: newerInput}}></div>
    </Frame>
  );
}

const mapStateToProps = state => ({ input: state.input });

export default connect(mapStateToProps)(Previewer);