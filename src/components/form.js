import React, {useState} from 'react';


const Form = ({add}) => {
  const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
          add(value);
          setValue('');
        }
      };
  return (
    <form onSubmit={handleSubmit} className="Form">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Add Task...' />
    <button type="submit" className='todo-btn'>Add Task</button>
  </form>
  );
};

export default Form;