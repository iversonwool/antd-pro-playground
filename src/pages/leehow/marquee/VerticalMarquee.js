import React from 'react';
import { getRandomColor } from './marquee';
import styles from './index.less';

function VerticalMarquee() {
  const data = [
    { id: '1', text: '1' },
    { id: '2', text: '2' },
    { id: '3', text: '3' },
    { id: '4', text: '4' },
    { id: '5', text: '5' },
  ];
  return (
    <div style={{ height: 400, overflow: 'hidden' }}>
      <div className={styles.anime}>
        {data.map((e) => {
          return (
            <div style={{ background: 'white', height: 100 }} key={e.id}>
              {e.text}
            </div>
          );
        })}
        {data.map((e) => {
          return (
            <div style={{ background: 'white', height: 100 }} key={e.id}>
              {e.text}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default VerticalMarquee;
