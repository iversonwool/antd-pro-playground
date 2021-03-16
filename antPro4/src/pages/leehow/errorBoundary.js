import React, { Component } from 'react';

export default function errorBoundary(WrappedComponent) {
  return class extends Component {
    state = {
      error: null,
      hasError: false
    }

    static getDerivedStateFromError(error) {
      console.log('error', error)
      return {
        error,
        hasError: true
      }
    }

    componentDidCatch(err, errInfo) {
      console.log('err', err)
      console.log('errInfo', errInfo)
      // 业务统计
      // trackEvent('error boundary', { err, info });
      // 业务报警
      // reportError(error, info)
    }

    render() {
      const {error, hasError} = this.state
      if (hasError) {
        return <h1>something wrong</h1>
      }
      return (
        <WrappedComponent {...this.props} />
      )
    }
  }
}