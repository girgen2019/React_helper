/** @format */
import { Button } from 'antd';

const button = {
  margin: '5px 10px',
  width: '80%',
  padding:'5px 5px',
  border: '1px solid #000000',
  borderRadius:'5px',    
  cursor:'pointer',
};

export const Buttons = (props) => {
  return (
    
      <button style={button}>
      {props.name}
      </button>
    
  );
};
