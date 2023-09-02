import React, { Component } from 'react'

export class Snapshot extends Component {

  state ={
    news: []
  }

  scrollRef = React.createRef()

  componentDidMount() {
    setInterval(() => {
      this.setState({
        news: ['news'+(this.state.news.length+1), ...this.state.news]
      })
    }, 1500);
  }

  getSnapshotBeforeUpdate() {


    return this.scrollRef.current.scrollHeight
  }

  componentDidUpdate(prevProps, prevState, snapshot) {

    this.scrollRef.current.scrollTop += this.scrollRef.current.scrollHeight - snapshot
    
  }

  render() {
    return (
      <div ref={this.scrollRef} style={{height: 150, overflowY: 'auto', backgroundColor: 'magenta'}}>
        
        {this.state.news.map((_, idx) => {
          return (
            <div style={{height: 30}} key={idx}>{_}</div>
          )
        })}
      </div>
    )
  }
}

export default Snapshot