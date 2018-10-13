import React, { Component } from 'react'
import { connect } from 'react-redux';
import { resize } from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMaximize, faWindowMinimize } from '@fortawesome/free-solid-svg-icons'

class Frame extends Component {

  handleClick = e => {
    this.props.resize(this.props.name);
  }

  render() {
    const { name, children, frames } = this.props,
          { visible, expanded } = frames[name],
          sizeClass = expanded ? 'expanded' : visible ? 'visible' : 'hidden',
          capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
    return (
      <div className={`frame ${name} ${sizeClass}`}>
        <div className="header">
          <h4>{capitalizedName}</h4>
          <button 
            onClick={this.handleClick}
          ><FontAwesomeIcon icon={expanded ? faWindowMinimize : faWindowMaximize}/></button>
        </div>
        <div className="body">
          {children}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ frames: state.frames });

export default connect(mapStateToProps, { resize })(Frame)