import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'

import { ordered, restocked } from './donughtSlice'

const DonughtView = () => {
  const [orderedValue, setOrderedValue] = useState(1)
  const numOfDonught = useAppSelector((state) => state.donught.numOfDonught)
  const dispatch = useAppDispatch()
  return (
    <div>
      <h2>Number of donught -{numOfDonught}</h2>
      <button onClick={() => dispatch(ordered())}>Order donught</button>
      <input
        type='number'
        value={orderedValue}
        onChange={(e) => setOrderedValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(orderedValue))}>
        Restock donught
      </button>
    </div>
  )
}

export default DonughtView
