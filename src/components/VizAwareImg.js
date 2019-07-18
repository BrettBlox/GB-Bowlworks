import React, { Component } from 'react';
import VizSensor from 'react-visibility-sensor';

class VizAwareImg extends Component {
  state = {
    imgViz: false
  }
  render() {
    return (
      <VizSensor
        partialVisibility 
        onChange={(isVisible) => {
          this.setState({imgViz: isVisible})
        }}
      >
        <img
          src={this.props.source}
        />
      </VizSensor>
    );
  }
}

export default VizAwareImg