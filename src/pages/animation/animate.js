import classnames from 'classnames';
import styles from 'animate.css';
import React, { Component, useEffect, useState } from 'react';

export const AnimateTypes = {
  bounce: 'animate__bounce',
  flash: 'animate__flash',
  pulse: 'animate__pulse',
  rubberBand: 'animate__rubberBand',
  shakeX: 'animate__shakeX',
  shakeY: 'animate__shakeY',
  headShake: 'animate__headShake',
  swing: 'animate__swing',
  tada: 'animate__tada',
  wobble: 'animate__wobble',
  jello: 'animate__jello',
  heartBeat: 'animate__heartBeat',
};

// const animate = ({ animateComponnet: WrappedComponent, animateType: type }) => (props) => {
//   const { className, ...rest } = props;
//   const [style, setStyle] = useState('');
//   useEffect(() => {
//     setStyle(type);
//   }, []);
//   console.log('', WrappedComponent);
//   return (
//     <div className={classnames(styles.animate__animated, styles[style])}>
//       <WrappedComponent
        
//         {...rest}
//         // onAnimationEnd={() => {
//         //   setStyle('');
//         // }}
//         // animate={() => {
//         //   setStyle(styles[type]);
//         // }}
//       />
//     </div>
//   );
// };

// export default animate;


class AnimateWrapper extends Component {

  state = {
    style: ''
  }
  
  componentDidMount() {
    this.animate()
  }

  animate = () => {
    const {type} = this.props
    this.setState({
      style: type
    })
  }

  onAnimationEnd = () => {
    this.setState({ style: ''})
  }

  render() {
    const {style} = this.state
    return (
      <div 
        className={classnames(styles.animate__animated, styles[style])}
        onAnimationEnd={this.onAnimationEnd}
      >
        {this.props.children}
      </div>
    )
  }
}

export default AnimateWrapper
