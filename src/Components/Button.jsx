/** @format */
import { Button } from 'antd';

const button = {
  margin: '5px 10px',
  width: '80%',
};

export const Buttons = (props) => {
  return (
    
      <Button size='large' style={button}>
      {props.name}
      </Button>
    
  );
};
