import React from 'react';

import moment from 'moment';

const FORMAT = 'YYYY-MM-DD HH:mm:ss';

/**
 * 操作成 [9, 50]
 */
const TIMING = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map((time) => {
  return [0, 1, 2, 3, 4, 5].map((p) => {
    if (time < 10) {
      return `0${time}:${p === 0 ? '00' : `${p * 10}`}`;
    }
    return `${time}:${p === 0 ? '00' : `${p * 10}`}`;
  });
}).flat();

const TIMING_TIMESTAMP = TIMING.map((time) => {
  return moment(moment().format('YYYY-MM-DD ') + time).unix()
})

function findIndex() {
  const length = TIMING_TIMESTAMP.length
  const currentTimestamp = moment().unix()
  if (currentTimestamp < TIMING_TIMESTAMP[0]) return -1
  if (currentTimestamp > TIMING_TIMESTAMP[length - 1]) return 60
  return TIMING_TIMESTAMP.findIndex(timestamp => currentTimestamp < timestamp)
}

function splitIntoTwoSegments() {
  const idx = findIndex()
  if (idx === -1) return {}
  return {
    current: [],
    next: []
  }
}

const MomentPlayground = () => {
  console.log('TIMING', TIMING);
  console.log('TIMING_TIMESTAMP', TIMING_TIMESTAMP);
  return (
    <>
      <div>{moment().format(FORMAT)}</div>
      <div>{moment().year()}</div>
      <div>{TIMING[findIndex()]}</div>
    </>
  );
};

export default MomentPlayground;
