const PostId = ({
  params,
  searchParams,
}: {
  params: { postId: string[] }
  searchParams: { searchQuery: string }
}) => {
  return (
    <div>
      PostId-{...params.postId}
      search- {searchParams.searchQuery}
    </div>
  )
}

export default PostId

export const generateStaticParams = async () => {
  const posts = ['post-one', 'post-two']

  return posts.map((post) => {
    return {
      postId: post,
    }
  })
}

export const revalidate = 10
