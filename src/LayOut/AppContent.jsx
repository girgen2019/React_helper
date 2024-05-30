import { Flex, Layout } from 'antd';

const contentStyle = {
 
    display: 'flex',
    textAlign: 'center',
    height: 'calc(100vh-64px-35px)',
    color: '#fff',
    backgroundColor: '#001529',
  };

export const AppContent = ({children}) => {
    return(
        <Layout.Content style={contentStyle}>
          {children}
        </Layout.Content>
    )
}