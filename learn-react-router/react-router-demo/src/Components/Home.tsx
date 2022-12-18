import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className='headers'>Home Page</div>
      <button onClick={() => navigate('order-summary', { replace: true })}>
        Place Order!
      </button>
    </>
  )
}

export default Home
