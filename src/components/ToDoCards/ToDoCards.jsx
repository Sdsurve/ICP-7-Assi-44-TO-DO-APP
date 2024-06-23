import React from 'react';
import "./ToDoCards.css";
import ImgDel from "./delete.png";

function ToDoCards({ index, task, category, deleteItem }) {



  return (
    <div className='todo-card'>
      <img 
        src={ImgDel} 
        alt="Delete" 
        className='delete-icon' 
        onClick={() => {
          deleteItem(index);
        }}
      />
      {task}
      <span 
        className='category' 
        style={{
          backgroundColor: CATEGORY_COLOURS[category] || 'grey'
        }}>
        {CATEGORY_EMOJI_MAP[category] || ''} {category}
      </span>
    </div>
  );
}

export default ToDoCards;
