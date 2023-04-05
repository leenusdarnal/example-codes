import Link from 'next/link'
import { useRouter } from 'next/router'

const Home = () => {
  const router = useRouter()

  const handleClick = () => {
    alert('order Placed')
    router.push('/product')
  }
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <Link href='/blog'>Blog</Link>
        <Link href='/product'>Product</Link>
      </div>
      <button onClick={handleClick}>Place Order</button>
    </div>
  )
}

export default Home
