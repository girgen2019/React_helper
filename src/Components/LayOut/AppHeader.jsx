/** @format */

import { Flex, Layout } from 'antd';
import { Logo } from '../Components/Logo';

const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#001529',
};

export const AppHeader = () => {
  return (
    <Layout.Header style={headerStyle}>
      <Logo />
    </Layout.Header>
  );
};
