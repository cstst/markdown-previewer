import React, { Component } from 'react'
import { connect } from 'react-redux';
import { resize } from '../actions';

class Frame extends Component {

  handleClick = e => {
    this.props.resize(e.target.name);
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
            name={name}
          >X</button>
        </div>
        {children}
      </div>
    );
  }
}

const mapStateToProps = state => ({ frames: state.frames });

export default connect(mapStateToProps, { resize })(Frame)