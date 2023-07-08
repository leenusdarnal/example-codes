const Doc = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    next: { revalidate: 10 },
  })
  const data = await res.json()
  return <div>{JSON.stringify(data)}</div>
}

export default Doc
