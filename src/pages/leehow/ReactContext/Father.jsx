import React, { Component } from 'react';
import ChildrenA from './Children'

class Father extends Component {
  render() {
    return (
      <div style={{border: '1px solid magenta'}}>
        Father UI

        <ChildrenA />
      </div>
    );
  }
}

export default Father;