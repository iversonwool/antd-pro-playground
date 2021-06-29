import React, { Component } from 'react';
import styles from 'animate.css'

class AnimateCSS extends Component {

  render() {
    console.log('styles', styles)
    return (
      <div className={`${styles.animate__animated} ${styles.animate__fadeOut}`}>
        AnimateCSS
      </div>
    );
  }
}

export default AnimateCSS;
