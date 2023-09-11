import React, { Component } from 'react';
import TweenOne from 'rc-tween-one';

import AnimateCSS from './animate.css';
import styles from './index.less';

import c from 'animate.css';
import classnames from 'classnames';

import CustomView from './customView';

import AnimateWrapper, { AnimateTypes } from './animate';
import { Button, Tabs } from 'antd';
import LeaderLine from '@/../public/leader-line.min.js';

const Comp = () => <h1>HELLO WORLD!</h1>;

class Animation extends Component {
  state = {
    flag: false,
    showTab2: false
  };

  animateAgain = () => {
    this.animateView.animate();

    // this.setState(
    //   {
    //     flag: true,
    //   },
    //   () => {
    //     const from = document.getElementById('from');

    //     const to2 = document.getElementById('to2');
    //     const to3 = document.getElementById('to3');
    //     new LeaderLine(from, to2);
    //     new LeaderLine(from, to3, { path: 'grid', startSocket: 'bottom', endSocket: 'top' });
    //   },
    // );
  };

  componentDidMount() {
    this.draw();
    window.addEventListener('scroll', this.onScroll)
    setTimeout(() => {
      this.setState({ showTab2: true });
    }, 1000)
  }

  onScroll = () => {
    console.log('onScroll')
  }

  draw = () => {
    const from = document.getElementById('from');
    console.log('from', from);
    const to1 = document.getElementById('to1');
    const to2 = document.getElementById('to2');
    const to3 = document.getElementById('to3');
    new LeaderLine(from, to1, { path: 'grid', startSocket: 'bottom', endSocket: 'top' });
    new LeaderLine(from, to2)
    new LeaderLine(from, to3, { path: 'grid', startSocket: 'bottom', endSocket: 'top' })
  };

  render() {
    const { paused } = this.props;
    // const AnimateView = animate({
    //   animateComponnet: Comp,
    //   animateType: AnimateTypes.bounce,
    // });
    const { flag, showTab2 } = this.state;
    const layout = <CustomView />;
    return (
      <div>
        <Tabs defaultActiveKey='item-2'>
          <Tabs.TabPane tab="项目 1" key="item-1">
            内容 1
          </Tabs.TabPane>
          <Tabs.TabPane tab="项目 2" key="item-2" forceRender>
            <div className={styles.leaderLine} >
              <div id="from" className={styles.from}></div>
              <div className={styles.toArea}>
                <div id="to1" className={styles.to}></div>
                <div id="to2" className={styles.to}></div>
                <div id="to3" className={styles.to}></div>
              </div>
            </div>
          </Tabs.TabPane>
        </Tabs>

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
          ref={(animateView) => {
            this.animateView = animateView;
          }}
        >
          <h1>Animate Children</h1>
          <Comp />

          <Button type="primary">Primary Button</Button>
        </AnimateWrapper>

        <Button type="primary" onClick={this.animateAgain}>
          trigger
        </Button>

        {/* <CustomView /> */}
      </div>
    );
  }
}

export default Animation;
