import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'

import { ordered, restocked } from './cakeSlice'

const CakeView = () => {
  const [restockValue, setRestockValue] = useState(1)
  const numOfCakes = useAppSelector((state) => state.cake.numOfCakes)
  const dispatch = useAppDispatch()
  return (
    <div>
      <h2>Number of Cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order cake</button>
      <input
        type='number'
        value={restockValue}
        onChange={(e) => setRestockValue(parseInt(e.target.value))}
      />
      <button
        onClick={() => {
          dispatch(restocked(restockValue))
        }}
      >
        Restock cakes
      </button>
    </div>
  )
}

export default CakeView
