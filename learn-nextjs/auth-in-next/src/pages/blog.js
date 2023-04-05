import { getSession, useSession } from 'next-auth/react'

const Blog = ({ data, foo }) => {
  const { data: session, status } = useSession()
  console.log({ session, status, foo })
  return (
    <>
      <h1>Blog</h1>
      <h2>{data}</h2>
    </>
  )
}

export default Blog

export const getServerSideProps = async (context) => {
  const session = await getSession(context)
  const {
    req: {
      headers: { referer },
    },
  } = context
  console.log(referer)
  if (!session) {
    return {
      redirect: {
        destination: `/api/auth/signin?callbackUrl=${referer}`,
        permanent: false,
      },
    }
  }
  return {
    props: {
      data: session
        ? 'List of 100 perosnalised blogs'
        : 'List of 1000 top blogs',
      session,
    },
  }
}
