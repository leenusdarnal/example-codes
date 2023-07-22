'use client'
import { useState } from 'react'

const Todo = () => {
  const [todo, setTodo] = useState('')
  const [todosCollection, settodosCollection] = useState<string[]>([])

  const addToTodo = () => {
    if (todo) {
      settodosCollection((prevStae) => [...prevStae, todo])
      setTodo('')
    }
    console.log('Empty todo')
  }
  return (
    <div>
      <input
        className='h-auto w-4/5 text-slate-950 p-8 text-2xl mb-8'
        placeholder='Enter a Task'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        className='text-3xl bg-indigo-950 rounded p-5'
        onClick={addToTodo}
      >
        Create Task
      </button>
      <div className='mt-10 flex flex-col justify-between w-3/5 min-h-full gap-5'>
        {todosCollection.map((todo, index) => (
          <div key={index} className=' flex flex-row gap-4'>
            <input type='checkbox' className='h-30' />
            <div className='break-all'>{todo}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Todo
