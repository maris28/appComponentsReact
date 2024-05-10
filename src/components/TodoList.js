import React from 'react';
import TodoItem from './TodoItem';
import TodoEdit from './TodoEdit';
 
function TodoList({ todos, onDelete, onEdit }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          onDelete={() => onDelete(index)}
          onEdit={(editedText) => onEdit(index, editedText)}
        />
      ))}
    </ul>
  );
}
 
export default TodoList;


