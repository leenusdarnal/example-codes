import { useNavigate } from 'react-router-dom'

const NoMatch = () => {
  const navigate = useNavigate()
  return (
    <>
      <h1>404 </h1>
      <h3>PAGE NOT FOUND</h3>
      <button onClick={() => navigate(-1)}>CLICK HERE TO GO BACK</button>
    </>
  )
}

export default NoMatch
