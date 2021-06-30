import React, { Component } from 'react';
import styles from 'animate.css'
import classnames from 'classnames'

class AnimateCSS extends Component {

  render() {
    console.log('styles', styles)
    console.log(this.props)
    return (
      <div className={classnames(styles.animate__animated, styles.animate__bounce)}>
        AnimateCSS
      </div>
    );
  }
}

export default AnimateCSS;
