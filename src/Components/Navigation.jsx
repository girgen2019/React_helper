/** @format */

import { NavLink } from 'react-router-dom';
import { Buttons } from './Button';

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
      <NavLink to="." end></NavLink>
      <NavLink to="about" ><Buttons name={"React это"}/></NavLink>      
      <NavLink to="virtual_dom" ><Buttons name={"Virtual DOM"}/></NavLink>      
      <NavLink to="components_props" ><Buttons name={"ComponentsProps"}/></NavLink>      
      <NavLink to="state_life_cycle" ><Buttons name={"Состояние и жизненный цикл"}/></NavLink>      
      <NavLink to="keys" ><Buttons name={"Keys"}/></NavLink>      
      <NavLink to="fragments" ><Buttons name={"React.Fragments"}/></NavLink>      
      <NavLink to="context" ><Buttons name={"React.Context"}/></NavLink>      
      <NavLink to="hooks" ><Buttons name={"Hooks"}/></NavLink>      
      <NavLink to="hoc_portals" ><Buttons name={"HOC & Portals"}/></NavLink>      
    </div>
  );
};
