import React, { Component } from 'react';

class CustomView extends Component {
  constructor(props) {
    super(props);
    console.log('CustomView method constructor')
  }

  componentDidMount() {
    console.log('CustomView method componentDidMount')
  }

  render() {
    return (
      <div>
        Hello Custom View!
      </div>
    );
  }
}

export default CustomView;