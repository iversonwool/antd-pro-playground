import React, { Component } from 'react';
import TweenOne from 'rc-tween-one';

import AnimateCSS from './animate.css';
import styles from './index.less';

import c from 'animate.css'
import classnames from 'classnames'

import CustomView from './customView'

import AnimateWrapper, { AnimateTypes } from './animate';
import { Button } from 'antd';

const Comp = () => <h1>HELLO WORLD!</h1>

class Animation extends Component {

  animateAgain = () => { this.animateView.animate() }
  
  render() {
    const { paused } = this.props;
    // const AnimateView = animate({
    //   animateComponnet: Comp,
    //   animateType: AnimateTypes.bounce,
    // });

    const layout = <CustomView />
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
          <span>Hello world!</span>
        </TweenOne>

        {/* <CustomView className={classnames(c.animate__animated, c.animate__bounce)} />

        <div>
          <AnimateCSS className={'dddd'} style={{ marginLeft: 10 }} />
        </div>

        <AnimateView /> */}


        <AnimateWrapper 
          type={AnimateTypes.bounce} 
          ref={(animateView) => {this.animateView = animateView}}
        >
          <h1>Animate Children</h1>
          <Comp />

          <Button type="primary">Primary Button</Button>
        </AnimateWrapper>


        <Button type="primary" onClick={this.animateAgain}>trigger</Button>


        {/* <CustomView /> */}
      </div>
    );
  }
}

export default Animation;
