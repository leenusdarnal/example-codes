import { getSession, signIn } from 'next-auth/react'
import { useEffect, useState } from 'react'

const Dashboard = () => {
  const [loading, setLoading] = useState(true)
  const securePage = async () => {
    const session = await getSession()
    if (!session) {
      signIn()
    } else {
      setLoading(false)
    }
  }
  useEffect(() => {
    securePage()
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }
  return <h1>Dashboard</h1>
}

export default Dashboard
