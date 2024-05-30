/** @format */
import { Flex, Layout } from 'antd';

const layoutStyle = {
  overflow: 'hidden',
  height: 'calc(100vh - 20px)',
};

export const AppWrapper = ({children}) => {
  return (
    <Flex gap="middle" wrap>
      <Layout style={layoutStyle}>
        {children}
      </Layout>
    </Flex>
  );
};
