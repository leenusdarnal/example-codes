import { useState } from 'react'
import { Task, store, taskType } from '../store/store'

type TaskFormProps = {
  task?: typeof store.tasks.get
  onSubmit: (task: { title: string; description: string }) => void
}

const TaskForm = ({ task, onSubmit }: TaskFormProps) => {
  // const [title, setTitle] = useState(task.title || '')
  const [title, setTitle] = useState('')
  // const [description, setDescription] = useState(task?.description || '')
  const [description, setDescription] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    onSubmit({ title, description })

    setTitle('')
    setDescription('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='title'>Title</label>
        <input
          className='text-black'
          id='title'
          value={title}
          onChange={(event) => setTitle(event.currentTarget.value)}
        />
      </div>
      <div>
        <label htmlFor='description'>Description</label>
        <textarea
          className='text-black'
          id='description'
          value={description}
          onChange={(event) => setDescription(event.currentTarget.value)}
        />
      </div>
      <button type='submit'>Add Task</button>
    </form>
  )
}

export default TaskForm
