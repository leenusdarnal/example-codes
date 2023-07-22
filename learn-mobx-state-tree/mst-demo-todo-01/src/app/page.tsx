'use client'
import { useState } from 'react'
import { observer } from 'mobx-react-lite'
import { store } from '../store/store'
import TaskForm from '../components/TaskForm'

const HomePage = observer(() => {
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null)

  const handleAddTask = (task: { title: string; description: string }) => {
    store.addTask(task)
  }

  const handleUpdateTask = (
    id: string,
    updatedTask: { title: string; description: string }
  ) => {
    store.updateTask(id, updatedTask)

    setSelectedTaskId(null)
  }

  const handleDeleteTask = (id: string) => {
    store.removeTask(id)
  }

  const getSelectedTask = (selectedTaskId: string) => {
    const task = store.tasks.get(selectedTaskId)
    return task
  }

  return (
    <main className='flex justify-center items-center'>
      <TaskForm onSubmit={handleAddTask} />
      <ul>
        {[...store.tasks.values()].map((task) => (
          <li key={task.id}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <button onClick={() => setSelectedTaskId(task.id)}>Edit</button>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {selectedTaskId && (
        <TaskForm
          task={() => getSelectedTask(selectedTaskId)}
          onSubmit={(updatedTask) =>
            handleUpdateTask(selectedTaskId, updatedTask)
          }
        />
      )}
    </main>
  )
})

export default HomePage
