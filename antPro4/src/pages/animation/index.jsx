import React, { Component } from 'react';
import TweenOne from 'rc-tween-one';

import AnimateCSS from './animate.css';
import styles from './index.less';

class Animation extends Component {
  render() {
    const { paused } = this.props;
    return (
      <div>
        <TweenOne
          animation={{
            x: 80, //让code-box-shape向右移动80
            // scale: 0.5, //缩小50%
            // rotate: 120, //旋转120度
            yoyo: true, // 动画执行完后返回
            repeat: -1, // 循环播放
            duration: 1000, //动画开始到结束用1秒
            ease: 'easeInCubic',
            // opacity: 1,
          }}
          paused={paused}
          style={{ transform: 'translateX(-80px)', opacity: 1 }}
          className={styles.box}
        >
          <div>Hello world!</div>
        </TweenOne>

        <div>
          <AnimateCSS />
        </div>
      </div>
    );
  }
}

export default Animation;
