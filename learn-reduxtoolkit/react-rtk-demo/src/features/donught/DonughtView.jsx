import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { ordered, restocked } from './donughtSlice'

const DonughtView = () => {
  const [orderedValue, setOrderedValue] = useState(1)
  const numOfDonught = useSelector((state) => state.donught.numOfDonughts)
  const dispatch = useDispatch()
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
