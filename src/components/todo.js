import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Todo = ({ job, remove, change, toggleComplete }) => {
  const handleCompleteClick = (id) => {
    toggleComplete(id);
  };

  return (
    <div className="Todo">
      <p className={`${job.completed ? "completed" : "incompleted"}`}>{job.job}</p>
      <div>
        <FontAwesomeIcon
          className="complete-icon"
          icon={faCheck}
          onClick={() => handleCompleteClick(job.id)}
        />
        {!job.completed && (
          <FontAwesomeIcon
            className="edit-icon"
            icon={faPenToSquare}
            onClick={() => change(job.id)}
          />
        )}
        {!job.completed && (
          <FontAwesomeIcon
            className="delete-icon"
            icon={faTrash}
            onClick={() => remove(job.id)}
          />
        )}
      </div>
    </div>
  );
};

export default Todo;
