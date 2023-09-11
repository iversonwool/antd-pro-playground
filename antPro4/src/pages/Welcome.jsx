import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography, Button } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import styles from './Welcome.less';
import InnerFunc from './leehow/innerFunc';
import Snapshot from './leehow/Snapshot';

const CodePreview = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

/**
 * Counter
 */
function Counter() {
  const [count, setCount] = React.useState(0);

  // React.useEffect(() => {
  //   const id = setInterval(() => {
  //     // console.log('---interval count: %i', count)
  //     setCount((c) => {
  //       console.log('---interval count: %i', c)
  //       return c + 1
  //     });
  //   }, 1000);
  //   return () => {
  //     console.log('clear interval');
  //     clearInterval(id)
  //   };
  // }, []);

  return <h1>定时器：{count}</h1>;
}

export default (props) => {
  const intl = useIntl();
  const innerRef = React.useRef();
  return (
    <PageContainer className={styles.myButton}>
      <Card>
        <Alert
          message={intl.formatMessage({
            id: 'pages.welcome.alertMessage',
            defaultMessage: '更快更强的重型组件，已经发布。',
          })}
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 24,
          }}
        />
        <Typography.Text strong>
          <FormattedMessage id="pages.welcome.advancedComponent" defaultMessage="高级表格" />{' '}
          <a
            href="https://procomponents.ant.design/components/table"
            rel="noopener noreferrer"
            target="__blank"
          >
            <FormattedMessage id="pages.welcome.link" defaultMessage="欢迎使用" />
          </a>
        </Typography.Text>
        <CodePreview>yarn add @ant-design/pro-table</CodePreview>
        <Typography.Text
          strong
          style={{
            marginBottom: 12,
          }}
        >
          <FormattedMessage id="pages.welcome.advancedLayout" defaultMessage="高级布局" />{' '}
          <a
            href="https://procomponents.ant.design/components/layout"
            rel="noopener noreferrer"
            target="__blank"
          >
            <FormattedMessage id="pages.welcome.link" defaultMessage="欢迎使用" />
          </a>
        </Typography.Text>
        <CodePreview>yarn add @ant-design/pro-layout</CodePreview>
      </Card>

      <InnerFunc ref={innerRef} />

      <Button
        onClick={() => {
          innerRef.current?.anotherFocus();

          console.log(props)
        }}
        
      >
        inner func call
      </Button>

      <Counter />


      <Snapshot />
    </PageContainer>
  );
};
