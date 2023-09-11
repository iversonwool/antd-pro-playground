import React, { Component } from 'react';

import Father from './Father';
import DemoContext from './contextCreator';

class ContextPlayground extends Component {
  // 容器组件不用Provide 包裹
  // 那么在创建Context时候的defaultValue将会起作用
  // 如果包裹之后 Provide的value值将会起作用 即使所传值为undefined


  // All consumers that are descendants of a Provider 
  // will re-render whenever the Provider’s value prop changes. 

  // The propagation from Provider to its descendant consumers 
  // (including .contextType and useContext) is not subject to 
  // the shouldComponentUpdate method, so the consumer is updated 
  // even when an ancestor component skips an update.
  render() {
    return (
      <DemoContext.Provider value={undefined}>
        <div style={{ border: '1px solid cyan' }}>
          Playground for Context.
          <Father />
        </div>
      </DemoContext.Provider>
    );
  }
}

export default ContextPlayground;
