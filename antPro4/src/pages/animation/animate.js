import classnames from 'classnames'
import styles from 'animate.css'
import React, { Component } from 'react'

// const animate = (WrappedComponent) => (props) => {


//   return () => {
//     return <WrappedComponent className={classnames(styles[type])} />
//   }
// }

// export default animate


class AnimateWrapper extends Component {


  render() {
    const {children} = this.props
    return <>
      {children}
    </>
  }
}
