import { useRouter } from 'next/router'

const Post = ({ post }) => {
  const router = useRouter()
  // if (router.isFallback) {
  //   return <h1>Loading....</h1>
  // }

  return (
    <>
      <h2>
        ID-{post.id} :Title-{post.title}
      </h2>
      <hr />
      <p>{post.body}</p>
    </>
  )
}

export default Post

export const getStaticProps = async (context) => {
  const { params } = context
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  )

  const data = await response.json()
  if (!data.id) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      post: data,
    },
  }
}
export const getStaticPaths = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
  const data = await response.json()
  const newData = data.slice(0, 3)

  const paths = newData.map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    }
  })
  return {
    paths,
    fallback: 'blocking',
  }
}
