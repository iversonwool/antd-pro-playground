import React, { memo, useCallback, useMemo } from 'react';

const MemorizedPlayground = (props) => {
  // console.log('memorized render')

  const {text} = props;
  function renderText(t) {
    console.log('memorized render text')
    return <div>
      {t}
    </div>
  }

  /**
   * 对大组件下面的某个UI区块
   * 进行更加精细的控制
   */
  const renderTextCallback = useMemo(
    () => renderText(text),
    [text]
  )


  // https://blog.csdn.net/sinat_17775997/article/details/94453167
  // const renderTextCallback = useCallback(
  //   () => {
  //     console.log('callback')
  //     renderText(text)
  //   },
  //   [text]
  // )

  return (
    <div>


        B 区块文本 ---- 
        {renderTextCallback}
    </div>
  );
};

export default MemorizedPlayground;

// export default memo(MemorizedPlayground)
// 对整个组件进行memo 组织多余渲染


