import useSWR from 'swr'

const DashboardSWR = () => {
  const fetcher = async () => {
    const response = await fetch('http://localhost:4000/dashboard')
    const data = response.json()
    return data
  }
  const { data, error } = useSWR('dashboard', fetcher)
  if (error) return <h1>An error has occured</h1>
  if (!data) return <h1>Loading</h1>
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Posts - {data.post}</h2>
      <h2>likes - {data.likes}</h2>
      <h2>Follower - {data.follower}</h2>
      <h2>Following - {data.following}</h2>
    </div>
  )
}

export default DashboardSWR
