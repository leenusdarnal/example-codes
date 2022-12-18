import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { ordered, restocked } from './icecreamSlice'

const IcecreamView = () => {
  const [orderedValue, setOrderedValue] = useState(1)
  const numOfIcecream = useAppSelector((state) => state.icecream.numOfIcecream)
  const dispatch = useAppDispatch()
  return (
    <div>
      <h2>Number of Icecream -{numOfIcecream}</h2>
      <button onClick={() => dispatch(ordered())}>Order Icecream</button>
      <input
        type='number'
        value={orderedValue}
        onChange={(e) => setOrderedValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(orderedValue))}>
        Restock Icecream
      </button>
    </div>
  )
}

export default IcecreamView
