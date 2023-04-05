import { useState, useEffect } from 'react'

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [dashBoardData, setDashBoardData] = useState('')

  useEffect(() => {
    const fetchDashBoardData = async () => {
      const response = await fetch('http://localhost:4000/dashboard')
      const data = await response.json()
      setDashBoardData(data)
      setIsLoading(false)
    }
    fetchDashBoardData()
  }, [])

  if (isLoading) {
    return <h1>Loading....</h1>
  }
  return (
    <div>
      <h1>Dashboard 1</h1>
      <h2>Posts - {dashBoardData.post}</h2>
      <h2>likes - {dashBoardData.likes}</h2>
      <h2>Follower - {dashBoardData.follower}</h2>
      <h2>Following - {dashBoardData.following}</h2>
    </div>
  )
}

export default Dashboard
