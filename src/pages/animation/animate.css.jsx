import React, { Component } from 'react';
import styles from 'animate.css'
import classnames from 'classnames'

class AnimateCSS extends Component {

  render() {
    // console.log('styles', styles)

    // KeyframeEffect
    console.log(classnames(styles.animate__animated, styles.animate__bounce))
    return (
      <span style={{display: 'block'}} className={classnames(styles.animate__animated, styles.animate__bounce)}>
        AnimateCSS
      </span>
    );
  }
}

export default AnimateCSS;
