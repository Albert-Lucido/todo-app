import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todo from './todo';
import Form from './form';
import Edit from './edit';

const Wrap = () => {
  const [items, setItems] = useState([]);

  const add = (todo) => {
    setItems([
      ...items,
      { id: uuidv4(), job: todo, completed: false, isEditing: false },
    ]);
  };

  const remove = (id) => setItems(items.filter((todo) => todo.id !== id));

  const toggleComplete = (id) => {
    setItems(
      items.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const change = (id) => {
    setItems(
      items.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const changeItem = (job, id) => {
    setItems(
      items.map((todo) =>
        todo.id === id ? { ...todo, job, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="Wrap">
      <h1>What's Your Plan Today?</h1>
      <Form add={add}></Form>
      {items.length === 0 ? (
        <h2>No todos available.<br></br> Add a todo to get started!</h2>
      ) : (
        items.map((todo) =>
          todo.isEditing ? (
            <Edit change={changeItem} job={todo} key={todo.id}></Edit>
          ) : (
            <Todo
              key={todo.id}
              job={todo}
              remove={remove}
              change={change}
              toggleComplete={toggleComplete}
            ></Todo>
          )
        )
      )}
    </div>
  );
};

export default Wrap;
