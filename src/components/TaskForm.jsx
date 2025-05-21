import React from 'react'
import useForm from '../hooks/useForm'

function TaskForm({ onAdd }) {
  const { values, handleChange, reset } = useForm({ title: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (values.title.trim()) {
      onAdd(values.title.trim())
      reset()
    }
  }

  return (
    <form className='task-form' onSubmit={handleSubmit}>
      <input
        type='text'
        name='title'
        value={values.title}
        onChange={handleChange}
        placeholder='Add a new task'
      />
      <button type='submit'>Add</button>
    </form>
  )
}

export default React.memo(TaskForm)
