import React, { useState } from 'react'

function TaskItem({ task, onUpdate, onDelete, onToggle }) {
  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState(task.title)

  const handleSave = () => {
    onUpdate(task.id, title)
    setIsEditing(false)
  }

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span onClick={() => onToggle(task.id)}>{task.title}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </>
      )}
    </li>
  )
}

export default React.memo(TaskItem)
