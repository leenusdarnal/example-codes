'use client'
import React, { useReducer } from 'react'

type Todo = {
  name: string
  statusofTodo: string
}

type State = Todo[]

type Action =
  | { type: 'TOGGLE_STATUS'; index: number }
  | { type: 'DELETE'; index: number }

const initialState: State = [
  { name: 'Buy groceries', statusofTodo: '' },
  { name: 'Do laundry', statusofTodo: 'completed' },
]

const TodoTwo = () => {
  const [todos, dispatch] = useReducer(
    (state: State, action: Action): State => {
      switch (action.type) {
        case 'TOGGLE_STATUS':
          return state.map((todo, index) =>
            index === action.index
              ? {
                  ...todo,
                  statusofTodo:
                    todo.statusofTodo === 'completed' ? '' : 'completed',
                }
              : todo
          )
        case 'DELETE':
          return state.filter((_, index) => index !== action.index)
        default:
          return state
      }
    },
    initialState
  )

  const handleStatusChange = (index: number) => {
    dispatch({ type: 'TOGGLE_STATUS', index })
  }

  const handleDelete = (index: number) => {
    dispatch({ type: 'DELETE', index })
  }

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <label>
              <input
                type='checkbox'
                checked={todo.statusofTodo === 'completed'}
                onChange={() => handleStatusChange(index)}
              />
              <span
                className={
                  todo.statusofTodo === 'completed' ? 'line-through' : ''
                }
              >
                {todo.name}
              </span>
            </label>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoTwo
