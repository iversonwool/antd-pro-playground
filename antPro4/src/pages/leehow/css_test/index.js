import React, { Component } from 'react';
import styles from './index.less';
import { Anchor } from 'antd';
const { Link } = Anchor;

export default class CssTest extends Component {
  onAnchorChange = (link) => {
    console.log(link);
  };
  render() {
    return (
      <div className={styles.CssTest}>
        <Anchor
          onChange={this.onAnchorChange}
          affix
          showInkInFixed={false}
          getContainer={() => document.querySelector(`.${styles.CssTest}`)}
        >
          <Link href="#components-anchor-demo-basic" title="Basic demo" />
          <Link href="#components-anchor-demo-static" title="Static demo" />
          <Link href="#API" title="API">
            <Link href="#Anchor-Props" title="Anchor Props" />
            <Link href="#Link-Props" title="Link Props" />
          </Link>
        </Anchor>

        <div className={styles.right}>
          <div
            id="components-anchor-demo-basic"
            className={styles.item}
            style={{ backgroundColor: 'red' }}
          >
            a
          </div>
          <div
            id="components-anchor-demo-static"
            className={styles.item}
            style={{ backgroundColor: 'cyan' }}
          >
            b
          </div>
          <div id="API" className={styles.item} style={{ backgroundColor: 'green' }}>
            b
          </div>
          <div id="Anchor-Props" className={styles.item} style={{ backgroundColor: 'black' }}>
            c
          </div>
          <div id="Link-Props" className={styles.item} style={{ backgroundColor: 'yellow' }}>
            d
          </div>
        </div>
      </div>
    );
  }
}
