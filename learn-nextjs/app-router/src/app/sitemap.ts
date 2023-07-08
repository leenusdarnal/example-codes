type Post = {
  userId: string
  id: number
  tite: string
  body: string
}

const sitemap = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const allPosts = (await res.json()) as Post[]

  const posts = allPosts.map((post) => ({
    url: `http://localhost:3000/post/${post.id}`,
    lastModified: new Date().toISOString(),
  }))

  const routes = ['', '/post', '/dashboard'].map((route) => ({
    url: `http://localhost:3000/${route}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes, ...posts]
}

export default sitemap
