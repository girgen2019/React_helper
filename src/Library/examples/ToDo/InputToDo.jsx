/** @format */

import { useRef, useState } from 'react';
import { InputListToDO } from './InputListToDo';


export const InputToDo = () => {
  const [inputValue, setInputValue] = useState('');
  const [clicked, setClicked] = useState([]);
  const refFocus = useRef(null);

  const inputChange = (e) => {
    setInputValue(e.target.value);
  };
  const saveInputButtonClick = () => {
    setClicked([...clicked, {id: Date.now(),name: inputValue }]);
    setInputValue('');
    refFocus.current.focus();
  };


  return (
    <>
      <div className="input">
        <input
          onChange={inputChange}
          name="input"
          placeholder="Write your text"
          value={inputValue}
          ref={refFocus}
        />
        <button onClick={saveInputButtonClick}>Click</button>
        <ul>
          <InputListToDO clicked={clicked} />
        </ul>
      </div>
    </>
  );
};
