/** @format */

import { NavLink, Route, Routes } from 'react-router-dom';
import '../App.css';
import { InputToDo } from '../Library/examples/ToDo/InputToDo';
import { useState } from 'react';

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
      <div style={{ padding: '0px 10px'}}>
        <h1 className="title">HOME</h1>
        <div style={styleParagraph}>
          <button style={{ marginBottom: '10px', width:'80%' }} className='active'>
            Знакомство с Реакт
          </button>

          <button onClick={handleClickExaples} style={{ marginBottom: '10px', width:'80%' }} className='active'>
           
            Примеры кода
          </button>

          <button style={{ marginBottom: '10px', width:'80%' }} className='active'>Что может Реакт</button>
        </div>
      </div>
      {click ? (
        <div style={{ background: 'white',width: '15rem', borderRadius:"5px" }}>
          <InputToDo />
        </div>
      ) : <div style={styleParagraph}></div>}
    </div>
  );
};
