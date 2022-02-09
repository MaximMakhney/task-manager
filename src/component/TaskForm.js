import React, {useContext, useState, useEffect} from 'react';
import { TaskListContext } from '../context/TaskListContext';

function TaskForm() {

  const {addTask, clearList, editItem, editTask} = useContext(TaskListContext);

  const [title, setTitle] = useState('');

  const handleChange = e => {
    setTitle(e.target.value);
  }
  const handleSubmit = e => {
      e.preventDefault();
      if(editItem === null){
        addTask(title)
        setTitle('');
      }else{
          editTask(title, editItem.id, editItem.date)
      }
      
    }

    useEffect(() => {
        if(editItem !== null){
            setTitle(editItem.title);
        }else{
            setTitle('')
        }
    }, [editItem])

  return (
    <form onSubmit={handleSubmit} className="form">
        <input type="text"
        value={title}
        className='task-input'
        placeholder='Add Task...'
        onChange={handleChange}/>
        <div className="buttons">
            <button type='submit'
            className='btn add-task-btn'>
                {
                    editItem ? 'Edit Task' : 'Add Task'
                }
            </button>
            <button
            className='btn clear-btn'
                onClick={clearList}>
                Clear
            </button>
        </div>
    </form>
  );
}

export default TaskForm;
