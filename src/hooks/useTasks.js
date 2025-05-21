import { useState, useEffect, useCallback } from 'react'

function generateId() {
  return '_' + Math.random().toString(36).substr(2, 9)
}

export default function useTasks() {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem('tasks')
    return stored ? JSON.parse(stored) : []
  })

  const [filter, setFilter] = useState('all')

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = useCallback((title) => {
    setTasks((prev) => [...prev, { id: generateId(), title, completed: false }])
  }, [])

  const updateTask = useCallback((id, newTitle) => {
    setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, title: newTitle } : task)))
  }, [])

  const deleteTask = useCallback((id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }, [])

  const toggleComplete = useCallback((id) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)),
    )
  }, [])

  return { tasks, addTask, updateTask, deleteTask, toggleComplete, filter, setFilter }
}
