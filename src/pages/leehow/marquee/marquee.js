import React from 'react';
import styles from './index.less';
import ReactFastMarquee from 'react-fast-marquee';

export function getRandomColor() {
  return '#' + Math.random().toString(16).slice(2, 8);
}

function Marquee() {
  const [dataList] = React.useState([
    { id: '5', text: '1' },
    { id: '4', text: '2' },
    { id: '3', text: '3' },
    { id: '2', text: '4' },
    {id: '1', text: '5' },
    // { id: '5', text: '5' },
    // { id: '6', text: '1' },
    // { id: '7', text: '2' },
    // { id: '8', text: '3' },
    // { id: '9', text: '4' },
  ]);
  return (
    <ReactFastMarquee pauseOnHover direction='up' >

      {dataList.map((item) => {
        return (
          <div className={styles.item} key={item.id} style={{ backgroundColor: getRandomColor() }}>
            {item.text}
          </div>
        );
      })}
      
    </ReactFastMarquee>
    // <div className={styles['h-section-part2-plots']}>
    //   <div className={styles['h-section-part2-plots-top']}>
    //     <ul>
    //       {dataList.map((item) => {
    //         return <li key={item.id} style={{backgroundColor: getRandomColor()}}>{item.text}</li>;
    //       })}
    //     </ul>
    //   </div>
    // </div>
  );
}

export default Marquee;
