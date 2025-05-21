import React from 'react'
import TaskItem from './TaskItem'

function TaskList({ tasks, onUpdate, onDelete, onToggle }) {
  return (
    <ul className='task-list'>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onUpdate={onUpdate}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </ul>
  )
}

export default React.memo(TaskList)
