/** @format */

import { NavLink, Route, Routes } from 'react-router-dom';
import { InputToDo } from '../Library/examples/ToDo/InputToDo';
import { useState } from 'react';
import ImageRoadMap from '../img/Untitled.jpeg';
import '../App.css';

const styleHome = {
  display: 'flex',
};

const styleParagraph = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'aliceblue',
  color: '#001529',
  padding: '5px 10px',
  borderRadius: '5px',
  textAlign: 'justify',
  active: 'black',
  width: '15rem',
};

export const Home = () => {
  const [click, setClick] = useState(false);

  const handleClickExaples = () => {
    setClick((prev) => !prev);
  };
  return (
    <div style={styleHome}>
      <div
        style={{ padding: '0px 10px', 
  }}
      >
        <img src={ImageRoadMap} style={{height:"100vh"}}/>
      </div>
    </div>
  );
};
