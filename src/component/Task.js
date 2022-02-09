import React, {useContext} from 'react';
import { TaskListContext } from '../context/TaskListContext';

const Task = ({task}) => {
    const {removeTask, findItem} = useContext(TaskListContext);

  return (
      <li className="list-item">
          <span>{task.title}</span>
          <div className='btns-group'>
              <button className='btn-delete task-btn'
              onClick={() => removeTask(task.id, task.title)}>
                  <i className='fas fa-trash-alt'></i>
              </button>
              <button 
              onClick={() => findItem(task.id, task.title)}
              className='btn-edit task-btn'>
                  <i className='fas fa-pen'></i>
              </button>
          </div>
      </li>
  )
};

export default Task;
