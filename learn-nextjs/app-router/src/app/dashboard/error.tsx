'use client'
const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div>
      Error-{error.toString()}
      <button onClick={reset}>Click to try again</button>
    </div>
  )
}

export default Error
