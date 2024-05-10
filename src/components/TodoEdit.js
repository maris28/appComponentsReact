import React, { useState } from 'react';
 
function TodoEdit({ todo, onSave }) {
    
    const [editedText, setEditedText] = useState(todo);
    const handleSave = () => {
    onSave(editedText);
  };
    
  return (
    <li>
      <div>
      <input
        type="text"
        value={editedText}
        onChange={(e) => setEditedText(e.target.value)}
      />
      <button onClick={handleSave}>Guardar</button>
    </div>
    </li>
  );
}
 
export default TodoEdit;