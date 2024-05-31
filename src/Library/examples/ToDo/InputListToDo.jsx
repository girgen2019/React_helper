/** @format */

import { useState } from 'react';

export const InputListToDO = ({ clicked }) => {
  const [editId, setEditId] = useState(null);
  const [editInput, setEditInput] = useState();
  const [saveInput, setSaveInput] = useState();

  const editInputHandle = (id, input) => {
    setEditId(id);
    setEditInput(input);
  };
  const saveHandle = (id) => {
    const copyArray = [...clicked].map((item) => {
      if (item.id === id) {
        return (item.name = editInput);
      }
    });
    setSaveInput(copyArray);
    setEditId(null);
  };

  return (
    <>
      {clicked.map((click) => (
        <li className="inputs" key={click.id}>
          {editId === click.id ? (
            <input
              value={editInput}
              onChange={(e) => setEditInput(e.target.value)}
            />
          ) : (
            <>{click.name}</>
          )}
          {editId === click.id ? (
            <button onClick={() => saveHandle(click.id)}>Save</button>
          ) : (
            <button onClick={() => editInputHandle(click.id, click.name)}>
              Add
            </button>
          )}
        </li>
      ))}
    </>
  );
};
