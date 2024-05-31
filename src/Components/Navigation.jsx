/** @format */

import { NavLink } from 'react-router-dom';
import { Buttons } from './Button';
import { AppHeader } from '../LayOut/AppHeader';

const container = {
  width: '20%',
  hight: '100%',
  backgroundColor: '#282c34',
  display: 'flex',
  flexDirection: 'column',
  // margin: '5px 0px',
  padding: '10px 0px',
};

export const Navigation = () => {
  return (
    <div style={container}>
      <NavLink to="/" end></NavLink>
      <NavLink to="/about" ><Buttons name={"React это"}/></NavLink>      
    </div>
  );
};
