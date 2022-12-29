import { useReducer } from 'react'

const initialState = { count: 0 }

type CounterState = {
  count: number
}

type UpdateAction = {
  type: `increment` | `decrement`
  payload: number
}

type ResetAction = {
  type: `reset`
}
// discriminated UNION
type CounterAction = UpdateAction | ResetAction

const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case `increment`:
      return { count: state.count + action.payload }
    case `decrement`:
      return { count: state.count - action.payload }
    case `reset`:
      return { count: initialState.count }
    default:
      return state
  }
}
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      Count:{state.count}
      <button
        onClick={() => dispatch({ type: 'increment', payload: 10 })}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
      >
        Increment 10
      </button>
      <button
        onClick={() => dispatch({ type: 'decrement', payload: 10 })}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
      >
        Decrement 10
      </button>
      <button
        onClick={() => dispatch({ type: 'reset' })}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
      >
        Reset
      </button>
    </>
  )
}

export default Counter
