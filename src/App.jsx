import React, { useMemo } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import useTasks from './hooks/useTasks'

function App() {
    const { tasks, addTask, updateTask, deleteTask, toggleComplete, filter, setFilter } = useTasks()

    const filteredTasks = useMemo(() => {
        switch (filter) {
            case 'all':
                return tasks
            case 'active':
                return tasks.filter((task) => !task.completed)
            case 'completed':
                return tasks.filter((task) => task.completed)
            default:
                return tasks
        }
    }, [tasks, filter])

    return (
        <div className='app-container'>
            <h1>Task Manager</h1>
            <TaskForm onAdd={addTask} />
            <div className='filters'>
                <button
                    onClick={() => {
                        setFilter('all')
                    }}
                >
                    All
                </button>
                <button
                    onClick={() => {
                        setFilter('active')
                    }}
                >
                    Active
                </button>
                <button
                    onClick={() => {
                        setFilter('completed')
                    }}
                >
                    Completed
                </button>
            </div>
            <TaskList
                tasks={filteredTasks}
                onUpdate={updateTask}
                onDelete={deleteTask}
                onToggle={toggleComplete}
            />
        </div>
    )
}

export default React.memo(App)
