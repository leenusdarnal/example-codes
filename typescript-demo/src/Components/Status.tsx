type StatusProps = {
  status: `loading` | `success` | `error`
}
const Status = (props: StatusProps) => {
  let msg
  if (props.status === 'loading') {
    msg = `Loading...`
  } else if (props.status === 'success') {
    msg = `Data Fetched Successfully`
  } else if (props.status === 'error') {
    msg = `Error Fetching Data`
  }
  return (
    <div>
      <h2>{msg}</h2>
    </div>
  )
}

export default Status
