import React, { Component } from 'react';
import DemoContext from './contextCreator'


class ChildrenA extends Component {

  static contextType = DemoContext

  render() {
    return (
      <div style={{border: '1px solid black'}}>
        ChildrenA
        <br />
        {`this.context is ${this.context}`}


        <DemoContext.Consumer>
          {value => <h1>{`context value is ${value}`}</h1>}
        </DemoContext.Consumer>
      </div>
    );
  }
}

export default ChildrenA;