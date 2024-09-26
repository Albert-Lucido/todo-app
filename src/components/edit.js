import React, {useState} from 'react';

const Edit = ({change, job}) => {
    const [value, setValue] = useState(job.job);

    const handleSubmit = (e) => {
        e.preventDefault();
        change(value, job.id);
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input-edit" placeholder='Enter new job' />
    <button type="submit" className='todo-btn'>Save New job</button>
  </form>
  );
};

export default Edit;