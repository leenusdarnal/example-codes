import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { ordered, restocked } from './icecreamSlice'

const IcecreamView = () => {
  const [orderedValue, setOrderedValue] = useState(1)
  const numOfIcecream = useSelector((state) => state.icecream.numOfIcecream)
  const dispatch = useDispatch()
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
